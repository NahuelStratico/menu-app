import { useState } from 'react';

import AuthContext from "./index";
import axios from "axios";

const apiCall = axios.create({
    baseURL: "http://challenge-react.alkemy.org/",
  });

export default function AuthProvider({children}) {

        const [logged, setLogged ] = useState(false);
   
        const handleLogin = (user, pass) => {
            if(user === 'challenge@alkemy.org' && pass === 'react'){
                console.log(user, pass)
                apiCall.post('http://challenge-react.alkemy.org/', {
                    email: 'challenge@alkemy.org',
                    password: 'react'
                })
                .then(function (response) {
                    const token = response.data.token
                    localStorage.setItem("@user-isAuth", token);
                    localStorage.setItem("@user-data", JSON.stringify({
                        user,
                        pass
                    }));
                    setLogged(true)
                })
                .catch(function (error) {
                console.log(error);
                });
            }    
            
    }


    return(
        <AuthContext.Provider value={{
            isAuthenticated: localStorage.getItem("@user-isAuth")?.length > 0,
            onLogin: handleLogin,
            logged,
        }}>
            {children}
        </AuthContext.Provider>
    );
}