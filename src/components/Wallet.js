import React, { useState } from 'react';
import { ethers } from 'ethers';

const Wallet = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const [seedPhrase, setSeedPhrase] = useState('');

    const createWallet = async () => {
        const wallet = ethers.Wallet.createRandom();
        setWalletAddress(wallet.address);
        setSeedPhrase(wallet.mnemonic.phrase);
        // Store private key securely (not shown here for security reasons)
    };

    return (
        <div>
            <h1>eWalletHub</h1>
            <button onClick={createWallet}>Create Wallet</button>
            {walletAddress && <p>Wallet Address: {walletAddress}</p>}
            {seedPhrase && <p>Seed Phrase: {seedPhrase}</p>}
        </div>
    );
};

export default Wallet;