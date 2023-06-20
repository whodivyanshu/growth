"use client"
import React from "react";
import PropertyContext from "./propertyContext";

const PropertyState = (props)=>{

    const state = {
        "id": "1",
    }

    return(
        <PropertyContext.Provider value = {state}>
            {props.children}
        </PropertyContext.Provider>
    )
}

export default PropertyState;