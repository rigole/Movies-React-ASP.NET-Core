import  { useParams } from "react-router-dom";
import GenreForm from "./GenreForm";

function EditGenre(){
    const {id} = useParams();
    return (
        <>
            <h3>Edit Genre</h3>
            <GenreForm model={{name: 'Action'}} 
          onSubmit={ async value => {
            await new Promise(r => setTimeout(r, 1));
            console.log(id)            
            console.log(value);
          }}
          />
        </>
    )
}

export default EditGenre