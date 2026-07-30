//Basics
// import Header from "./01-Basics/Header.jsx"
// import Footer from "./01-Basics/Footer.jsx"
// import Food from "./01-Basics/Food"; 

//-------------------------------------------------------------


//Card-Components
// import Card from "./02-Card-Components/Card";

// -------------------------------------------------------------


//CSS-Styling
// import Button from "./03-CSS-Styling/Button";

// -------------------------------------------------------------



//Props
// import Students from "./04-Props/Students";

// -------------------------------------------------------------




//Conditional Rendering
import UserGreeting from "./05-Conditional-Rendering/UserGreeting";

// -------------------------------------------------------------






// //Render Lists
// import List from "./06-Render-Lists/List";

function App() {


//   const fruits= [{name: "Apple", calories: 95}, 
//                {name: "Banana", calories: 105}, 
//                {name: "Mango", calories: 200}, 
//                {name: "Grapes", calories: 150}, 
//                {name: "Orange", calories: 85}];

//   const vegetables= [{name: "Carrot", calories: 25},
//                     {name: "Broccoli", calories: 55},
//                     {name: "Spinach", calories: 20},
//                     {name: "Cauliflower", calories: 25},
//                     {name: "Cabbage", calories: 25}];

  return(
    <>
    {/*BASICS*/}
      {/* <Header/> */}
      {/* <Food/>
      <Footer/> */ }


    {/*CARD-COMPONENTS*/}
      {/* <Card/>
      <Card/> */}


    {/* CSS-Styling*/}
      {/* <Button/> */}


    {/*PROPS*/}
      {/* <Students name="Jhanvi" age={20} isStudents={true}/>
       <Students name="Riya" age={21} isStudents={false}/>
       <Students name="Ananya" age={22} isStudents={true}/>
       <Students name="Aarav" age={23} isStudents={false}/>
       <Students/> default props will be used as no value is passed for name, age and isStudents */}



    {/*CONDITIONAL RENDERING*/}
    <UserGreeting isLoggedIn={true}/>
    <UserGreeting isLoggedIn={false}/>



    {/*RENDER LISTS*/}
    {/* <List/> gives a long string */}
{/* 
    {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null} {/* passing the array of objects as props to the List component 
                                               list of fruits is given by items, and ccategory is going to be the heading*/}

    {/* {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}  {/* passing the array of objects as props to the List component
                                               list of vegetables is given by items, and ccategory is going to be the heading*/}                    

    </> //fragment- used to wrap multiple elements without adding extra nodes to the DOM
  );
}

export default App
