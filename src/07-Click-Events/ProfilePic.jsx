function ProfilePic() {
    const imageUrl= './src/assets/linkedin.jpeg';
    const handleClick = () => {
        console.log("Profile picture clicked!");
    }
    const handleMouseEvent = (event) => {
        event.target.style.display = 'none';  //hide the image when mouse clicks
    }
    return (
        <img 
        onClick={handleClick} onDoubleClick={(event)=> handleMouseEvent(event)} src={imageUrl} alt="Profile Picture" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
    )
}
export default ProfilePic;