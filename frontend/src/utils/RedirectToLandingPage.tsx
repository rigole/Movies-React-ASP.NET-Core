import { Navigate } from "react-router-dom"

function RedirectToLandingPage(){

    //const navigate = useNavigate();

    return (
        <Navigate to="/" replace={true}/>
    )
}

export default RedirectToLandingPage