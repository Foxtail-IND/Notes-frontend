import { ReactElement, JSX } from "react";
import { Navigate } from "react-router-dom";
import type { RootState } from "../context/store";
import { useSelector, useDispatch } from 'react-redux'


interface ProtectedRouteProps {
    children: ReactElement;
    adminPage?: boolean;
}

const ProtectedRoute = ({ children, adminPage }: ProtectedRouteProps): JSX.Element => {

    // const count = useSelector((state: RootState) => state.counter.value)
    //  const token = useSelector((state: RootState) =>state.user.token)

    const token = "abc"; // Simulated authentication
    const isAdmin = false; // Example admin check

    if (token !== "abc") {
        return <Navigate to="/" />;
    }

    if (token && adminPage && !isAdmin) {
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

export default ProtectedRoute;