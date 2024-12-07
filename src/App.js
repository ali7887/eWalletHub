import React from 'react';
import Wallet from './components/Wallet';
import BuySell from './components/BuySell'; // Import BuySell component
import Swap from './components/Swap';       // Import Swap component
import Bridge from './components/Bridge';   // Import Bridge component
import Send from './components/Send';       // Import Send component
import Receive from './components/Receive'; // Import Receive component
import Balance from './components/Balance'; // Import Balance component
import useWallet from './hooks/useWallet'; // Import the useWallet hook

const App = () => {
    const { walletAddress, balance, connectWallet } = useWallet(); // Use the hook

    return (
        <div className="container">
            <h1 className="text-center mt-5">eWalletHub</h1>
            <button className="btn btn-primary" onClick={connectWallet}>
                Connect Wallet
            </button>
            <Wallet walletAddress={walletAddress} />
            <Balance walletAddress={walletAddress} balance={balance} />
            <BuySell />
            <Swap />
            <Bridge />
            <Send />
            <Receive walletAddress={walletAddress} />
        </div>
    );
};

export default App;