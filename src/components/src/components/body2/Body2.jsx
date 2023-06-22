"use client"
import React, {useContext} from 'react'
import styles from './body2.module.css'
import Image from 'next/image'
import Link from 'next/link'
import GrowthImage from 'public/growth3.svg'

const Body2 = () => {

  
  return (
    <>
    <div className={styles.body2}>
        <div className={styles.left} >
            <h1>Making real estate <br /> investments
Accessible</h1>
<p >12-18% returns <br />
starting from only ₹5,000</p>
<Link href="/properties">

<button >Explore Opportunities</button>
</Link>
        </div>
        <div className={styles.right} >
            <Image src={GrowthImage}  width={600} alt='photo' height={600} />
        </div>
    </div>
    <div id={styles.marketPoints}>
        <div className={styles.marketsubDiv}>
          <div className="pointDiv">
            <h1>50M+</h1>
            <p>Data Points</p>
          </div>
          <div className="pointDiv">
            <h1>300+</h1>
            <p>Cities</p>
          </div>
        </div>
        <div className={styles.marketsubDiv}>
          
         <div className="pointDiv">
            <h1>98%</h1>
            <p>Data Accuracy</p>
          </div>
          <div className="pointDiv">
            <h1>500+</h1>
            <p>Investors</p>
          </div>
        </div>
        </div>
    </>
  )
}

export default Body2