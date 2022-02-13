import { Box, Text } from "@components/primitives";
import { ConnectWallet } from "@components/ConnectWallet";

export default function Home() {
  return (
    <Box css={{ textAlign: "center" }}>
      <Text>Hello.</Text>
      <ConnectWallet />
    </Box>
  );
}
