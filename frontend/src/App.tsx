
import IndividualMovie from './movies/IndividualMovie';
import { Routes, Route } from "react-router-dom"
import './App.css';

import Button from './utils/Button';
import LandingPage from "./movies/LandingPage";
import Menu from './Menu';
import IndexGenres from './genres/indexGenres';

function App() {

  

  return (
    <>
      <Menu/>
      <div className="container">
        
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/genres' element={<IndexGenres/>} />
        </Routes>
      </div>
     
    </>
    
  );
}

export default App;
