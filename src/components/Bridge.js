import React from 'react';

const Bridge = () => {
    const handleBridge = () => {
        // Implement bridge logic
        alert("Bridge functionality not implemented yet!");
    };

    return (
        <div className="mt-4">
            <h5>Bridge</h5>
            <button className="btn btn-info" onClick={handleBridge}>Bridge Tokens</button>
        </div>
    );
};

export default Bridge;