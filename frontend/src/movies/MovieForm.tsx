import { Formik, Form, FormikHelpers } from "formik";
import { movieCreationDTO } from "./movies.model";
import * as Yup from "yup"
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import DateFields from "../forms/DateField";
import ImageField from "../forms/ImageField";
import CheckboxField from "../forms/CheckboxField";


function MovieForm(props: movieFormProps){

    return (
        <Formik 
            initialValues={props.model}
            onSubmit={props.onSubmit}
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
                    <ImageField displayName="Poster" field="poster" imageURL={props.model.posterURL}/>
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
}