import React, { useState } from 'react';

const Send = () => {
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');

    const handleSend = () => {
        // Implement send logic
        alert(`Sending ${amount} ETH to ${address}`);
    };

    return (
        <div className="mt-4">
            <h5>Send</h5>
            <input 
                type="text" 
                placeholder="Recipient Address" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                className="form-control"
            />
            <input 
                type="number" 
                placeholder="Amount in ETH" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                className="form-control mt-2"
            />
            <button className="btn btn-primary mt-2" onClick={handleSend}>Send ETH</button>
        </div>
    );
};

export default Send;