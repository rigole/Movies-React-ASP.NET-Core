import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

function TextField(props: textFieldProps){

    return(
        <div className="mb-3">
          <label htmlFor={props.field}>{props.displayName}</label>
          <Field name={props.field} id={props.field} className="form-control"/>
          <ErrorMessage name="name">{msg => 
          <div className="text-danger">{msg}</div>}
          </ErrorMessage>
      </div>
    )
}

interface textFieldProps{
    field:string;
    displayName: string;
}

export default TextField