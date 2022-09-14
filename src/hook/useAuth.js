import React, { useState, useContext, createContext } from "react";
import Cookie from 'js-cookie'
import axios from 'axios'

const AuthContext = createContext();

export function ProviderAuth ({ children }){
    const auth = useProviderAuth()
    return <AuthContext.Provider value={auth}>{ children }</AuthContext.Provider>
};

export const useAuth = ()=> {
    return useContext(AuthContext);
};

function useProviderAuth(){
    const [user,setUser] = useState(null);

    const signIn = (email,password)=> {
        setUser('LoginExample');
    }

    return {
        user,
        signIn,
    };
};
