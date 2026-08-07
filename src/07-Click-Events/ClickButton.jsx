// click event in react- An interaction when a user clicks on a specific element 
//                       We can respond to clicks by passing
//                       a callback to the onClick event handler

function ClickButton() {
    
    let count=0;

    // const handleClick = () => console.log("Button Clicked");

    // const handleClick2 = (name) => console.log(`Stop clicking me, ${name}!`);

    // adding condition
    // const handleClick3= (name) => {
    //     if(count<5){
    //         count++;
    //         console.log(`${name} clicked me ${count} times`);
    //     }

    //     else{
    //         console.log(`Stop clicking me, ${name}!`);
    //     }
    // }


    // event.target
    function handleClick4(event){
        console.log(event.target);
        event.target.textContent = "Clicked";
        event.target.style.backgroundColor = "tomato";
        event.target.style.border= "1px solid black";
    }

    function handleClick5(event){
        event.target.style.border= "1px solid magenta";
    }

    function handleClick6(event){
        event.target.style.border= "1px solid red";
    }

    return (
        <>
        {/* <button onClick={handleClick}> Click Me</button> */}
        {/* <button onClick={() => handleClick2("Jhanvi")}> Click Me</button> */}
        {/* <button onClick={() => handleClick3("Jhanvi")}> Click Me</button> */}
        {/* <button onClick={handleClick4}> Click Me</button> */}


        {/*other mouse events- onDoubleClick, onMouseEnter, onMouseLeave, onMouseOver, onMouseOut, onMouseMove*/}
        <button onDoubleClick={handleClick4}> Double Click Me </button> <br/><br/>
        <button onMouseOver={handleClick5}> Hover Over Me </button> <br/><br/>
        <button onMouseOut={handleClick6}> Mouse Out </button>
        </>
    )
        
}

export default ClickButton