import { Link } from "react-router-dom";

function IndexMovieTheather(){

    return (
        <>
            <h3>Movie Theaters</h3>
            <Link className="btn btn-primary" to="/movietheathers/create/">Create movie theather</Link>
        </>
    )
}

export default IndexMovieTheather
