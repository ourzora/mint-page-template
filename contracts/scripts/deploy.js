// Create a Frame connection
const ethProvider = require("eth-provider"); // eth-provider is a simple EIP-1193 provider

async function main() {
  const frame = ethProvider("frame"); // Connect to Frame
  // We get the contract to deploy
  const Token = await ethers.getContractFactory("NUXUI");
  const tx = await Token.getDeployTransaction();
  tx.from = (await frame.request({ method: "eth_requestAccounts" }))[0];
  const transaction = await frame.request({
    method: "eth_sendTransaction",
    params: [tx],
  });

  console.log("Sending:", { transaction });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
