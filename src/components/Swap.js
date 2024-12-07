import React from 'react';

const Swap = () => {
    const handleSwap = () => {
        // Implement swap logic
        alert("Swap functionality not implemented yet!");
    };

    return (
        <div className="mt-4">
            <h5>Swap</h5>
            <button className="btn btn-warning" onClick={handleSwap}>Swap Tokens</button>
        </div>
    );
};

export default Swap;