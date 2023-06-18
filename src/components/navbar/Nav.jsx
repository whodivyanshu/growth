"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useContext } from 'react'
import Logo from "public/logo.png";
import styles from './navbar.module.css';
import Drawer from './Drawer';
import Sign from './Sign';
import signinContext from '@/context/signin/signinContext';
import { auth } from '@/app/firebase';


const Nav = () => {
    const log = useContext(signinContext);
    const [login, setLogin] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);
    const [signin, setSignin] = useState(false)

    const toggleMenu = () => {
        setShowDrawer(!showDrawer);
    };
    useEffect(() => {
        // Check if user is already signed in
        const user = localStorage.getItem('user');
        if (user) {
          // Set the initial sign-in state
          setLogin(true);
          log.login = true;
        }
        else{
            log.login = false;
        }

    
        // ... Remaining code ...
      }, [log]);

    const handleSignOut = () => {
        // Clear user information from local storage and sign out
        localStorage.removeItem('user');
        auth.signOut().then(() => {
          setSignin(false);
          log.login = false;
          window.location.reload();
        });
      };

      const handlePhoneSignIn = () => {
        handleclosePopup();
        setphone(true);
      }

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

    const handleSignInPopup = () => {
        setShowDrawer(false);
        setSignin(true);
    }
    const handleClosePopup = () => {
        setSignin(false);
    }
        
    

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <Link href="/">
                    <Image src={Logo} width={120} height={50} alt="growth" />
                </Link>
            </div>
            {showMenu ? (
                <div className={styles.menuButton} onClick={toggleMenu}>
                    <Image
                        width="20"
                        height="20"
                        src="https://img.icons8.com/ios-filled/50/4E0668/menu--v1.png"
                        alt="menu--v1"
                    />
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
                        <Image
                            src="https:img.icons8.com/ios/90/000000/headset--v1.png"
                            width={30}
                            height={30}
                            alt="customer care"
                        />
                    </li>
                    <li className={styles.navbarItem}>
                    {login ? ( 
                            <button className={styles.navbtn} onClick={handleSignOut} >logout</button> 
                        ) : (
                            <button className={styles.navbtn} onClick={handleSignInPopup} >Sign In</button>
                           ) }
                    </li>
                </ul>
            )}
            {showDrawer && (<Drawer toggleMenu={toggleMenu} handleSignInPopup={handleSignInPopup} handleSignOut={handleSignOut} />) }
            {signin && (<Sign handleClosePopup={handleClosePopup} />)}


        </div>
    );
};

export default Nav;
