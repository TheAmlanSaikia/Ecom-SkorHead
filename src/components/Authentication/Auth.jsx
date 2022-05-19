import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


export function RequireAuth({ children }) {

    const { userLogin } = useAuth();
    const location = useLocation();
    {console.log(location, userLogin)}
    return userLogin ? children : <Navigate to="/login" state={{ from: location}} replace />
}