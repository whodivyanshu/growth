import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';

const MobileMenu = ({ handleSignOut, handleSignInPopup }) => {
  return (
    <div className={styles.drawer}>
      <div className={styles.close}>
        <Image style={{ cursor: "pointer" }} src="https://img.icons8.com/ios/90/000000/multiply.png" width={30} height={30} alt="close" />
      </div>
      <ul className={styles.drawerItems}>
        <Link href="/">
          <li className={styles.drawerItem}>Home</li>
        </Link>
        <Link href="/properties">
          <li className={styles.drawerItem}>Investments</li>
        </Link>
        <Link href="/faq">
          <li className={styles.drawerItem}>FAQ</li>
        </Link>
        <Link href="/about">
          <li className={styles.drawerItem}>About Us</li>
        </Link>
        <li className={styles.drawerItem}>
          <button className={styles.drawerbtn1}>Refer and Earn</button>
        </li>
        <li className={styles.drawerItem}>
          <Image src="https://img.icons8.com/ios/90/4E0668/headset--v1.png" width={30} height={30} alt='customer care' />
        </li>
        <li className={styles.drawerItem}>
          {/* Modify the condition here based on login state */}
          {true ? (
            <button className={styles.drawerbtn} onClick={handleSignOut}>Sign Out</button>
          ) : (
            <button className={styles.drawerbtn} onClick={handleSignInPopup}>Sign In</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
