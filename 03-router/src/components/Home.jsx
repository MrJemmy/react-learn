import { useNavigate } from "react-router-dom";

function Home(props) {

    const isAdmin = props.isAdmin

    const navigate = useNavigate();

    const navToAdmin = () => {

        if (isAdmin) {
            navigate("/admin")
        } else {
            navigate("/page404")
        }

    }

    return (
        <>
            <h1>Home Page, Admin user : {isAdmin}</h1>

            <div className="home-to-admin">
                <button onClick={navToAdmin}>Go to Admin</button>
            </div>

        </>
    )
}

export default Home;