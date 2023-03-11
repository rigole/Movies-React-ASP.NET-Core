import { Link } from "react-router-dom";

function EditActors(){

    return (
        <>
            <h3>Actors</h3>
            <Link className="btn btn-primary" to="/actors/edit">Edit Actor</Link>
        </>
    )
}

export default EditActors