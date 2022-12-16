import React, { useEffect, useState } from 'react';
import { Logo } from '../../assets';
import Table from '../../components/Table';
import { Transaction } from '../../types';
import { mockedTransactions, shortValue } from '../../utils';
import {
  ActionContainer,
  BlurContent,
  ConnectContainer,
  Container,
  LogoContainer,
  LogoContent,
} from './styles';

import { RxUpdate } from 'react-icons/rx';
import { connect } from '../../providers/klever';
import Button from '../../components/Button';

const Home: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [transactions, setTransactions] =
    useState<Transaction[]>(mockedTransactions);

  const handleConnect = async () => {
    const address = await connect();
    if (address.includes('KleverWeb')) {
      console.warn('error on connect');
      return;
    }

    setIsConnected(true);
  };

  useEffect(() => {
    (async () => {
      await updateTransactions();
    })();
  }, [isConnected]);

  const getWithAssetTx = () => {
    return transactions.filter(tx => tx.contract[0].parameter.assetId);
  };

  const getTransactionList = async (
    address: string,
  ): Promise<Transaction[]> => {
    const request = await fetch(
      `https://api.mainnet.klever.finance/v1.0/address/${address}/transactions`,
    );
    const response = await request.json();
    if (response.error.length > 0) return [];

    return response.data.transactions;
  };

  const updateTransactions = async () => {
    if (!isConnected) return;

    const transactionList = await getTransactionList(window.kleverWeb.address);
    if (transactionList.length === 0) return;

    setTransactions(transactionList);
  };

  return (
    <Container>
      <LogoContainer>
        <LogoContent>
          <img src={Logo} alt="Logo" />
        </LogoContent>
      </LogoContainer>
      <ActionContainer>
        <BlurContent hasConnection={isConnected}>
          <Table>
            <thead>
              <tr>
                <th>Hash</th>
                <th>Sender</th>
                <th>Asset ID</th>
                <th>
                  <RxUpdate onClick={updateTransactions} />
                </th>
              </tr>
            </thead>
            <tbody>
              {getWithAssetTx().map((transaction, index) => (
                <tr key={index}>
                  <td>
                    <a
                      href={`https://kleverscan.org/transaction/${transaction.hash}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {shortValue(transaction.hash, 8)}
                    </a>
                  </td>
                  <td>
                    <a
                      href={`https://kleverscan.org/account/${transaction.sender}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {shortValue(transaction.sender, 8)}
                    </a>
                  </td>
                  <td>{transaction.contract[0].parameter.assetId}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </BlurContent>
        {!isConnected && (
          <ConnectContainer>
            <Button name="Connect" onClick={handleConnect} />
          </ConnectContainer>
        )}
      </ActionContainer>
    </Container>
  );
};

export default Home;
