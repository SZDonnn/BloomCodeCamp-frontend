import { createContext, useContext, useState } from "react"
import { RenderMenu, RenderRoutes } from "../components/structure/RenderNavigation";
import axios from 'axios';

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {

     const [ user, setUser ] = useState({name: "", isAuthenticated: false})

     const login = async (userName, password) => {
          try {
              const response = await axios.post('http://localhost:8080/api/auth/login', {
                  username: userName,
                  password: password
              });
  
              const token = response.data.token;
              axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
              localStorage.setItem('token', token);
  
              setUser({ name: userName, isAuthenticated: true });
              return "success";
          } catch (error) {
              console.error('Login failed.', error);
              throw new Error("Incorrect username or password");
          }
      }
     
     const logout = () => {
          // Clear the token from localStorage
          localStorage.removeItem('token');

          // Remove the Authorization header from axios
          delete axios.defaults.headers.common['Authorization'];

          // Reset the user state
          setUser({ name: "", isAuthenticated: false });
     }


     return (
          
               <AuthContext.Provider value={{user, login, logout}}>
                    <>
                         <RenderMenu />
                         <RenderRoutes />
                    </>
                    
               </AuthContext.Provider>
          
     )

}