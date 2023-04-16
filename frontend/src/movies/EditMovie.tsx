import MovieForm from "./MovieForm"

function EditMovie(){

    return (
        <>
            <h3>Edit Movie</h3>
            <MovieForm model={{title: 'Toy Story', inTheaters: true, 
                trailer: 'url', releaseDate: new Date('2023-06-14T00:00:00')}}

                onSubmit={values => console.log(values)}
            />
        </>
    )
}

export default EditMovie