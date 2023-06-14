import React from 'react'
import styles from './body2.module.css'
import Image from 'next/image'

const Body2 = () => {
  return (
    <div className={styles.body2}>
        <div className={styles.left} >
            <h1>Making real estate <br /> investments
Accessible</h1>
<p >12-18% returns <br />
starting from only ₹5,000</p>
<button>Explore Opportunities</button>
        </div>
        <div className={styles.right} >
            <Image src="https://aasthy.com/static/media/hero-location-image.72e4d501.svg"  width={600} alt='photo' height={600} />
        </div>
    </div>
  )
}

export default Body2