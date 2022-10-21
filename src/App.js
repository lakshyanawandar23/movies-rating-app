import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Movie from "./component/Movie";
import Pagination from "./component/Pagination";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Favourites from './component/Favourites';
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      {/*<Banner></Banner> */}
      <Routes>
        <Route path='/' element={<>
        <Banner/>
        <Movie/>
       {/*<Pagination/>*/}
               </>
        }/>
        <Route path='/favourites' element={<Favourites/>}/>
      </Routes>
      {/*<Movie></Movie> */}
      {/*<Pagination></Pagination>*/}
    </BrowserRouter>
  );
}

export default App;
