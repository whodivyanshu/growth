"use client"
import React, { useEffect, useState } from "react";
import UiContext from "./uiContext";
import { database } from "@/app/firebase";
import { collection, getDocs } from "firebase/firestore";

const UiState = (props) => {
    const [state, setState] = useState([]);
    








    return (
        <UiContext.Provider value={state}>
            {props.children}
        </UiContext.Provider>
    )
}

export default UiState;