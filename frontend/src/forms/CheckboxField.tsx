import { Field } from "formik";

function CheckboxField(props: checkboxField){

    return(
        <div>
            <Field className="form-check-input" id={props.field} name={props.field} type="checkbox"/>

            <label htmlFor={props.field}>{props.displayName}</label>
        </div>
    
    )
}

interface checkboxField{
    displayName: string;
    field: string;
}

export default CheckboxField