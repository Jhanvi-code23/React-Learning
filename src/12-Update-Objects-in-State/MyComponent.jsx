import React, { useState } from "react";

function MyComponent() {
    const [car, setCar]= useState({
        year: 2020,
        make: "Toyota",
        model: "Camry",
        color: "blue"
    }); //object in state


    function handleYearChange(event) {
        setCar({...car, year: event.target.value}); //...car is used to copy the existing properties of the car object and then we update the year property with the new value from the input field.
    }

    function handleMakeChange(event) {
        setCar({...car, make: event.target.value});
    }

    function handleModelChange(event) {
        setCar({...car, model: event.target.value});
    }

    function handleColorChange(event) {
        setCar({...car, color: event.target.value});
    }
    return(
        <div>
            <p>You favourtie car is a {car.year} {car.color} {car.make} {car.model}.</p>
            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
            <input type="text" value={car.model} onChange={handleModelChange}/><br/>
            <input type="text" value={car.color} onChange={handleColorChange}/><br/>
        </div>
    )
}

export default MyComponent;