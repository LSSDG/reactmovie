import React from "react";
import { useState } from "react";
 

const AuthContext =  React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
})

export const AuthContextProvider=(props)=>{
     
    const initialToken=localStorage.getItem('token');
    const [token,setToken]= useState(initialToken);
    const userIsLoggedIn=!!token;
    if(userIsLoggedIn){
        console.log('logged in')
    }
    const loginHandler=(token)=>{
        setToken(token);
        localStorage.setItem('token',token);
    }
    const logoutHandler=()=>{
        setToken(null);
        localStorage.removeItem('token');
    }
    const authCtx={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }
    return(<AuthContext.Provider value={authCtx}>{props.children}</AuthContext.Provider>)
}

export default AuthContext;