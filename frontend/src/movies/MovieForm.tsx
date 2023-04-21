import { Formik, Form, FormikHelpers } from "formik";
import { movieCreationDTO } from "./movies.model";
import * as Yup from "yup"
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import DateFields from "../forms/DateField";
import ImageField from "../forms/ImageField";
import CheckboxField from "../forms/CheckboxField";
import { useState } from "react";
import MultipleSelector, { multipleSelectorModel } from "../forms/MultipleSelector";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheathers/movieTheater.model";


function MovieForm(props: movieFormProps){
    
    const [selectedGenres, setSelectedGenres] = useState(mapToModel(props.selectedGenres));
    const [nonSelectedGenres, setNonSelectedGenres] = useState(mapToModel(props.nonSelectedGenres));



    const [selectedMoviesTheaters, setSelectedMoviesTheaters] = useState(mapToModel(props.selectedGenres));
    
    const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = 
        useState(mapToModel(props.nonSelectedMovieTheaters));

    function mapToModel(items: {id: number, name: string}[]): multipleSelectorModel[] {

        return items.map(item => {
            return {key: item.id, value: item.name}
        })
    }

    return (
        <Formik 
            initialValues={props.model}
            onSubmit={(values, actions) => {
                values.genresIds = selectedGenres.map(item => item.key);
                props.onSubmit(values, actions)
            }}
            validationSchema={Yup.object({
                title: Yup.string().required('This fiel is required').firstLetterUppercase()
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField displayName="Title" field="title"/>
                    <TextField displayName="Trailer" field="trailer"/>

                    <CheckboxField displayName="In Theaters" field="inTheaters"/>

                    <DateFields displayName="Release Date" field="realeaseDate"/>

                    <ImageField displayName="Poster" 
                    field="poster" 
                    imageURL={props.model.posterURL}
                    />

                    <MultipleSelector  
                        displayName="Genres"
                        nonSelected={nonSelectedGenres}
                        selected={selectedGenres}
                        onChange={(selected, nonSelected) => {
                            setSelectedGenres(selected);
                            setNonSelectedGenres(nonSelected)
                        }}
                    
                    />
                    <TextField field="name" displayName="Name"/>
                    <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

export default MovieForm

interface movieFormProps {
    model: movieCreationDTO;
    onSubmit(values: movieCreationDTO, actions: FormikHelpers<movieCreationDTO>): void;
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedMovieTheaters: movieTheaterDTO[];
    nonSelectedMovieTheaters: movieTheaterDTO[];
}