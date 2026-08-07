// function List(){

    // const fruits= ["Apple", "Banana", "Mango", "Grapes", "Orange"];

    // fruits.sort(); 
    // //convert your array of strings into array of list items using map()
    // const listItems = fruits.map(fruit => <li>{fruit}</li>) //this will give a long string of list items

    // return(<ul>{listItems}</ul>) //or ordered list <ol>{listItems}</ol>





    //example 2: array of objects having a name property and calories

// const fruits= [{name: "Apple", calories: 95}, 
//                {name: "Banana", calories: 105}, 
//                {name: "Mango", calories: 200}, 
//                {name: "Grapes", calories: 150}, 
//                {name: "Orange", calories: 85}];

// fruits.sort((a, b) => a.name.localeCompare(b.name)); //sorts the array of objects based on the name property in ascending order
// //for reverse order, use b.name.localeCompare(a.name)
// //sort by calories- fruits.sort((a, b) => a.calories - b.calories); //sorts the array of objects based on the calories property in ascending order


// const lowCalFruit = fruits.filter(fruit => fruit.calories <100);

// const listItems= fruits.map(fruit => <li key={fruit.name}> {fruit.name}: <b>{fruit.calories}</b> calories </li>); //we used key prop to give a unique identifier to each list item. it is like primary key in sql.

// const lowCalListItems = lowCalFruit.map(lowCalFruit => <li key={lowCalFruit.name}> {lowCalFruit.name}: <b>{lowCalFruit.calories}</b> calories </li>); //we used key prop to give a unique identifier to each list item. it is like primary key in sql.

// const highCalListItems = fruits.filter(fruit => fruit.calories >= 100).map(fruit => <li key={fruit.name}> {fruit.name}: <b>{fruit.calories}</b> calories </li>); //we used key prop to give a unique identifier to each list item. it is like primary key in sql.


// return (<ul>{listItems}</ul>); //or ordered list <ol>{listItems}</ol>
// // return (<ol>{lowCalListItems}</ol>);
// // return (<ol>{highCalListItems}</ol>);









//example 3: passing the array of objects as props to the List component - reusable list component

import propTypes from "prop-types";

function List(props){
const category = props.category;
const itemsList = props.items;

const listItems = itemsList.map(item => <li 
                                 key={item.name}> 
                                 {item.name}: <b>{item.calories}</b> 
                                 calories 
                                 </li>); //we used key prop to give a unique identifier to each list item. it is like primary key in sql.

return( <>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>
);
}
List.propTypes={
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({
        name: propTypes.string,
        calories: propTypes.number
    }))
};
List.defaultProps={
    category: "Items",
    items: []
}

export default List; 