"use client"
import React, { useContext, useState, useEffect } from 'react';
import styles from "./propertyinfo.module.css";
import { getDoc, doc } from 'firebase/firestore';
import { database } from "@/app/firebase";
import propertyContext from '@/context/propertyContext';
import Logo from "public/logo.png";
import Cookies from 'js-cookie';
import Image from 'next/image';
import Loading from '@/app/loading';

const PropertyInfo = () => {
  const [propertyData, setPropertyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const idd = useContext(propertyContext);
  const propertyID = Cookies.get('propertyID');
    const collectionName = "properties";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(database, collectionName, propertyID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPropertyData(docSnap.data());
        } else {
          console.log('Document does not exist!');
        }
        setLoading(false);
        localStorage.setItem('propertyID', propertyID); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [propertyID]); 

  const handleBack = () => {
    window.history.back();
  };

  if (loading) {
    return <Loading/>; // Show a loading indicator while data is being fetched
  }

  return (
    <div className={styles.property}>
      <span className={styles.back}>
        <Image
          width="24"
          onClick={handleBack}
          height="24"
          src="https://img.icons8.com/material-two-tone/24/left.png"
          alt="left"
        />
      </span>
      <div className={styles.location}>
        <h2>Ramamurthy Nagar, Bangalore- Hebron Avenue</h2>
        <p>
          <Image
            width="18"
            height="18"
            src="https://img.icons8.com/metro/26/000000/marker.png"
            alt="marker"
          />
          Ramamurthy Nagar, Bangalore
        </p>
      </div>
      <div className={styles.images}>
        {propertyData && (
          <>
            <Image
              key={propertyData.image}
              src={propertyData.image}
              alt='image'
              width={400}
              height={250}
            />
            <Image
              key={propertyData.image2}
              src={propertyData.image2}
              alt='image'
              width={350}
              height={250}
            />
            <Image
              key={propertyData.image3}
              src={propertyData.image3}
              alt='image'
              width={350}
              height={250}
            />
          </>
        )}
      </div>
        <div className={styles.post}>
                <p>Posted at Mar 11, 2023 • <Image src={Logo} alt='lgo' width={100} height={36}  /> <span>Guaranteed Builder Buyback</span> </p>
        </div>
        <div className={styles.details} >
        <table>
          <thead>
            <tr>
              <th>PRICE</th>
              <th>RETURNS</th>
              <th>MIN. INVESTMENT</th>
              <th>MAX. HOLDINGS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>₹1,17,05,000</td>
              <td>13.5%</td>
              <td>₹5000</td>
              <td>1 year</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className={styles.funding} >
            <p>FUNDING STATUS</p>
            <h6>₹1,17,05,000 of ₹1,17,05,000 funded</h6>
            <hr />
        </div>
        <div className={styles.propdetails} >
            <h2> <Image width="18" height="18" src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/external-search-essentials-prettycons-lineal-prettycons.png" alt="external-search-essentials-prettycons-lineal-prettycons"/> Property Details <span>(as of Mar 11, 2023)</span> </h2>
            <div className={styles.proptable} >
            <table>
            <thead>
              <tr>
                <th>AREA - 3,276.78 SQ.FT</th>
                <th>AT LAUNCH VALUE</th>
                <th>12 MONTHS FROM LAUNCH</th>
                <th>APPRECIATION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MARKET VALUE (price/sq.ft)</td>
                <td>₹4,325</td>
                <td>₹4,535</td>
                <td>4.84%</td>
              </tr>
              <tr>
                <td>AASTHY (price/sq.ft)</td>
                <td>₹3,300</td>
                <td>₹4,103</td>
                <td>24.35%</td>
              </tr>
            </tbody>
          </table>
                </div>
        </div>
        <div className={styles.builder} >
            <div className={styles.build}>

            <h2> <Image width="20" height="20" src="https://img.icons8.com/ios/50/building.png" alt="building"/> Builders Profile</h2>
            <ol>
                <li>Over 10 years of experience in the industry.</li>
                <li>2 million+ sq.ft. developed and in development.</li>
                <li>Received CRISIL 5 star rating for its ultra-luxury architecture, construction guarantee, project legal qualities, and financial quality</li>
                <li>www.hebronproperties.com</li>
            </ol>
            </div>
            <div className={styles.benifit}>
                    <h2> <Image width="20" height="20" src="https://img.icons8.com/ios/50/sparkling.png" alt="sparkling"/> Benefits of this location</h2>
                    <ol>
                        <li>Proximity to ITPL, Outer Ring Road and KR Puram hanging bridge.</li>
                        <li>Proximity to Baiyapanahalli metro station.</li>
                    </ol>
            </div>
        </div>


     </div>
  )
}

export default PropertyInfo