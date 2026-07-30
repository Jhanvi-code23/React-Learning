// import styles from "../03-CSS-Styling/Button.module.css";
function Button(){
    
    const styles={
        padding: "10px 20px",
        backgroundColor: "hsl(200, 100%, 50%)",
        border: "1px solid #000000",
        borderRadius: "5px", //doesn't support pseudo selectors like :hover, :active, :focus, etc.
    }


    return (
        <button style={styles}>Click Me</button>
    );
}

export default Button;