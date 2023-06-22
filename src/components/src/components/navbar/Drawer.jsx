import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useContext, useEffect} from 'react'
import styles from './navbar.module.css'
import signinContext from '@/context/signin/signinContext'

const Drawer = ({ toggleMenu, handleSignInPopup, handleSignOut, toggleSupport, toggleShowReferral }) => {
    const log = useContext(signinContext);
    const [login, setLogin] = useState(false);
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
  return (
    <div className={styles.drawer}>
                     <div className={styles.close} onClick={toggleMenu}>
                     <Image width="24" height="24" src="https://img.icons8.com/material-outlined/24/delete-sign.png" alt="delete-sign"/>
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
                        <button className={styles.navbtn1} onClick={toggleShowReferral}>Refer and Earn</button>
                         </li>
                         <li className={styles.drawerItem} onClick={toggleSupport}>
                         <Image width="29" height="29" src="https://img.icons8.com/material-rounded/24/FFFFFF/headset.png" alt="headset"/>
                         </li>
                         <li className={styles.drawerItem}>
                             {login ? (<button className={styles.drawerbtn} onClick={handleSignOut} >Sign Out</button>) : (
                                 <button className={styles.drawerbtn} onClick={handleSignInPopup} >Sign In</button>
                             )}
                         </li>
                     </ul>
                 </div>
  )
}

export default Drawer