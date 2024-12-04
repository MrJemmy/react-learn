import { useParams } from "react-router-dom";
// useParams : for dynamic routing

function User() {

    const {name} = useParams();

    return(
        <>
            <h1>Welcome {name}!</h1>
        </>
    )
}

export default User;