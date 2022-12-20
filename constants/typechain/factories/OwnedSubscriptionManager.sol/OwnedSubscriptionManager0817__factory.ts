/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OwnedSubscriptionManager0817,
  OwnedSubscriptionManager0817Interface,
} from "../../OwnedSubscriptionManager.sol/OwnedSubscriptionManager0817";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_initialOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ONLY_OWNER",
    type: "error",
  },
  {
    inputs: [],
    name: "ONLY_PENDING_OWNER",
    type: "error",
  },
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
        name: "potentialNewOwner",
        type: "address",
      },
    ],
    name: "OwnerCanceled",
    type: "event",
  },
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
        name: "potentialNewOwner",
        type: "address",
      },
    ],
    name: "OwnerPending",
    type: "event",
  },
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
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cancelOwnershipTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
    name: "pendingOwner",
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
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "safeTransferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040526daaeb6d7670e522a718067333cd4e60805234801561002257600080fd5b50604051610642380380610642833981016040819052610041916100ed565b600080546001600160a01b0319166001600160a01b03831690811782556040518392907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350608051604051632210724360e11b81523060048201526001600160a01b0390911690634420e48690602401600060405180830381600087803b1580156100cf57600080fd5b505af11580156100e3573d6000803e3d6000fd5b505050505061011d565b6000602082840312156100ff57600080fd5b81516001600160a01b038116811461011657600080fd5b9392505050565b60805161050d6101356000396000505061050d6000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c80638da5cb5b116100505780638da5cb5b1461009c578063e30c3978146100df578063f2fde38b146100fd57600080fd5b806323452b9c14610077578063395db2cd1461008157806379ba509714610094575b600080fd5b61007f610110565b005b61007f61008f36600461049a565b6101d5565b61007f61029c565b60005473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60015473ffffffffffffffffffffffffffffffffffffffff166100b6565b61007f61010b36600461049a565b61037e565b60005473ffffffffffffffffffffffffffffffffffffffff163314610161576040517fd238ed5900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001546000805460405173ffffffffffffffffffffffffffffffffffffffff93841693909116917f682679deecef4dcd49674845cc1e3a075fea9073680aa445a8207d5a4bdea3da91a3600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610226576040517fd238ed5900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821790925560008054604051929316917f4f2638f5949b9614ef8d5e268cb51348ad7f434a34812bf64b6e95014fbd357e9190a350565b60015473ffffffffffffffffffffffffffffffffffffffff1633146102ed576040517f065cd53100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008054604051339273ffffffffffffffffffffffffffffffffffffffff909216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a360018054600080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff841617909155169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103cf576040517fd238ed5900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103d8816103db565b50565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8381169190911790915560015416156103d857600180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905550565b6000602082840312156104ac57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146104d057600080fd5b939250505056fea2646970667358221220d32cab87e14abb2acd03692dd6983e7b3b1aa370e27692ad8a36cb9bf439d78564736f6c63430008110033";

type OwnedSubscriptionManager0817ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnedSubscriptionManager0817ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OwnedSubscriptionManager0817__factory extends ContractFactory {
  constructor(...args: OwnedSubscriptionManager0817ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _initialOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OwnedSubscriptionManager0817> {
    return super.deploy(
      _initialOwner,
      overrides || {}
    ) as Promise<OwnedSubscriptionManager0817>;
  }
  override getDeployTransaction(
    _initialOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_initialOwner, overrides || {});
  }
  override attach(address: string): OwnedSubscriptionManager0817 {
    return super.attach(address) as OwnedSubscriptionManager0817;
  }
  override connect(signer: Signer): OwnedSubscriptionManager0817__factory {
    return super.connect(signer) as OwnedSubscriptionManager0817__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnedSubscriptionManager0817Interface {
    return new utils.Interface(_abi) as OwnedSubscriptionManager0817Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnedSubscriptionManager0817 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OwnedSubscriptionManager0817;
  }
}