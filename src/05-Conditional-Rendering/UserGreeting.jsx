//Conditional Rendering- allows you to control what gets rendered in 
//                       your application based on certain conditions
//                       (show,hide, or change components)



import propTypes from "prop-types";
function UserGreeting({isLoggedIn=false, username="Guest"}){
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}!</h2>
    // }
    // else{
    //     return <h2>Please sign in.</h2>
    // }


    const welcomeMesg = <h2 className="welcome-mesg">Welcome {username}!</h2>
    const loginMesg = <h2 className="login-mesg">Please sign in.</h2>

    return(isLoggedIn ? welcomeMesg : loginMesg)

}

UserGreeting.propTypes={
    isLoggedIn: propTypes.bool.isRequired,
    username: propTypes.string.isRequired
}

export default UserGreeting;