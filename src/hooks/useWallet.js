// src/hooks/useWallet.js
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const useWallet = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const [balance, setBalance] = useState(0);
    const [provider, setProvider] = useState(null);

    useEffect(() => {
        const checkIfWalletIsConnected = async () => {
            if (window.ethereum) {
                const web3Provider = new ethers.BrowserProvider(window.ethereum);
                setProvider(web3Provider);

                const accounts = await web3Provider.getAccounts();
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                    fetchBalance(accounts[0], web3Provider);
                }
            } else {
                console.log("MetaMask is not installed!");
            }
        };

        checkIfWalletIsConnected();
    }, []);

    const fetchBalance = async (address, web3Provider) => {
        if (web3Provider) {
            const balanceInWei = await web3Provider.getBalance(address);
            const balanceInEth = ethers.formatEther(balanceInWei);
            setBalance(balanceInEth);
        }
    };

    const connectWallet = async () => {
        if (provider) {
            const accounts = await provider.send("eth_requestAccounts", []);
            setWalletAddress(accounts[0]);
            fetchBalance(accounts[0], provider);
        }
    };

    return { walletAddress, balance, connectWallet };
};

export default useWallet;