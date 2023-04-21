import { genreDTO } from "../genres/genres.model"
import MovieForm from "./MovieForm"

function EditMovie(){
    const nonSelectedGenres: genreDTO[] = [{id: 1, name: 'Comedy'}]
    const selectedGenres: genreDTO[] = [{id: 2, name: 'Drama'}]
    return (
        <>
            <h3>Edit Movie</h3>
            <MovieForm model={{title: 'Toy Story', inTheaters: true, 
                trailer: 'url', releaseDate: new Date('2023-06-14T00:00:00')}}

                onSubmit={values => console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={selectedGenres}
            />
        </>
    )
}

export default EditMovie