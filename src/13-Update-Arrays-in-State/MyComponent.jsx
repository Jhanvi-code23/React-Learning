import React, {useState} from "react";
function MyComponent() {
    const[foods, setFoods] = useState(["Pizza","Burger","Pasta"]);

    //we will create 2 functions- 1. to add a new food item to the array and 2. to remove a food item from the array
    
    function handleAddFood() {
        const newFood= document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods([...foods, newFood]);
    }


    function handleRemoveFood(index) {
        // Implementation for removing a food item
                setFoods(foods.filter((element,i) => i !== index)); //removes food by clicking on the food item itself
    }

    return(
        <div>
            <h1>Food Items</h1>
            <ul>
                {foods.map((food,index) =>
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                )} <br/>

                <input id="foodInput" type="text" placeholder="Enter a food item" />
                <button onClick={handleAddFood}>Add Food</button>
            </ul>
        </div>
    )
}
export default MyComponent;