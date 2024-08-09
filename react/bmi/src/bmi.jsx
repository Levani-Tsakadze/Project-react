import React, { useState } from "react";

function Bmi() {
  const [kilogram, setKilogram] = useState();
  const [centimeter, setCentimeter] = useState();
  const [bmi, setBmi] = useState();
  const [bmiStatus, setBmiStatus] = useState('');

  function handleKilogramChange(event) {
    setKilogram(event.target.value);
  }

  function handleCentimeterChange(event) {
    setCentimeter(event.target.value);
  }

  const calculateBMI = () => {
    const heightInMeters = centimeter / 100;
    const bmiValue = kilogram / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
    setBmiStatus(getBmiStatus(bmiValue));
  };

  const getBmiStatus = (bmiValue) => {
    if (bmiValue < 18.5) {
      return 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      return 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  return (
    <div className="container">
      <h2 className="title">BMI Calculator</h2>
      <div className="input-container">
        <input type="number" placeholder="Enter Your Weight (kilogram)" value={kilogram} onChange={handleKilogramChange}/>
      </div>
      <div className="input-container">
        <input type="number" placeholder="Enter Your Height (centimeter)" value={centimeter} onChange={handleCentimeterChange}/>
      </div>
      <div className="button-container">
        <button className="calculate-button" onClick={calculateBMI}>
          Calculate BMI
        </button>
      </div>
      {bmi && <div className="result">Your BMI is: {bmi} - {bmiStatus}</div>}
    </div>
  );
}

export default Bmi;
