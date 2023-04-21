import { genreDTO } from "../genres/genres.model"
import { movieTheaterDTO } from "../movietheathers/movieTheater.model"
import MovieForm from "./MovieForm"

function EditMovie(){
    const nonSelectedGenres: genreDTO[] = [{id: 1, name: 'Comedy'}]
    const selectedGenres: genreDTO[] = [{id: 2, name: 'Drama'}]


    const selectedMoviesTheaters: movieTheaterDTO[] = [{id: 1, name: 'Agora'}]

    const nonSelectedMovieTheaters: movieTheaterDTO[] = 
    [{id: 1, name: 'Sambil'}]

    
    return (
        <>
            <h3>Edit Movie</h3>
            <MovieForm model={{title: 'Toy Story', inTheaters: true, 
                trailer: 'url', releaseDate: new Date('2023-06-14T00:00:00')}}

                onSubmit={values => console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={selectedGenres}

                nonSelectedMovieTheaters={nonSelectedGenres}
                selectedMovieTheaters={selectedMoviesTheaters}
            />
        </>
    )
}

export default EditMovie