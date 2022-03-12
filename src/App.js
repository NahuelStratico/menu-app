import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./context/auth/Provider";
import MenuProvider from "./context/menu/Provider";

import Views from './routes/index';

const App = () => {
  return (
      <AuthProvider>
        <MenuProvider>
          <BrowserRouter>
           <Views />
          </BrowserRouter>
        </MenuProvider>
      </AuthProvider>
  );
}

export default App;
