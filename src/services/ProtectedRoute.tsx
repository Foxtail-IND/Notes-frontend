import { ReactElement, JSX } from "react";
import { Navigate } from "react-router-dom";
import type { RootState } from "../context/store";
import { useSelector } from 'react-redux'


interface ProtectedRouteProps {
    children: ReactElement;
    adminPage?: boolean;
    isAdmin: boolean
}

const ProtectedRoute = ({ children, adminPage, isAdmin }: ProtectedRouteProps): JSX.Element => {

    const token = useSelector((state: RootState) => state.user.token)

    if (!token) {
        return <Navigate to="/" />;
    }

    if (token && adminPage && !isAdmin) {
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

export default ProtectedRoute;