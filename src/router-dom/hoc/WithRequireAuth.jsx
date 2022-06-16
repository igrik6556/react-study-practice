import {useContext} from "react";
import {useLocation, Navigate} from "react-router-dom";

import {AuthContext} from "./AuthContext";


const WithRequireAuth = WrappedComponent => props => {
    const {user} = useContext(AuthContext);
    const location = useLocation()

    if (!user) {
        return <Navigate to="/login" state={{from: location}} />
    }

    return <WrappedComponent {...props} />
}

export default WithRequireAuth