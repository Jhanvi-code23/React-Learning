function Header(){

    return( //you can only return one element, so we wrap everything in a div- write your html code here
        <header>
            <h1>My First React App</h1>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <hr></hr> {/*horizontal line*/}
        </header>
    )
}


export default Header; //to use it elsewhere