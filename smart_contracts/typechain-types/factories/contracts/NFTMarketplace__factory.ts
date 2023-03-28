/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  NFTMarketplace,
  NFTMarketplaceInterface,
} from "../../contracts/NFTMarketplace";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6104938061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063715018a6146100465780638da5cb5b14610050578063f2fde38b1461006e575b600080fd5b61004e61008a565b005b61005861009e565b60405161006591906102d5565b60405180910390f35b61008860048036038101906100839190610321565b6100c7565b005b61009261014a565b61009c60006101c8565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6100cf61014a565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361013e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610135906103d1565b60405180910390fd5b610147816101c8565b50565b61015261028c565b73ffffffffffffffffffffffffffffffffffffffff1661017061009e565b73ffffffffffffffffffffffffffffffffffffffff16146101c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101bd9061043d565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102bf82610294565b9050919050565b6102cf816102b4565b82525050565b60006020820190506102ea60008301846102c6565b92915050565b600080fd5b6102fe816102b4565b811461030957600080fd5b50565b60008135905061031b816102f5565b92915050565b600060208284031215610337576103366102f0565b5b60006103458482850161030c565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006103bb60268361034e565b91506103c68261035f565b604082019050919050565b600060208201905081810360008301526103ea816103ae565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061042760208361034e565b9150610432826103f1565b602082019050919050565b600060208201905081810360008301526104568161041a565b905091905056fea2646970667358221220619969f0802f6b99915dd87560d556b36f93267e518d33f01219cfa40bf9965264736f6c63430008120033";

type NFTMarketplaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTMarketplaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTMarketplace__factory extends ContractFactory {
  constructor(...args: NFTMarketplaceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFTMarketplace> {
    return super.deploy(overrides || {}) as Promise<NFTMarketplace>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTMarketplace {
    return super.attach(address) as NFTMarketplace;
  }
  override connect(signer: Signer): NFTMarketplace__factory {
    return super.connect(signer) as NFTMarketplace__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTMarketplaceInterface {
    return new utils.Interface(_abi) as NFTMarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTMarketplace {
    return new Contract(address, _abi, signerOrProvider) as NFTMarketplace;
  }
}
