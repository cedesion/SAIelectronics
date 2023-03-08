import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const  Filters = () =>{

    return(
        <>
            <div class="container text-center">
                <div class="col-6">
                    <div class="CoName col-3 col-sm-3"><h3>Companies</h3></div>
                        <div class="CoName col-3 col-sm-3" style={{border: "solid"}}><a href="/Samsung" classNane="row" style={{textDecoration:"none",color:"black"}}>Samsung</a></div>
                        <div class="CoName col-3 col-sm-3" style={{border: "solid"}}><a href="/Lloyd" classNane="row" style={{textDecoration:"none",color:"black"}}>Lloyd</a></div>
                        <div class="CoName col-3 col-sm-3" style={{border: "solid"}}><a href="/Samsung" classNane="row" style={{textDecoration:"none",color:"black"}}>Lenovo</a></div>
                        <div class="CoName col-3 col-sm-3" style={{border: "solid"}}><a href="/Samsung" classNane="row" style={{textDecoration:"none",color:"black"}}>Samsung</a></div>
                    </div>
            </div>
        </>
    )
}

export default Filters