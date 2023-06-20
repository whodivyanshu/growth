import React from 'react'
import styles from "./property.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Property = (props) => {
  return (
    <Link href="/property">
      <div className={styles.contain}>

   <div className={styles.container}>
    <div className={styles.image}>
      <p>Herbon Avenue <br /> Bangalore</p>

    </div>
    <p className={styles.unit}>1 Unit</p>
    <hr className={styles.hr} />
    <div className={styles.main}>
      <h3>Min. investment: ₹5,000</h3>
      <p>Funded: ₹1,17,05,000 (100%)</p>
      <hr className={styles.hrr} />
      <h5>GENERATING RETURNS</h5>
      <hr className={styles.hr} />
      <div className={styles.iteminvest}>
        <div className={styles.investleft}>
          
            <span style={{fontFamily: "fantasy"}}>Investors <br />  <span style={{fontWeight: "bold"}} >{props.investors}</span></span>
        </div>
        <div className={styles.investright}>
        <span style={{fontFamily: "fantasy"}} >Returns (CAGR)
 <br /> <span style={{fontWeight: "bold"}} >{props.returns}%</span></span>

        </div>
      </div>
    </div>
   </div>
      </div>
   </Link>
  )
}

export default Property
