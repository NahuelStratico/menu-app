import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import AuthContext from "../context/auth";

// const useAuth = () => {
//     const user = { loggedIn: false };
//     return user && user.loggedIn;
// }

const ProtectedRoutes = () => {

  const { logged } = useContext(AuthContext);
  console.log(logged)

  const location = useLocation();
  // const isAuth = useAuth();
  return <Outlet />
  // return logged ? (
  //   <Outlet/>
  // )
  //   : (
  //   <Navigate to="/" replace state={{from: location}}/>
  // );
}

export default ProtectedRoutes;