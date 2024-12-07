import React from 'react';

const BuySell = () => {
    const handleBuy = () => {
        // Implement buy logic
        alert("Buy functionality not implemented yet!");
    };

    const handleSell = () => {
        // Implement sell logic
        alert("Sell functionality not implemented yet!");
    };

    return (
        <div className="mt-4">
            <h5>Buy & Sell</h5>
            <button className="btn btn-success" onClick={handleBuy}>Buy</button>
            <button className="btn btn-danger" onClick={handleSell}>Sell</button>
        </div>
    );
};

export default BuySell;