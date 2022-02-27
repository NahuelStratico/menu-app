import { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from 'react-router-dom';

import Spinner from '../../components/Spinner';
import AuthContext from "../../context/auth";


const Login = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    const { isAuthenticated, onLogin } = useContext(AuthContext);

    const checkIfUserIsAuthRef = useRef();

    const checkIfUserIsAuth = () => {
        if(isAuthenticated) {
            navigate('/home');
        }else{
            setIsLoading(false);
        }
    };

    checkIfUserIsAuthRef.current = checkIfUserIsAuth;

    useEffect(() => {
        checkIfUserIsAuthRef?.current()?.catch(null);
      }, []);


    const handleSubmitLogin = (e) => {
        e.preventDefault();

        if(user?.length && pass?.length){
            onLogin(user, pass);
            navigate('/home');
        }else if(user === ''|| pass === '' || user !== 'challenge@alkemy.org' || pass !== 'react') {
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
                    <form onSubmit={handleSubmitLogin}>
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
                            <button type="submit" className="btn btn-block btn-primary">Acceder</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login