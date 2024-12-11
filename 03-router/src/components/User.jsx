import { useParams, useLocation } from "react-router-dom";
// useParams : for dynamic routing

function User() {

    const {name} = useParams();
    const location = useLocation();
    console.log(location)
    // ?age=25#30  =>  search:?age=25,  hash:#30,  pathname:url,  key:uniqe value for route,  state: passed in Link
    return(
        <>
            <h1>Welcome {name}!</h1>
        </>
    )
}

export default User;