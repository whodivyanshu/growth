"use client"
import React from "react";
import SigninContext from "./signinContext";

const SigninState = (props)=>{
    const login = {
        "login": false,
    }


    return(
        <SigninContext.Provider value = {login}>
            {props.children}
        </SigninContext.Provider>
    )
}

export default SigninState;