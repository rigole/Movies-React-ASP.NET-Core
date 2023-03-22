import { Link } from "react-router-dom";
import ActorForm from "./ActorForm";

function EditActors(){

    return (
        <>
            <h3>Edit Actors</h3>
            <ActorForm model={{name: '', dateOfBirth: new Date('1993-06-14T:00:00:00')}}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}

export default EditActors