import { Link } from "react-router-dom";

function Page404() {
    return(
        <>
            <h1>404 : (Page not Found)</h1>
            <div className="link-404">
            <Link to='/'>Goto Home Page</Link>
            </div>
            
        </>
    )
}

export default Page404;