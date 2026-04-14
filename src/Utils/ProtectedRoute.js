import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {

    let authenticated = true;
    return authenticated ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoute;