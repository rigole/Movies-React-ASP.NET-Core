import { useNavigate } from "react-router-dom";
import GenreForm from "./GenreForm";

function CreateGenre(){

  //const navigate = useNavigate()
    return(
        <>
          <h3>Create Genre</h3> 


          <GenreForm model={{name: ''}} 
          onSubmit={ async value => {
            await new Promise(r => setTimeout(r, 1));
            console.log(value);
          }}
          />
        </>
    )
}

export default CreateGenre