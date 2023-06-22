"use client"
import React from "react";
import PropertyContext from "./propertyContext";

const PropertyState = (props)=>{

    const state = {
        "id": "1",
        "image": "hey",
        "image2": "hey",
        "image3": "hey",
    }

    return(
        <PropertyContext.Provider value = {state}>
            {props.children}
        </PropertyContext.Provider>
    )
}

export default PropertyState;