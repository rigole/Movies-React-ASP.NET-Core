
function Menu () {

    return (
        <nav className="navbar navbar-expand-lg navbar-light  bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Movies ASP.NET</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="/genres" className="nav-link">
                                Genres
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu