import { Transaction } from '../types';

export const shortValue = (value: string | undefined, size = 4) => {
  if (!value?.length && typeof value !== 'string') {
    return '';
  }
  const prefix = value.substring(0, size);
  const suffix = value.substring(value.length - size, value.length);

  return `${prefix}...${suffix}`;
};

export const mockedTransactions: Transaction[] = [
  {
    hash: '9dad75febbdecf82bb2594ee7c52789b8abdc9cd79914db43c88b85ae176e5cf',
    blockNum: 3598629,
    sender: 'klv19x04g3kp4mgddtsfedzzhz9tllvvjplxgp7pahj3nwty2y4ana9qkvy4ar',
    nonce: 18,
    data: [
      '7b0a0909226e616d65223a224b4c56362d23353134222c0a0909226465736372697074696f6e223a2242757920666f72205374616b696e67204b4c563620546f6b656e222c0a09092265787465726e616c5f75726c223a2268747470733a2f2f6d7970726f6a6563742e696f222c0a090922696d616765223a2268747470733a2f2f696d616765732e6d7970726f6a6563742e696f2f3531342e706e67222c0a09092261747472696275746573223a5b0a090920207b0a0909092274726169745f74797065223a22416d6f756e74222c0a0909092276616c7565223a2231392e363630363030220a090920207d2c0a090920207b0a0909092274726169745f74797065223a22546f6b656e222c0a0909092276616c7565223a22424653542d3334504d220a090920207d2c0a090920207b0a0909092274726169745f74797065223a2248617368222c0a0909092276616c7565223a2235623466333363656532623866633933666636383964393264303433376562383261376631663137663035373037393939633465613630353337646462653031220a090920207d2c0a090920207b0a0909092274726169745f74797065223a2252657761726452617465222c0a0909092276616c7565223a20223825220a090920207d2c0a090920207b0a0909092274726169745f74797065223a22436c61696d61626c65416d6f756e74222c0a0909092276616c7565223a202232312e323333343438220a090920207d2c0a090920207b0a0909092274726169745f74797065223a224d696e7465644174222c0a0909092276616c7565223a22323032322d31322d31355431333a34353a32375a220a090920207d2c0a090920207b0a0909092274726169745f74797065223a225374616b696e67506572696f64222c0a0909092276616c7565223a22366d220a090920207d2c0a090920207b0a0909092274726169745f74797065223a22417661696c61626c654174222c0a0909092276616c7565223a22323032332d30362d31335431333a34353a32375a220a090920207d0a09095d0a0920207d',
    ],
    timestamp: 1671111936000,
    kAppFee: 2000000,
    bandwidthFee: 4076000,
    status: 'success',
    resultCode: 'Ok',
    version: 1,
    chainID: '108',
    signature: [
      'afba80461a9f7dc9671a00c19237cf039343dd3269e561ec3db442f4a1303892cb4489df124b0c05b42de18cabdde1fdf67c5c247bd522ef5e42859f1e12c30d',
    ],
    searchOrder: 1,
    receipts: [
      {
        signer:
          'klv19x04g3kp4mgddtsfedzzhz9tllvvjplxgp7pahj3nwty2y4ana9qkvy4ar',
        type: 19,
        weight: '1',
      },
      {
        assetId: 'BFST-34PM',
        type: 2,
      },
      {
        assetId: 'BFST-34PM',
        nftNonce: '8',
        owner: 'klv1r2nqxstvj7q7340ynzwg4pch8qd6kdnx4euw82w7wslhq8j8a85s3j4gru',
        type: 20,
      },
    ],
    contract: [
      {
        type: 11,
        typeString: 'AssetTriggerContractType',
        parameter: {
          assetId: 'BFST-34PM/8',
          logo: '',
          mime: 'application/json',
          toAddress:
            'klv1r2nqxstvj7q7340ynzwg4pch8qd6kdnx4euw82w7wslhq8j8a85s3j4gru',
          triggerType: 'UpdateMetadata',
          uris: null,
        },
      },
    ],
  },
  {
    hash: '5b4f33cee2b8fc93ff689d92d0437eb82a7f1f17f05707999c4ea60537ddbe01',
    blockNum: 3598627,
    sender: 'klv19x04g3kp4mgddtsfedzzhz9tllvvjplxgp7pahj3nwty2y4ana9qkvy4ar',
    nonce: 17,
    timestamp: 1671111928000,
    kAppFee: 2000000,
    bandwidthFee: 1000000,
    status: 'success',
    resultCode: 'Ok',
    version: 1,
    chainID: '108',
    signature: [
      '65ec9cfc608c49b65f0f34b3651ff95d79f61796282ced364460346021c2e046d7d028f96a92a46d6921f38b5ea799694650cb17cf8316ac81636b982b853d0f',
    ],
    searchOrder: 1,
    receipts: [
      {
        signer:
          'klv19x04g3kp4mgddtsfedzzhz9tllvvjplxgp7pahj3nwty2y4ana9qkvy4ar',
        type: 19,
        weight: '1',
      },
      {
        assetId: 'BFST-34PM',
        type: 2,
      },
      {
        assetId: 'BFST-34PM/8',
        from: 'klv1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpgm89z',
        to: 'klv1r2nqxstvj7q7340ynzwg4pch8qd6kdnx4euw82w7wslhq8j8a85s3j4gru',
        type: 0,
        value: 1,
      },
    ],
    contract: [
      {
        type: 11,
        typeString: 'AssetTriggerContractType',
        parameter: {
          amount: 1,
          assetId: 'BFST-34PM',
          logo: '',
          toAddress:
            'klv1r2nqxstvj7q7340ynzwg4pch8qd6kdnx4euw82w7wslhq8j8a85s3j4gru',
          triggerType: 'Mint',
          uris: null,
        },
      },
    ],
  },
  {
    hash: 'a43858add758238c35c262c1719f7d6bc201bc2741fd7a49720ac11581279b7c',
    blockNum: 3566526,
    sender: 'klv1r2nqxstvj7q7340ynzwg4pch8qd6kdnx4euw82w7wslhq8j8a85s3j4gru',
    nonce: 50,
    data: [''],
    timestamp: 1670983140000,
    kAppFee: 500000,
    bandwidthFee: 1000000,
    status: 'success',
    resultCode: 'Ok',
    version: 1,
    chainID: '108',
    signature: [
      '1eeb69abdf25a1a370081a9771afaf453130110766abc214f6baa1c0757c1ada6fa8ca99db23f950494a86e6d10935b80d0ed9dd86c0386624759e21b2b4b60c',
    ],
    searchOrder: 0,
    receipts: [
      {
        signer:
          'klv1r2nqxstvj7q7340ynzwg4pch8qd6kdnx4euw82w7wslhq8j8a85s3j4gru',
        type: 19,
        weight: '1',
      },
      {
        assetId: 'KLV',
        from: 'klv1r2nqxstvj7q7340ynzwg4pch8qd6kdnx4euw82w7wslhq8j8a85s3j4gru',
        to: 'klv19x04g3kp4mgddtsfedzzhz9tllvvjplxgp7pahj3nwty2y4ana9qkvy4ar',
        type: 0,
        value: 50000000000,
      },
    ],
    contract: [
      {
        type: 0,
        typeString: 'TransferContractType',
        parameter: {
          amount: 50000000000,
          toAddress:
            'klv19x04g3kp4mgddtsfedzzhz9tllvvjplxgp7pahj3nwty2y4ana9qkvy4ar',
        },
      },
    ],
  },
];
