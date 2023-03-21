import { Formik } from "formik";


function FilterMovie(){

    const initialValues: FilterMoviesForm = {
        title: '',
        genreId: 0,
        upcomingReleases: false,
        inTheaters: false
    }

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
                            <select className="form-select"  {...formikProps.getFieldProps("genreId")}>
                                <option value="0">--Choose a genre--</option>
                            </select>
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