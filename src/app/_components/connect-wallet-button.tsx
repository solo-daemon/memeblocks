"use client";

import { useEffect } from "react";
import { FaWallet } from "react-icons/fa";
import { useAccount } from "wagmi";

export const ConnectWalletButton = () =>{
    const { address, isConnecting, isDisconnected } = useAccount()

    useEffect(()=>{
        console.log(address)
        if(!isDisconnected){
            alert(address)
        }
    },[isDisconnected])
    return (
        <w3m-button />
      );
}