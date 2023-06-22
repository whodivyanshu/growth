"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useContext } from 'react'
import Logo from "public/growth-logo.svg";
import styles from './navbar.module.css';
import Drawer from './Drawer';
import Sign from './Sign';
import signinContext from '@/context/signin/signinContext';
import Support from "public/growth5.svg"
import { auth } from '@/app/firebase';


const Nav = () => {
    const log = useContext(signinContext);
    const [login, setLogin] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);
    const [signin, setSignin] = useState(false)
    const [support, setSupport]=useState(false);
    const [showReferral,setReferral]=useState(false);

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
    const toggleSupport=()=>{
        setSupport(!support);
    }
    const toggleShowReferral=()=>{
        setReferral(!showReferral);
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
                        <button className={styles.navbtn1} onClick={toggleShowReferral}>Refer and Earn</button>
                    </li>
                    <li className={styles.navbarItem}>
                        <Image width="30" height="30" src="https://img.icons8.com/ios-filled/50/0c81c7/help.png" onClick={toggleSupport} alt="help"/>
                    </li>                    <li className={styles.navbarItem}>
                    {login ? ( 
                        <button className={styles.navbtn} onClick={handleSignOut} >logout</button> 
                        ) : (
                            <button className={styles.navbtn} onClick={handleSignInPopup} >Sign In</button>
                            ) }
                    </li>
                </ul>
            )}
            {showDrawer && (<Drawer toggleMenu={toggleMenu} handleSignInPopup={handleSignInPopup} toggleSupport={toggleSupport} handleSignOut={handleSignOut} toggleShowReferral={toggleShowReferral}/>) }
            {signin && (<Sign handleClosePopup={handleClosePopup} />)}
            {support?<div id={styles.supportdiv} className={styles.support}>
                <div className={styles.flexDiv}><h1 className={styles.support}>Support</h1><button onClick={toggleSupport}>X</button></div>
                <div className={styles.flexDiv}><section><p className={styles.support}>Please reach out to us with your concerns on any of these platforms</p>
                <br />
                <p className={styles.support}>Email :</p>
                <p className={styles.support}>support@aasthy.com</p>
                <br />
                <p className={styles.support}>Call :</p>
                <p className={styles.support}>+918045688004</p>
                <br />
                <p className={styles.support}>Whatsapp :</p>
                <p className={styles.support}>+918045688004</p></section>
                <Image id={styles.supportIm} width={200} heigth={200}src={Support} alt='image'></Image>
                </div>
                
            </div>:
            <></>}
            {showReferral && (
                <div id={styles.referralDiv}>
                    <h2>Start Referring Now!<span><b onClick={toggleShowReferral} >X</b></span></h2> 
                    <h4>Invite your friends and earn upto 2% of their investment.</h4>
                    <p>You can earn 1% of your immediate referral and 0.5% , 0.25% and so on for every further referral of your referral</p>
                    <br />
                    <span>Your Referral Code</span>
                    <br />
                    <div>
                        <h3>ADIT674</h3>
                        <button>copy</button>
                    </div>
                </div>
            )}



            </div>
    );
};

export default Nav;
