import { Formik, Form, FormikHelpers } from "formik";
import TextField from "../forms/TextField";
import DateFields from "../forms/DateField";
import ImageField from "../forms/ImageField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import { actorCreationDTO } from "./actors.model";
import * as Yup from 'yup';
import MarkdownField from "../forms/MarkdownField";



function ActorForm(props: actorFormProps){

    return (
        <Formik initialValues={props.model} 
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            name: Yup.string().required("This field is required").firstLetterUppercase(),
            dateOfBirth: Yup.date().nullable().required('This field is required')
        })}
        >
            {(formikProps) => (
                <Form>
                    <TextField displayName="Name" field="name"/>
                    <DateFields displayName="Date of Birth" field="dateOfBirth" />
                    <ImageField 
                        displayName="Picture" 
                        field="picture" 
                        imageURL={props.model.pictureURL}
                        />
                        <MarkdownField displayName="Biography" field="biography" />
                    <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
                    <Link to="/actors" className="btn btn-secondary">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface actorFormProps{
    model: actorCreationDTO;
    onSubmit(values: actorCreationDTO, action: FormikHelpers<actorCreationDTO>): void;
}

export default ActorForm