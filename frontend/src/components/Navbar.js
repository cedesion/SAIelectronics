import {CgProfile} from "react-icons/cg";
import {AiOutlineSearch} from "react-icons/ai"
const  Navbar = () =>{

    return(
        <header>
            <div className="container">
            <h1><CgProfile/>  SAI Electronics</h1>
            <div className="search">
            <AiOutlineSearch/>
            <input type="text" placeholder=  "Search here" className="searchBar"/>
            </div>
                <nav>
                        <div>
                            <a href="/">Companies</a>
                            <a href="/">Services</a>
                            <a href="/" className="icon"><CgProfile/></a>
                        </div>
                    
                </nav>
            </div>
        </header>
    )
}

export default Navbar