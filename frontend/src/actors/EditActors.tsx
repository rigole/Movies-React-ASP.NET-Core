import { Link } from "react-router-dom";
import ActorForm from "./ActorForm";

function EditActors(){

    return (
        <>
            <h3>Edit Actors</h3>
            <ActorForm 
            model={{name: 'Ebenezer Kepombia', 
            dateOfBirth: new Date('1993-06-14T:00:00:00'),
            biography: "#Les deballeurs furent sa premiere serie",
            pictureURL:"",
        }}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}

export default EditActors