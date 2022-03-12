import { Routes, Route } from "react-router-dom";

import Login from '../views/login/index';
import Home from '../views/home/index';
import NoFound from '../views/404/Nofound';
import ProtectedRoutes from "../components/ProtectedRoutes";

const Views = () => {
    return(
        <Routes>
            <Route path="/" element={<Login />} /> 
            <Route element={ <ProtectedRoutes /> }>
                <Route path="/home" element={<Home />} />
            </Route>
            <Route path="*" element={<NoFound />} />
        </Routes> 
    );
};

export default Views