import './App.css';
import {BrowserRouter , Routes , Route  } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Services from './pages/Services';
import Companies from './pages/filtered';

function App() {
  return (
    <>
      <BrowserRouter>
                <div className="pages">
                    <Routes>
                        <Route
                            path='/'
                            element= {<Home/>}
                        />
                        <Route
                            path='/services'
                            element= {<Services/>}
                        />
                        <Route
                            path='/companies'
                            element= {<Companies/>}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
    </>
  );
}
export default App;
