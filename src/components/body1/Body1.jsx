"use client"
import React, { useEffect, useState, useContext } from 'react';
import styles from './body1.module.css';
import Image from 'next/image';
import { database } from '@/app/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Loading from '@/app/loading';
import uiContext from '@/context/ui/uiContext';

const Body1 = () => {
  const ui = useContext(uiContext);
  const [body1, setBody1] = useState([]);

  const collectionRef = collection(database, "uidata");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collectionRef);
        const fetchedData = [];
        querySnapshot.forEach((doc) => {
          fetchedData.push({ id: doc.id, ...doc.data() });
        });
        setBody1(fetchedData);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Include collectionRef in the dependency array

  if (body1.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <div className={styles.body1}>
        <div className={styles.body1left}>
          <h1>{body1[0].heading}</h1>
          <p>Tracking your investments got <br />
            a whole lot easier!</p>
        </div>
        <div className={styles.mid}>
          <button> <Image width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/google-play.png" alt="google-play" /> Coming Soon ...</button>
          <button> <Image width="30" height="30" src="https://img.icons8.com/sf-black/64/FFFFFF/mac-os.png" alt="mac-os" /> Coming Soon ...</button>
        </div>
        <div className={styles.right}>
          <Image src="https://aasthy.com/static/media/aasthy-app-props-desktop.c5e1c3c6.png" alt='mobile logo' width={100} height={200} />
        </div>
      </div>
    </>
  );
};

export default Body1;
