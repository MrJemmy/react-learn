function Login() {
    return (
        <>
            <h1>Login Page!</h1>
            <form className="login-from d-flex justify-content-center flex-deirection-column align-items-center">
                <input type="text" placeholder="Enter Username"/>
                <input type="password" placeholder="Enter Password"/>
                <input type="submit" value="Submit"/>
            </form>
        </>

    )
}

export default Login;