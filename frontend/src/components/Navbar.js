import {CgProfile} from "react-icons/cg";
import {AiOutlineSearch} from "react-icons/ai"
const  Navbar = () =>{

    return(
        <header>
            <div className="container">
            <div className="containertitle">
            <a href="/" style={{color: "white"}}>  SAI Electronics</a>
            </div>
            <div className="search">
            <input type="text" placeholder=  "Search here..." className="searchBar"/>
            <div className="searchhereicon">
                <span>
                    <AiOutlineSearch/>
                </span>  
            </div>
            </div>
                <nav>
                        <div className="navend" style={{fontSize:"115%"}}>
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