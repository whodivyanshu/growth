import React, { useContext } from 'react';
import styles from './body1.module.css';
import Image from 'next/image';
import Loading from '@/app/loading';
import UiContext from '@/context/ui/uiContext';
import GrowthImage from 'public/growth1.svg';

const Body1 = () => {
  const body1 = useContext(UiContext); // Assuming the fetched data is available in the UiContext

  if (!body1) {
    return <Loading />;
  }

  if (body1.length === 0) {
    return <Loading />; // or any appropriate fallback if body1 is an empty array
  }

  return (
    <div className={styles.nav} >
      {/* <div className={styles.fix} ></div> */}

    <div className={styles.body1}>
      <div className={styles.body1left}>
        <h1>{body1[0].heading}</h1>
        <p>{body1[0].headingpara}</p>
        {/* <p>Tracking your investments got <br />
          a whole lot easier!</p> */}
      </div>
      <div className={styles.mid}>
        <button> <Image width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/google-play.png" alt="google-play" /> Coming Soon ...</button>
        <button> <Image width="30" height="30" src="https://img.icons8.com/sf-black/64/FFFFFF/mac-os.png" alt="mac-os" /> Coming Soon ...</button>
      </div>
      <div className={styles.right}>
        <Image src={GrowthImage} alt='mobile logo' width={100} height={200} />
      </div>
    </div>
          </div>
  );
};

export default Body1;
