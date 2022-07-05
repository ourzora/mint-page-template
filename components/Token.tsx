export {}
/*
import { Text, Box } from "@zoralabs/zord";
import { baseUrl } from "@lib/constants";
import { ipfsImage } from "@lib/helpers";

export function Token({ metadata }) {
  const { name, tokenId, animation_url, attributes = [] } = metadata;

  return (
    <>
      <Box
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <Box style={{ display: "grid", gridTemplateColumns: "10em 1fr" }}>
            <Box>ID:</Box>
            <Box>{tokenId}</Box>
          </Box>
          <Box style={{ display: "grid", gridTemplateColumns: "10em 1fr" }}>
            <Box>Name:</Box>
            <Box>{name}</Box>
          </Box>
          <br />
          <Box>
            {attributes.map(({ trait_type, value }) => (
              <Box
                style={{ display: "grid", gridTemplateColumns: "10em 1fr" }}
                key={trait_type}
              >
                <Box>{trait_type}:</Box>
                <Box>{value}</Box>
              </Box>
            ))}
          </Box>
          <br />
          <br />
          <Text>
            <a
              target="_blank"
              rel="noreferrer"
              href={`${baseUrl}/api/metadata/${tokenId}`}
            >
              View Metadata
            </a>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://etherscan.io/address/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}#code`}
            >
              View Contract
            </a>
          </Text>
          <Text>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://zora.co/collections/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}/${tokenId}`}
            >
              View on Zora
            </a>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://opensea.io/assets/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}/${tokenId}`}
            >
              View on Opensea
            </a>
          </Text>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          maxHeight: "calc(100vh - 8rem)",
          width: "100%",
        }}
      >
        <img
          style={{ objectFit: "contain" }}
          src={ipfsImage(image)}
          alt={name}
        />
        {<iframe
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          height="100%"
          src={animation_url}
          width="100%"
          sandbox="allow-same-origin allow-scripts"
          sandbox="allow-scripts"
          style={{ minHeight: '500px' }}
        ></iframe>}
      </Box>
    </>
  );
}
  */
