import React from 'react'
import styles from "./properties.module.css";
import Property from './property/Property';

const Properties = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Fractional Investment Properties</h1>
        <p className={styles.desc}>These are specially curated Aasthy-exclusive fractional investment opportunities.</p> 
        <div className={styles.investcontainer} >

        <div className={styles.property}>
                <Property />
                <Property />
                <Property />
                <Property />
                <Property />
                <Property />
                <Property />
                <Property />
                <Property />
                <Property />
        </div>
            </div>   
    </div>
  )
}

export default Properties