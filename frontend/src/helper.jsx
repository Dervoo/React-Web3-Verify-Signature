import { ethers } from "ethers";
import VerifySignature from "./contractAbi/VerifySignature.json";

export const getContractComponents = (globalProvider) => {
    const address = "0xBA9CD73bB5a429dc95203933aA4C0c6C5A887987";
    const provider = globalProvider;
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, VerifySignature.abi, signer);
    return [address, provider, signer, contract];
};

