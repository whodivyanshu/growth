"use client"
import React, { useEffect, useState } from "react";
import UiContext from "./uiContext";
import { database } from "@/app/firebase";
import { collection, getDocs } from "firebase/firestore";

const UiState = (props) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(database, "uidata");
        const querySnapshot = await getDocs(collectionRef);
        const fetchedData = [];
        querySnapshot.forEach((doc) => {
          fetchedData.push({ id: doc.id, ...doc.data() });
        });
        setState(fetchedData);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Fetch data only once on component mount

  return (
    <UiContext.Provider value={state}>
      {props.children}
    </UiContext.Provider>
  );
};

export default UiState;
