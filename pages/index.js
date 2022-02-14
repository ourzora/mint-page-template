import { useState, useEffect } from "react";
import { utils } from "ethers";
import { Box, Text } from "@components/primitives";
import { ConnectWallet } from "@components/ConnectWallet";
import { useContract, useProvider } from "wagmi";
import Contract from "../contracts/artifacts/contracts/YOURCONTRACT.sol/YOURCONTRACT.json";

const getContractData = async (contract, ...args) => {
  try {
    const o = await Promise.all(
      args.map(async (k) => [k, await contract[k]()])
    );
    return Object.fromEntries(o);
  } catch (e) {
    return null;
  }
};

const Home = () => {
  const provider = useProvider();
  const contract = useContract({
    addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    contractInterface: Contract.abi,
    signerOrProvider: provider,
  });
  const [contractData, setContractData] = useState();

  useEffect(() => {
    const f = async () => {
      const data = await getContractData(
        contract,
        "ETH_PRICE",
        "totalSupply",
        "maxSupply"
      );
      setContractData(data);
    };
    f();
  }, []);

  return (
    <Box css={{ textAlign: "center" }}>
      <Text>Hello.</Text>
      <ConnectWallet />
      {contractData && (
        <>
          <br />
          <br />
          {utils.formatEther(contractData.ETH_PRICE)} ETH
          <br />
          {contractData.totalSupply.toString()} /{" "}
          {contractData.maxSupply.sub(1).toString()}
        </>
      )}
    </Box>
  );
};

export default Home;
