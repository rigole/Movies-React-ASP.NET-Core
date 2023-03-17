import { Link, useNavigate } from "react-router-dom"
import Button from "../utils/Button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

function CreateGenre(){

  const navigate = useNavigate()
    return(
        <>
          <h3>Create Genre</h3> 
          <Formik initialValues={{ name: "" }} 
          onSubmit={value => { console.log(value);}}
          validationSchema={Yup.object({
            name: Yup.string().required('This field is required')  
          })}
          >
            <Form>
              <div className="mb-3">
                <label htmlFor="name">Name</label>
                <Field name="name" id="name" className="form-control"/>
                <ErrorMessage name="name">{msg => 
                  <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <Button type="submit">Save Changes</Button>
              <Link className="btn btn-secondary" to="/genres">Cancel</Link>
            </Form>
          </Formik>
        </>
    )
}

export default CreateGenre