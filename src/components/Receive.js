import React from 'react';

const Receive = ({ walletAddress }) => {
    return (
        <div className="mt-4">
            <h5>Receive</h5>
            <p>Share this address to receive ETH:</p>
            <p className="bg-light p-3 rounded">{walletAddress}</p>
        </div>
    );
};

export default Receive;