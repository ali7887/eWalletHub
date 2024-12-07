import React, { useState } from 'react';
import { ethers } from 'ethers';

const Transaction = ({ wallet }) => {
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');

    const sendTransaction = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        
        const tx = {
            to: recipient,
            value: ethers.utils.parseEther(amount),
        };

        await signer.sendTransaction(tx);
        alert('Transaction sent!');
    };

    return (
        <div>
            <input type="text" placeholder="Recipient Address" onChange={(e) => setRecipient(e.target.value)} />
            <input type="text" placeholder="Amount in ETH" onChange={(e) => setAmount(e.target.value)} />
            <button onClick={sendTransaction}>Send ETH</button>
        </div>
    );
};

export default Transaction;