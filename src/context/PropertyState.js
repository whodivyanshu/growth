"use client"
import React from "react";
import PropertyContext from "./propertyContext";

const PropertyState = (props)=>{

    const state = {
        "id" : "1",
        "image" : "https://images.unsplash.com/photo-1581093458791-9d3c0c5c5b1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        "location" : "Kathmandu",
        "area" : "bangaloer",
        "investment" : "1000000",
        "funded" : "100000",
        "investors" : "10",
        "returns" : "10%",
    }

    return(
        <PropertyContext.Provider value = {state}>
            {props.children}
        </PropertyContext.Provider>
    )
}

export default PropertyState;