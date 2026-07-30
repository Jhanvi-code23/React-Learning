import profilePic from "../assets/linkedin.jpeg";

function Card(){
    return(
        <div className="card">
            <img className="card-image" alt="Profile Image" src={profilePic}></img> {/*add image to your assets folder and give the path here*/}
            <h2 className="card-title">Jhanvi Gupta</h2>
            <p className="card-description">Upcoming Web Developer.</p>
        </div>
    )
}

export default Card