import React, {useState} from "react";

function MyComponent(){
    const [name, setName] = useState("Guest"); //a useState hook return an array with two values, first is the current state value (variable) and second is a function to update that state value(setter).
                                               //guest is a default value for the state variable name, which will be used when the component is first rendered.

    const [age, setAge] = useState(0); 

    const [isEmployed, setIsEmployed] = useState(false); 


    const updateName = () => {
    //     name= ("Jhanvi"); //variable name is updated but the component is not re-rendered to reflect the change in the UI.
    //     console.log(name); //only the updated value is printed in the console, but the component is not re-rendered to reflect the change in the UI.
    setName("Jhanvi"); //the setter function is called to update the state value, and the component is re-rendered to reflect the change in the UI.
    }


    const toggleEmployementStatus = () => {
        setIsEmployed(!isEmployed); //the setter function is called to update the state value, and the component is re-rendered to reflect the change in the UI.
    }


    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={() => setAge(age + 1)}>Increment Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployementStatus}>Toggle Status</button>
        </div>
    );
}
export default MyComponent;