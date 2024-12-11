import { Navigate, Outlet } from "react-router-dom";

function Protected({isAuthenticated }) {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace/>
}

export default Protected;