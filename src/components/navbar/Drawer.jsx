import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useContext, useEffect} from 'react'
import styles from './navbar.module.css'
import signinContext from '@/context/signin/signinContext'

const Drawer = ({ toggleMenu, handleSignInPopup, handleSignOut }) => {
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
                         <Image style={{cursor: "pointer"}} src="https:img.icons8.com/ios/90/000000/multiply.png" width={30} height={30} alt="close" />
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
                             <button className={styles.drawerbtn1}>Refer and Earn</button>
                         </li>
                         <li className={styles.drawerItem}>
                             <Image src="https:img.icons8.com/ios/90/4E0668/headset--v1.png" width={30} height={30} alt='customer care' />
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