"use client"
import Image from 'next/image';
import React, { useState, useEffect, useContext } from 'react';
import Logo from "public/logo.png";
import { auth, provider } from "@/app/firebase";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Link from 'next/link';
import SignInPopup from './SignInPopup';
import MobileMenu from './MobileMenu';
import SigninContext from '@/context/signin/signinContext';

import styles from './navbar.module.css';

const Navbar = () => {
  const log = useContext(SigninContext);
  const [showMenu, setShowMenu] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [signin, setSignin] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setLogin(true);
      log.login = true;
    } else {
      log.login = false;
    }
  }, [log]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 882) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
      setShowDrawer(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    auth.signOut().then(() => {
      setSignin(false);
      log.login = false;
      window.location.reload();
    });
  };

  const handlePhoneSignIn = () => {
    setSignin(false);
    // Handle phone sign-in
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        const user = result.user;
        console.log('User signed in:', user);
        localStorage.setItem('user', JSON.stringify(user));
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error signing in with Google:', error);
      });
  };

  const toggleMenu = () => {
    setShowDrawer(!showDrawer);
  };

  const handleSignInPopup = () => {
    setSignin(true);
  };

  const handleClosePopup = () => {
    setSignin(false);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Link href="/">
          <Image src={Logo} width={120} height={50} alt="growth" />
        </Link>
      </div>
      {showMenu ? (
        <div className={styles.menuButton} onClick={toggleMenu}>
          <Image width="20" height="20" src="https://img.icons8.com/ios-filled/50/4E0668/menu--v1.png" alt="menu--v1"/>
        </div>
      ) : (
        <ul className={styles.navbarItems}>
          <Link href="/">
            <li className={styles.navbarItem}>Home</li>
          </Link>
          <Link href="/properties">
            <li className={styles.navbarItem}>Investments</li>
          </Link>
          <Link href="/faq">
            <li className={styles.navbarItem}>FAQ</li>
          </Link>
          <Link href="/about">
            <li className={styles.navbarItem}>About Us</li>
          </Link>
          <li className={styles.navbarItem}>
            <button className={styles.navbtn1}>Refer and Earn</button>
          </li>
          <li className={styles.navbarItem}>
            <Image src="https://img.icons8.com/ios/90/000000/headset--v1.png" width={30} height={30} alt='customer care' />
          </li>
          <li className={styles.navbarItem}>
            {login ? ( 
              <button className={styles.navbtn} onClick={handleSignOut}>Logout</button> 
            ) : (
              <button className={styles.navbtn} onClick={handleSignInPopup}>Sign In</button>
            )}
          </li>
        </ul>
      )}
      {showDrawer && <MobileMenu handleSignOut={handleSignOut} handleSignInPopup={handleSignInPopup} />}
      {signin && <SignInPopup handleGoogleSignIn={handleGoogleSignIn} handlePhoneSignIn={handlePhoneSignIn} handleClosePopup={handleClosePopup} />}
    </div>
  );
};

export default Navbar;
