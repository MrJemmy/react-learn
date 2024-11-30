import { Link } from "react-router-dom";

function About() {
    return(
        <>
            <h1>About Page</h1>

            <div> 
                <h1>Our Users</h1>

                <div className="user-profiles">
                    <Link to='/user/Jaimin'> Jaimin </Link>
                    <Link to='/user/Gunjan'> Gunjan </Link>
                </div>
            </div>
        </>
    )
}

export default About;