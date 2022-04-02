import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./context/auth/Provider";
import MenuProvider from "./context/menu/Provider";

import Views from './routes/index';
import Category from './components/Category';
import Search from "./components/Search";
import Navbar from './components/Navbar';


const App = () => {
  return (
      <AuthProvider>
        <MenuProvider>
          <BrowserRouter>
          <Navbar />
          <Search />
          <Category />
           <Views />
          </BrowserRouter>
        </MenuProvider>
      </AuthProvider>
  );
}

export default App;
