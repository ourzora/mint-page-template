import { ethers } from "ethers";
import Contract from "@contracts/artifacts/contracts/YOURCONTRACT.sol/YOURCONTRACT.json";
import fs from "fs";
import path from "path";

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

const getContractDataCached = async (values) => {
  const contract = new ethers.Contract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    Contract.abi,
    new ethers.providers.JsonRpcProvider()
  );

  const data = await getContractData(contract, ...values.split(","));
  return data;
};

export default async function handler(req, res) {
  const { values } = req.query;
  let buff = new Buffer(values);
  let base64data = buff.toString("base64");

  const CACHE_PATH = path.resolve(`.contract-data-${base64data}`);

  let cachedData;
  try {
    cachedData = JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
  } catch (error) {}

  if (!cachedData) {
    const data = await getContractDataCached(values);
    try {
      fs.writeFileSync(CACHE_PATH, JSON.stringify(data), "utf8");
    } catch (error) {
      console.log(error);
    }
    cachedData = data;
  }

  // Cache for the max, 31 days
  //res.setHeader("Cache-Control", `public, max-age=2678400`);
  res.status(200).json(cachedData);
}
