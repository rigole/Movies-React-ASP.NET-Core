import { Link } from "react-router-dom"
function IndexGenres(){

    return (
        <>
           <h3>genres</h3> 
           <Link className="btn btn-primary" to="/genres/create">Create Genre</Link>
        </>
    )
}

export default IndexGenres