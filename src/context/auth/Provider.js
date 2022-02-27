import AuthContext from "./index";
import axios from "axios";

const apiCall = axios.create({
    baseURL: "http://challenge-react.alkemy.org/",
  });
  

export default function AuthProvider({children}) {
   
        const handleLogin = (user, pass) => {
            if(user === 'challenge@alkemy.org' && pass === 'react'){
                apiCall.post('http://challenge-react.alkemy.org/', {
                    email: 'challenge@alkemy.org',
                    password: 'react'
                })
                .then(function (response) {
                    const token = response.data.token
                    alert('este es tu numero: ' + token)
                    localStorage.setItem("@user-isAuth", "true");
                    localStorage.setItem("@user-data", JSON.stringify({
                        user,
                        pass
                    }));
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
        }}>
            {children}
        </AuthContext.Provider>
    );
}