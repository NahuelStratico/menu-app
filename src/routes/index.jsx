import { Routes, Route } from "react-router-dom";

import Login from '../views/login/index'
import Home from '../views/home/index'

const Rutas = () => {
    return(
            <Routes>
                <Routes>
                    <Route path="/" exact element={<Login />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Routes>

        
     
    )
}

export default Rutas