import { Routes, Route } from "react-router-dom"
import './App.css';
import routes from './route-config'
import Menu from './Menu';


function App() {

  

  return (
    <>
      <Menu/>
      <div className="container">
        
        <Routes>
         {routes.map(route => 
          <Route key={route.path} path={route.path}>
            <route.component/>
          </Route>
          )}
        </Routes>
      </div>
     
    </>
    
  );
}

export default App;
