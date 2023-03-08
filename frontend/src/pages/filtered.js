import Filters from '../components/filters';
import Navbar from '../components/Navbar';

const Filtered = () => {
  return (
    <>
        <Navbar/>
        <div className="row">
                <div className="column">
                    <Filters/>
                </div>

            </div>
    </>
  )
}

export default Filtered