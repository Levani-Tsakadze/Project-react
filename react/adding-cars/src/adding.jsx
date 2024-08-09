import React, { useState } from 'react';

function Adding() {

    const [cars, setCars] = useState(["Mercedes", "BMW"]);

    function handleAddCar() {
        const newCar = document.getElementById("carInput").value;
        document.getElementById("carInput").value = "";
        setCars(c => [...c, newCar]);
    }

    function handleRemoveCar(index) {
        setCars(cars.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>List of cars</h2>
            <ul>
                {cars.map((car, index) =>
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car}
                    </li>
                )}
            </ul>
            <input type="text" id="carInput" placeholder="Enter car name" />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default Adding;
