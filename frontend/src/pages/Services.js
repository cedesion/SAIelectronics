import Navbar from "../components/Navbar";

const Services = () =>{
    return (
        <>
            <Navbar/>
            <div className="services row" style={{margin:"2% 7%"}}>
                <div className="form col-6" style={{paddingLeft:"15%"}}>
                    <h4 style={{marginLeft:"30%"}}>Company</h4>
                    <input type="text" style={{width:"80%"}}/>
                    <h4 style={{marginLeft:"30%"}}>Product Name</h4>
                    <input type="text" style={{width:"80%"}}/>
                    <h4 style={{marginLeft:"30%"}}>Address</h4>
                    <input type="text" style={{width:"80%"}}/>
                    <h4 style={{marginLeft:"30%"}}>Phone Number</h4>
                    <input type="text" style={{width:"80%"}}/>
                    <h4 style={{marginLeft:"30%"}}>Description</h4>
                    <input type="text" style={{width:"80%"}}/>
                </div>
                <div className="serviceHistory col-6" style={{marginLeft:"0%",justifyContent:"center",border:"solid",marginRight:"0%"}}>
                    <h1 style={{justifyContent:"center", marginLeft:"0%",paddingLeft:"40%",marginRight:"20%",border:"solid"}}>hi</h1>
                    <h1 style={{justifyContent:"center", marginLeft:"0%",paddingLeft:"40%",marginRight:"20%",border:"solid"}}>hi</h1>   
                </div>
            </div>
        </>
    )
}

export default Services;