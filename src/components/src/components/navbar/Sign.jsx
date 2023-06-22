    "use client"
    import Image from 'next/image'
    import React, { useState } from 'react'
    import styles from './div.module.css';
    import { auth, provider } from "@/app/firebase";
    import { GoogleAuthProvider } from 'firebase/auth';
    import { signInWithPopup } from 'firebase/auth';
    import Phone from './Phone';

    const Sign = ({ handleClosePopup }) => {
        const googleProvider = new GoogleAuthProvider();
        const [phone, setPhone] = useState(false);
        const [mobile, setMobile] = useState(false);



        const handleGoogleSignin = () => {
            signInWithPopup(auth, googleProvider)
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


        const handlePhoneSignin = () => {
            setMobile(true)
            setPhone(true);
        }

        return (
            <>



                <div className={styles.signin} >
                    <p><Image onClick={handleClosePopup} width="40" height="40" src="https://img.icons8.com/ios-filled/50/multiply.png" alt="multiply" /></p>
                        {phone ? (<Phone />) : (
                            <div className={styles.sign} >


                        <div className={styles.right} >
                            <p>Lets begin your high returns journey</p>
                            <h3>Sign in with just a click!</h3>
                            <div className={styles.log}>
                                <button className={styles.google} onClick={handleGoogleSignin} >Sign in with Google</button>
                                <button className={styles.number} onClick={handlePhoneSignin} >Sign in Phone Number</button>
                            </div>
                        </div>
                    </div>
  )}
                </div>
                
            </>
        )
    }

    export default Sign