import { Link, useNavigate } from "react-router-dom"
import Button from "../utils/Button";

function CreateGenre(){

  const navigate = useNavigate()
    return(
        <>
          <h3>Create Genre</h3> 
          <Button onClick={() => {
            //
            navigate('/genres');
          }}>Save Changes</Button>
        </>
    )
}

export default CreateGenre