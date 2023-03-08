import '../../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import micro from '../Images/micro.jpg' 
const  ProductCard = () =>{

    return(
        <>
            <div class="card mb-3" style={{backgroundColor:"rgb(184, 184, 184)"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={micro} alt="" className="img-fluid rounded-start" style={{}}/>
                    </div>
                    <div class="col-md-8" >
                    <div class="card-body">
                        <h5 class="card-title">Hp 15s</h5>
                        <p class="card-text">Memory and storage: 8GB and 512GB SSD HDD capacity<br></br>Processor: Intel Core i5-1155G7<br/>Operating System: Pre-loaded Windows 11<br/>Display: 15.6 Inches screen with 1920 x 1080 Pixels resolution<br/>Weight: 1.69 Kg<br/>Warranty: 1 Year from the manufacturer from the date of purchase</p>
                        <p class="card-text"><small class="text-muted">Available Now</small></p>
                        <button type="button" class="btn btn-primary m-2">Add To Cart</button>
                        <button type="button" class="btn btn-primary m-2">View Details</button>

                    </div>
                    </div>
                </div>
                </div>
        </>
    )
}

export default ProductCard