import React from 'react'
import styles from './graph.module.css'
import Image from 'next/image'
import CompareImage from 'public/CompareSection.png'
const Graph = () => {
  return (
    <div className={styles.graph} >
        <h1>Aasthy vs. Other Options</h1>
        <p>Through Aasthy, you can invest in assets that lie between low risk - low return options like Fixed Deposits, and high risk - high return options like Digital Currencies.</p>
        <div className={styles.graphContainer}>
         <Image src={CompareImage} alt='image' width={600} height={600} />
        </div>
    </div>
  )
}

export default Graph