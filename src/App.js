import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthProvider from "./context/auth/Provider";
import MenuProvider from "./context/menu/Provider";

import Login from './views/login/index'
import Home from './views/home/index'
import NoFound from './views/404/Nofound'

const App = () => {
  return (
    <AuthProvider>
      <MenuProvider>
        <Router>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NoFound />} />
          </Routes>
        </Router>
      </MenuProvider>
    </AuthProvider>
  );
}

export default App;
