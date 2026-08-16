import React, {useState} from "react";
function MyComponent() {
    const[foods,setFoods] = useState(["Pizza","Burger","Pasta"]);

    //we will create 2 functions- 1. to add a new food item to the array and 2. to remove a food item from the array
    
    function handleAddFood() {
        const newFood= document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        
        setFoods([newFood]); //spread operator is used to copy the existing array and add the new food item to it
    }
    const handleRemoveFood = () => {}

    return(
        <div>
            <h1>Food Items</h1>
            <ul>
                {foods.map((food,index) =>
                    <li key={index}>{food}</li>
                )}

                <input type="text" placeholder="Enter a food item" />
                <button onClick={handleAddFood}>Add Food</button>
                <button onClick={handleRemoveFood}>Remove Food</button>
            </ul>
        </div>
    )
}
export default MyComponent;