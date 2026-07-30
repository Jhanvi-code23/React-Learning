//Props-Properties
//Props are used to pass data from parent component to child component. Props are read-only. Props are immutable. Props are used to make components reusable.
//Props give key-value pairs to the child component. The key is the name of the prop and the value is the value of the prop. The child component can access the props using the props object. The props object is passed as an argument to the child component. The child component can access the props using props.keyname.


//propTypes- a mechanism that ensures that the passed value is of the correct datatype
// ex- age:PropTypes.number.isRequired, name:PropTypes.string.isRequired, isStudents:PropTypes.bool.isRequired


import propTypes from "prop-types"; //importing prop-types library to use propTypes
function Students({name = "Guest", age = 18, isStudents = false}){ //default props are used to set default values for the props if no value is passed from the parent component. Here, name is a string, age is a number and isStudents is a boolean. If no value is passed for name, age and isStudents, then the default values will be used.
    return(
        <div className="students">
            <p>Name: {name}</p> {/*key is name and value will be given in the app.jsx file with <Students name="Jhanvi"/>*/}
            <p>Age: {age}</p> {/*key is age and value will be given in the app.jsx file with <Students age={20}/>*/}
            <p>Is Student: {isStudents ? "Yes" : "No"}</p> {/*key is isStudents and value will be given in the app.jsx file with <Students isStudents={true}/>*/}
        </div>
    )
}
Students.propTypes = {
    //in node_modules folder
    name: propTypes.string.isRequired, //name is a string and is required
    age: propTypes.number.isRequired, //age is a number and is required
    isStudents: propTypes.bool.isRequired //isStudents is a boolean and is required
};

export default Students; 