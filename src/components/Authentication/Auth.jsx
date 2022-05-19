import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


export function RequireAuth({ children }) {

    const { user,userLogin } = useAuth();
    const location = useLocation();
    {console.log(location, user)}
    return userLogin ? children : <Navigate to="/login" state={{ from: location}} replace />
}