import { useEffect, useState, useRef, useContext } from "react";
import { useNavigate, Navigate, Outlet, useLocation } from 'react-router-dom';

import Spinner from '../../components/Spinner';
import AuthContext from "../../context/auth";


const Login = () => {
    const [user, setUser] = useState(null);
    const [pass, setPass] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const { isAuthenticated, onLogin, logged } = useContext(AuthContext);

    console.log(isAuthenticated)
    const handleSubmitLogin = (e) => {
        e.preventDefault();

      
        onLogin(user, pass);
        console.log(isAuthenticated)
        console.log(logged)

        if(logged) {
            navigate('/home');
            console.log('Autenticado')
            setIsLoading(false);
        }
        if(!logged){
            console.log('no estas autenticado')
            setIsLoading(false);
            return <Navigate to="/" state={{ from: location }} replace />;
        }
        if(user === ''|| pass === '' || user !== 'challenge@alkemy.org' || pass !== 'react') {
                alert('El usuario o contraseña son incorrectos')
        }

    }

    if(isLoading) {
        return <Spinner />;
    }
    
    return(
        <div className="container" style={{height: '100vh'}}>
            <div className="row justify-content-center align-items-center" style={{height: '100vh'}}>
                <div className="col-7">
                    <form >
                        <div className="mb-3">
                            <label className="form-label">User</label>
                            <input 
                            value={user} 
                            onChange={({ target: { value }}) => setUser(value)}
                            type="email" 
                            className="form-control" 
                            placeholder="Email"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input 
                            value={pass}
                            onChange={({ target: { value }}) => setPass(value)}
                            type="password" 
                            className="form-control"
                            placeholder="Pass"
                             />
                        </div>
                        <div className="d-grid">
                            <button onClick={() => navigate('/home')} type="submit" className="btn btn-block btn-primary">Acceder</button>
                        </div>
                    </form>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Login