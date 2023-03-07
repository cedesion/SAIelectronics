import {CgProfile} from "react-icons/cg";
import {AiOutlineSearch} from "react-icons/ai"
const  Navbar = () =>{

    return(
        <header>
            <div className="container">
            <h1 style={{color: "white"}}><CgProfile style={{color: "white"}}/>  SAI Electronics</h1>
            <div className="search">
            <AiOutlineSearch/>
            <input type="text" placeholder=  "Search here" className="searchBar"/>
            </div>
                <nav>
                        <div>
                            <a href="/" style={{color: "white"}}>Companies</a>
                            <a href="/" style={{color: "white"}}>Services</a>
                            <a href="/" className="icon"><CgProfile/></a>
                        </div>
                    
                </nav>
            </div>
        </header>
    )
}

export default Navbar