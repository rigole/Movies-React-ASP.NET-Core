import { Formik, Form, FormikHelpers } from "formik";
import TextField from "../forms/TextField";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
//import Map from "../utils/Map";
import { movieTheaterFormCreationDTO } from "./movieTheater.model";
import * as Yup from 'yup';
import MapField from "../forms/MapField";
import coordinateDTO from "../utils/coordinates.model";

function MovieTheaterForm(props: movieTheaterForm){

    function transformCoordinates(): coordinateDTO[] | undefined {
        if(props.model.latitude && props.model.longitude){
            const response: coordinateDTO = {lat: props.model.latitude,
            lng: props.model.longitude}
            return [response];
        }

        return undefined;
    }

    return(
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required').firstLetterUppercase()
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField displayName="Name" field="name"/>

                    <div style={{ marginBottom: '1rem' }}>
                        <MapField 
                            latField="latitude" 
                            lngField="longitude"
                            coordinates={transformCoordinates()}
                        />
                    </div>

                    <Button disabled={formikProps.isSubmitting} type="submit">
                        Save Changes
                    </Button>
                    <Link className="btn btn-secondary" to="/movietheaters"></Link>
                </Form>
            )}
        </Formik>
    )
}

interface movieTheaterForm {
    model: movieTheaterFormCreationDTO;
    onSubmit(values: movieTheaterFormCreationDTO, actions: FormikHelpers<movieTheaterFormCreationDTO>):void;
}

export default MovieTheaterForm