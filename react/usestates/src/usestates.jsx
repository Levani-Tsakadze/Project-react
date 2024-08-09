import React, { useState } from "react";

function States() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [rate, setRate] = useState("");
    const [feedback, setFeedback] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleAgeChange(event) {
        setAge(event.target.value);
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }
    function handleRateChange(event) {
        setRate(event.target.value);
    }
    function handleFeedbackChange(event) {
        setFeedback(event.target.value);
    }

    return (
        <div>
            <textarea className="Name" value={name} onChange={handleNameChange} placeholder="Enter UserName"/>
            <h1 className="Name-h1">UserName: {name}</h1>

            <input className="Name"value={age} onChange={handleAgeChange} type="number"  placeholder="Enter Age"/>
            <h1 className="Name-h1">Age: {age}</h1>

            <input className="Password" value={password} onChange={handlePasswordChange} type="password" placeholder="Enter Password"/>
            <h1 className="Password.h1" >Password: {password} </h1>

            <select value={rate} onChange={handleRateChange}>
                <option value="">Rate us</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <div>
                <input type="radio" value="Good" onChange={handleFeedbackChange} />
                <label>Good</label>
                <input type="radio" value="Normal" onChange={handleFeedbackChange} />
                <label>Normal</label>
                <input type="radio" value="Bad" onChange={handleFeedbackChange} />
                <label>Bad</label>
            </div>
        </div>
    );
}

export default States;
