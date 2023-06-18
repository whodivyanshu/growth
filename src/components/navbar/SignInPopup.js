import React from 'react';
import Image from 'next/image';
import sign from "./signin.module.css";

const SignInPopup = ({ handleGoogleSignIn, handlePhoneSignIn, handleClosePopup }) => {
  return (
    <div className={sign.signin}>
      <p>
        <Image onClick={handleClosePopup} width="40" height="40" src="https://img.icons8.com/ios-filled/50/multiply.png" alt="multiply" />
      </p>

      <div className={sign.right}>
        <p>Lets begin your high returns journey</p>
        <h3>Sign in with just a click!</h3>
        <div className={sign.log}>
          <button className={sign.google} onClick={handleGoogleSignIn}>Sign in with Google</button>
          <button className={sign.number} onClick={handlePhoneSignIn}>Sign in Phone Number</button>
        </div>
      </div>
    </div>
  );
};

export default SignInPopup;
