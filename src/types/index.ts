export interface Transaction {
  hash: string;
  blockNum: number;
  sender: string;
  nonce: number;
  data?: string[];
  timestamp: number;
  kAppFee: number;
  bandwidthFee: number;
  status: string;
  resultCode: string;
  version: number;
  chainID: string;
  signature: string[];
  searchOrder: number;
  receipts: {
    signer?: string;
    assetId?: string;
    nftNonce?: string;
    from?: string;
    owner?: string;
    to?: string;
    type: number;
    weight?: string;
    value?: number;
  }[];
  contract: {
    type: number;
    typeString: string;
    parameter: {
      amount?: number;
      assetId?: string;
      logo?: string;
      mime?: string;
      toAddress?: string;
      triggerType?: string;
      uris?: string[] | null;
    };
  }[];
}
