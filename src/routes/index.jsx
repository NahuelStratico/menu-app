import { Routes, Route} from "react-router-dom";

import Login from '../views/login/index';
import Home from '../views/home/index';
import NoFound from '../views/404/Nofound';
import ProtectedRoutes from "../components/ProtectedRoutes";
import Cuisine from '../views/Cuisine';

const Views = () => {
    return(
            <Routes>
                {/* <Route path="/" element={<Login />} />  */}
                {/* <Route element={ <ProtectedRoutes /> }> */}
                    <Route path="/" element={<Home />} />
                    <Route path="/cuisine" element={<Cuisine />} />
                {/* </Route> */}
                <Route path="*" element={<NoFound />} />
            </Routes> 
    );
};

export default Views