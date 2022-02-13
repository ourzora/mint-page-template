import { useState, useEffect } from "react";
import { useConnect, useAccount } from "wagmi";

export const useIsMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
};

export const ConnectWallet = () => {
  const isMounted = useIsMounted();
  const [{ data, error }, connect] = useConnect();
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });

  if (accountData) {
    return (
      <div>
        {accountData.ens?.avatar && (
          <img src={accountData.ens?.avatar} alt="ENS Avatar" />
        )}
        <div>
          {accountData.ens?.name
            ? `${accountData.ens?.name} (${accountData.address})`
            : accountData.address}
        </div>
        <div>Connected to {accountData.connector.name}</div>
        <button onClick={disconnect}>Disconnect</button>
      </div>
    );
  }

  return (
    <>
      {data.connectors.map((x) => (
        <button
          disabled={isMounted ? !x.ready : false}
          key={x.id}
          onClick={() => connect(x)}
        >
          {isMounted ? x.name : x.id === "injected" ? x.id : x.name}
          {isMounted ? !x.ready && " (unsupported)" : ""}
        </button>
      ))}
      {error && <div>{error?.message ?? "Failed to connect"}</div>}
    </>
  );
};
