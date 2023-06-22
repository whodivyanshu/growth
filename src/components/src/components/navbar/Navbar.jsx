"use client";
import Image from 'next/image';
import React, { useState, useEffect, useContext, useRef } from 'react';
import styles from './navbar.module.css';
import Logo from "public/logo.png";
import sign from "./signin.module.css";
import { auth, provider } from "@/app/firebase";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Link from 'next/link';
import signinContext from '@/context/signin/signinContext';
import Phone from './Phone';



const Navbar = () => {

    const log = useContext(signinContext);
    const [showMenu, setShowMenu] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);
    const [signin, setsignin] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const [login, setlogin] = useState(false);
    const [phone, setphone] = useState(false);
    const [support, setSupport]=useState(false);
    const [showReferral,setShowReferral]=useState(false);
    // log.login = true;
    // console.log(log.login);

    useEffect(() => {
        // Check if user is already signed in
        const user = localStorage.getItem('user');
        if (user) {
          // Set the initial sign-in state
          setlogin(true);
          log.login = true;
        }
        else{
            log.login = false;
        }

    
        // ... Remaining code ...
      }, [log]);

    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 882) {
                setShowMenu(true);
            } else {
                setShowMenu(false);
            }
            setShowDrawer(false); // Close the drawer on resize
        };
        
        handleResize(); // Check initial screen size
        
        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[]);


    const handleSignOut = () => {
        // Clear user information from local storage and sign out
        localStorage.removeItem('user');
        auth.signOut().then(() => {
          setsignin(false);
          log.login = false;
          window.location.reload();
        });
      };

      const handlePhoneSignIn = () => {
        handleclosePopup();
        setphone(true);
      }
      
      
    const handlegooglesignin = () => {
        // Sign in with Google
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            // User signed in successfully
            const user = result.user;
            console.log('User signed in:', user);
            localStorage.setItem('user', JSON.stringify(user));
            window.location.reload();
            // Redirect or handle the successful sign-in as needed
          })
          .catch((error) => {
            // Handle sign-in errors
            console.error('Error signing in with Google:', error);
            // Handle the sign-in error
          });
      };
      

    const toggleMenu = () => {
        // setShowMenu(!showMenu);
        setShowDrawer(!showDrawer);
    };

    const handleSignInPopup  = () => {
        setsignin(true);
      }

    const handleclosePopup = () => {
        setsignin(false);
    }
    const toggleShowReferral=()=>{
        setShowReferral(!showReferral);
    }
    const toggleSupport=()=>{
        setSupport(!support);
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
                    <Image width="20" height="20" src="https://img.icons8.com/ios-filled/50/4E0668/menu--v1.png" alt="menu--v1"/>
                </div>
            ) : (
                <ul className={styles.navbarItems}>
                    <Link href="/">
                    <li className={styles.navbarItem}>Home</li>
                        </Link>

                     <Link href="/properties" >
                    <li className={styles.navbarItem} >Investments</li>
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
                    <li className={styles.navbarItem}onClick={toggleSupport}>
                        <Image src="https://img.icons8.com/ios/90/000000/headset--v1.png" width={30} height={30} alt='customer care' />
                    </li>
                    <li className={styles.navbarItem}>
                        {login ? ( 
                            <button className={styles.navbtn} onClick={handleSignOut} >logout</button> 
                        ) : (
                            <button className={styles.navbtn} onClick={handleSignInPopup}>Sign In</button>
                           ) }
                    </li>
                </ul>
            )}
            {showDrawer && (
                <div className={styles.drawer}>
                    <div className={styles.close} onClick={toggleMenu}>
                        <Image style={{cursor: "pointer"}} src="https://img.icons8.com/ios/90/000000/multiply.png" width={30} height={30} alt="close" />
                    </div>
                    <ul className={styles.drawerItems}>
                        <Link href="/">
                        <li className={styles.drawerItem}>Home</li>
                            </Link>
                            <Link href="/properties" >
                        <li className={styles.drawerItem}>Investments</li>
                                </Link>
                                <Link href="/faq">
                        <li className={styles.drawerItem}>FAQ</li>
                                    </Link>
                                    <Link href="/about">
                        <li className={styles.drawerItem}>About Us</li>
                                        </Link>
                        <li className={styles.drawerItem}>
                            <button className={styles.drawerbtn1}onClick={toggleShowReferral}>Refer and Earn</button>
                        </li>
                        <li className={styles.drawerItem} onClick={toggleSupport}>
                            <Image src="https://img.icons8.com/ios/90/4E0668/headset--v1.png" width={30} height={30} alt='customer care' />
                        </li>
                        <li className={styles.drawerItem}>
                            {login ? (<button className={styles.drawerbtn} onClick={handleSignOut} >Sign Out</button>) : (

                                <button className={styles.drawerbtn} onClick={handleSignInPopup}>Sign In</button>
                            )}
                        </li>
                    </ul>
                </div>
            )}
            {signin && (
                    <div className={sign.signin} >
                    <p><Image onClick={handleclosePopup} id={sign.cross} width="40" height="40" src="https://img.icons8.com/ios-filled/50/multiply.png" alt="multiply"/></p>

                    <div className={sign.right} >
                        <p>Lets begin your high returns journey</p>
                        <h3>Sign in with just a click!</h3>
                        <div className={sign.log}>
                            <button className={sign.google} onClick={handlegooglesignin}>Sign in with Google</button>
                            <button className={sign.number} onClick={handlePhoneSignIn} >Sign in Phone Number</button>
                        </div>
                    </div>
            </div>
            )}
            {phone && (<Phone/>)}
            
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
                <Image id={styles.supportIm} width={200} heigth={200}src={Support}></Image>
                </div>
                
            </div>:
            <></>}
            {showReferral && (
                <div id={styles.referralDiv}>
                    <h2>Start Referring Now!<span><b>X</b></span></h2> 
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

export default Navbar;
