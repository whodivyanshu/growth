"use client"

import React, { useEffect, useState } from 'react'
import styles from "./properties.module.css";
import Property from './property/Property';
import { database } from "@/app/firebase"
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';


const Properties = () => {
  const collectionRef = collection(database, "properties");
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const querySnapshot = await getDocs(collectionRef);
        const fetchedProperties = [];
        querySnapshot.forEach((doc) => {
          fetchedProperties.push({ id: doc.id, ...doc.data() });
        });
        setProperties(fetchedProperties);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  },[]);

  console.log(properties);




  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Fractional Investment Properties</h1>
        <p className={styles.desc}>These are specially curated Aasthy-exclusive fractional investment opportunities.</p> 
        <div className={styles.investcontainer} >


        <div className={styles.property}>
          {properties.map((property) => (

            <Link href={{
              pathname: "/property",
              query: { key: property.id },
            }} key={property.id}  >
            <Property
            
            key={property.id}
            id={property.id}
            title={property.title}
            image={property.image}
            
            />
            </Link>

          ))}

        </div>
            </div>   
    </div>
  )
}

export default Properties