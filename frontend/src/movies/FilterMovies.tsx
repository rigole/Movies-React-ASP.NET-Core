import { Field, Formik } from "formik";
import { genreDTO } from "../genres/genres.model";
import Button from "../utils/Button";


function FilterMovie(){

    const initialValues: FilterMoviesForm = {
        title: '',
        genreId: 0,
        upcomingReleases: false,
        inTheaters: false
    }

    const genres: genreDTO[] = [{id: 1, name: "Action"}, {id: 2, name: 'African'}];

    return (
        <>
            <h3>Filter Movie</h3>
            <Formik initialValues={initialValues}
                onSubmit={values => console.log(values)}
            >
                {(formikProps) => (
                    <div className="row gx-3 align-items-center">
                        <div className="col-auto">
                            <input type="text" className="form-control" id="title" 
                             placeholder="Title of the movie"
                             {...formikProps.getFieldProps("title")}
                            />
                        </div>
                        <div className="col-auto">
                            <select className="form-select"  {...formikProps.getFieldProps("genreId")}
                            >
                                <option value="0">--Choose a genre--</option>
                                {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                            </select>
                        </div>
                        <div className="col-auto">
                            <div className="form-check">
                                <Field className="form-check-input" id="inTheaters" name="inTheaters" type="checkbox"/>
                                <label className="form-check-label" htmlFor="inTheaters">In Theaters</label>
                              
                            </div>
                           
                        </div>
                        <div  className="col-auto">
                            <div className="form-check">
                                <Field className="form-check-input" id="Upcomingrealeases" name="Upcomingrealeases" type="checkbox"/>
                                <label className="form-check-label" htmlFor="inTheaters">Upcoming realeases</label>
                            </div>
                        </div>
                        <div className="col-auto">
                            <Button className="btn btn-primary" onClick={() => formikProps.submitForm()}>Filter</Button>
                            <Button className="btn btn-danger ms-3" onClick={() => formikProps.setValues(initialValues)}>Clear</Button>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    )
}

interface FilterMoviesForm {
    title: string;
    genreId: number;
    upcomingReleases: boolean;
    inTheaters: boolean;
}

export default FilterMovie