// src/components/Balance.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ethers } from 'ethers';

const Balance = ({ walletAddress }) => {
    const [balanceETH, setBalanceETH] = useState(0);
    const [balanceUSD, setBalanceUSD] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBalance = async () => {
            if (walletAddress) {
                try {
                    // Create a provider to interact with Ethereum network
                    const provider = new ethers.BrowserProvider(window.ethereum);
                    
                    // Fetch balance in Wei and convert to ETH
                    const balanceInWei = await provider.getBalance(walletAddress);
                    const balanceInEth = ethers.formatEther(balanceInWei);
                    setBalanceETH(balanceInEth);

                    // Fetch ETH price in USD using CoinGecko API
                    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
                    const priceInUSD = response.data.ethereum.usd;
                    setBalanceUSD(balanceInEth * priceInUSD);
                } catch (error) {
                    console.error("Error fetching balance:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchBalance();
    }, [walletAddress]);

    return (
        <div className="mt-4">
            <h5>Balance</h5>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <p>{balanceETH} ETH</p>
                    <p>${balanceUSD.toFixed(2)} USD</p>
                </>
            )}
        </div>
    );
};

export default Balance;