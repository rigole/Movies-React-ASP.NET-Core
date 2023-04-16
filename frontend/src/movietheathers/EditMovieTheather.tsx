import MovieTheaterForm from "./MovieTheaterForm"


function EditMovieTheater(){

    return (
        <>
            <h3>Edit  Movie Theaters</h3>
            <MovieTheaterForm
                model={{name: 'Fomi Yaourt', latitude: 4.0549002, longitude:9.7290455}}
                onSubmit={values => console.log(values)}
            />
        
        </>
    )
}

export default EditMovieTheater