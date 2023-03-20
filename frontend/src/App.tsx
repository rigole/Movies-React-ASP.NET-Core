
import IndividualMovie from './movies/IndividualMovie';
import { Routes, Route } from "react-router-dom"
import './App.css';
import routes from './route-config'
import Button from './utils/Button';
import LandingPage from "./movies/LandingPage";
import Menu from './Menu';
import IndexGenres from './genres/indexGenres';
import configureValidations from './Validation';

configureValidations();

function App() {

  

  return (
    <>
      <Menu/>
      <div className="container">
        
        <Routes>
         {routes.map(route => 
          <Route key={route.path} path={route.path} element={<route.component/>} /> 
          )}
        </Routes>
      </div>
     
    </>
    
  );
}

export default App;
