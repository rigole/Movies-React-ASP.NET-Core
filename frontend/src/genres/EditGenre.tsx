import  { useParams } from "react-router-dom";

function EditGenre(){
    const {id} = useParams();
    return (
        <>
            <h3>Edit Genre</h3>
            The is the id number {id}
        </>
    )
}

export default EditGenre