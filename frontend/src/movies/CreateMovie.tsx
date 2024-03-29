import { genreDTO } from "../genres/genres.model"
import { movieTheaterDTO } from "../movietheathers/movieTheater.model"
import MovieForm from "./MovieForm"

function CreateMovie(){
    const nonSelectedGenres: genreDTO[] = [{id: 1, name: 'Comedy'}, {id: 2, name: 'Drama'}]
    const nonSelectedMovieTheaters: movieTheaterDTO[] = 
    [{id: 1, name: 'Sambil'}, {id: 2, name: 'Agora'}]

    return (
        <>
            <h3>Create Movie</h3>
            <MovieForm 
                model={{ title: '', inTheaters: false, trailer: '' }}
                onSubmit={values => console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={[]} 
                selectedMovieTheaters={[]} 
                nonSelectedMovieTheaters={nonSelectedMovieTheaters}            
            />
        </>
    )
}

export default CreateMovie