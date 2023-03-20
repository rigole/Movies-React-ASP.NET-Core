import { Link, useNavigate } from "react-router-dom"
import Button from "../utils/Button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import TextField from "../forms/TextField";
import * as Yup from 'yup';

function CreateGenre(){

  const navigate = useNavigate()
    return(
        <>
          <h3>Create Genre</h3> 
          <Formik initialValues={{ name: "" }} 
          onSubmit={async value => { 

            await new Promise(r => setTimeout(r, 3000));
            console.log(value);
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('This field is required').firstLetterUppercase()  
          })}
          >
            {(formikProps) => (
              <Form>
                <TextField field="name" displayName="Name"/>
                <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
                <Link className="btn btn-secondary" to="/genres">Cancel</Link>
             </Form>
            )}
            
          </Formik>
        </>
    )
}

export default CreateGenre