import { Link } from "react-router-dom";

import MovieTheaterForm from "./MovieTheaterForm";
import { FormikHelpers } from "formik";
import { movieTheaterFormCreationDTO } from "./movieTheater.model";
//
function CreateMovieTheater(){

    return (
        <>
            <h3>Create Movie Theaters</h3>
            <MovieTheaterForm 
                model={{name: ''}}
                onSubmit={values => console.log(values)}
            
            />
            
        </>
    )
}

export default CreateMovieTheater