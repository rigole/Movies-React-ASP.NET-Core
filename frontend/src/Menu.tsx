import { Link, NavLink } from "react-router-dom";

function Menu () {

    return (
        <nav className="navbar navbar-expand-lg navbar-light  bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Movies ASP.NET</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/genres" className="nav-link">
                                Genres
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/movies/filter" className="nav-link">
                               Filter Movies
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/actors" className="nav-link">
                               Actors
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/moviestheaters" className="nav-link">
                                Movie Theaters
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/movies/create" className="nav-link">
                                Create a Movie
                            </NavLink>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu