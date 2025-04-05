import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, requiredRole }) => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
        return <Navigate to="/sign-in" />;
    }

    if (role !== requiredRole) {
        return <Navigate to="/" />;
    }

    return element;
};

export default PrivateRoute;
