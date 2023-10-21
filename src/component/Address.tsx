import React from "react";
import { useAccount } from "wagmi";

const Address = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  return <div>{address}</div>;
};

export default Address;
