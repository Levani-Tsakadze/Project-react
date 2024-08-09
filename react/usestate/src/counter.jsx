import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [customCount, setCustomCount] = useState();

    function minus() {
        setCount(prevCount => prevCount - 1);
    }

    function reset() {
        setCount(0);
    }

    function add() {
        setCount(prevCount => prevCount + 1);
    }

    function handleCustomCountChange(event) {
        setCustomCount(parseInt(event.target.value) || 0);
    }

    function setCustom() {
        setCount(customCount);
    }

    return (
        <div>
            <button className="Minus" onClick={minus}>-1</button>
            <button className="Reset" onClick={reset}>Reset</button>
            <button className="add" onClick={add}>+1</button>
            <p className="Count">Count: {count}</p>
            <input className="set" value={customCount} onChange={handleCustomCountChange} type="number" />
            <button className="set" onClick={setCustom}>Set</button>
        </div>
    );
}

export default Counter;
