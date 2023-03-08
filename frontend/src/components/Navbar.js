import {CgProfile} from "react-icons/cg";
import {AiOutlineSearch} from "react-icons/ai"
const  Navbar = () =>{

    return(
        <header>
            <div className="container">
            <a href="/" style={{color: "white" , fontSize:"200%"}}><CgProfile style={{color: "white"}}/>  SAI Electronics</a>
            <div className="search">
            <AiOutlineSearch/>
            <input type="text" placeholder=  "Search here" className="searchBar"/>
            </div>
                <nav>
                        <div>
                            <a href="/companies" style={{color: "white"}}>Companies</a>
                            <a href="/services" style={{color: "white"}}>Services</a>
                            <a href="/" className="icon"><CgProfile/></a>
                        </div>
                    
                </nav>
            </div>
        </header>
    )
}

export default Navbar