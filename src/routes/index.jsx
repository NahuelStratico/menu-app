import { Routes, Route} from "react-router-dom";

import Login from '../views/login/index';
import Home from '../views/home/index';
import NoFound from '../views/404/Nofound';
import ProtectedRoutes from "../components/ProtectedRoutes";
import Cuisine from '../views/Cuisine';
import Searched from '../views/Searched';

const Views = () => {
    return(
            <Routes>
                {/* <Route path="/" element={<Login />} />  */}
                {/* <Route element={ <ProtectedRoutes /> }> */}
                    <Route path="/" element={<Home />} />
                    <Route path="/cuisine/:type" element={<Cuisine />} />
                    <Route path="/searched/:search" element={<Searched />} />
                {/* </Route> */}
                <Route path="*" element={<NoFound />} />
            </Routes> 
    );
};

export default Views