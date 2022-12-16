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
  HashContainer,
  LogoContainer,
  LogoContent,
} from './styles';

import { RxUpdate } from 'react-icons/rx';
import { connect } from '../../providers/klever';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { TransactionType } from '@klever/sdk';

const Home: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [transactions, setTransactions] =
    useState<Transaction[]>(mockedTransactions);
  const [loading, setLoading] = useState(false);
  const [lastHash, setLastHash] = useState('');

  const handleConnect = async () => {
    const address = await connect();
    if (address.includes('KleverWeb')) return;

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

    setLoading(true);
    const transactionList = await getTransactionList(window.kleverWeb.address);
    if (transactionList.length === 0) return;

    setTransactions(transactionList);
    setLoading(false);
  };

  const handleSend = async (address: string) => {
    const transactionPayload = {
      type: TransactionType.Transfer,
      payload: {
        receiver: address,
        amount: 1,
        asset: 'BFST-34PM',
      },
    };
    const transaction = await window.kleverWeb.buildTransaction([
      transactionPayload,
    ]);

    await window.kleverWeb.signTransaction(transaction);
    const response = await window.kleverWeb.broadcastTransactions([
      transaction,
    ]);
    if (response.error.length !== 0) {
      console.warn('Error on broadcast transaction:', response.error);
      return;
    }

    const hashes = response.data.txsHashes;
    if (hashes.length === 0) {
      console.warn('No hashes returned');
      return;
    }

    setLastHash(hashes[0]);
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
              {loading && (
                <tr>
                  <td colSpan={4}>Loading...</td>
                </tr>
              )}
              {!loading &&
                getWithAssetTx().map((transaction, index) => (
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

          <Input title="Send Token" onSend={handleSend} />
          {lastHash && (
            <HashContainer>
              <span>Last transaction hash:</span>
              <p>
                <a
                  href={`https://kleverscan.org/transaction/${lastHash}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {shortValue(lastHash, 12)}
                </a>
              </p>
            </HashContainer>
          )}
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
