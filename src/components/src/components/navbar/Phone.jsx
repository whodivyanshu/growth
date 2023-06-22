"use client"
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

import { useState, useContext } from "react";
import styles from "./phone.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "@/app/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import Image from "next/image";
import signinContext from "@/context/signin/signinContext";


const Phone = ({handleClosePopup}) => {
  const log = useContext(signinContext);
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
        localStorage.setItem("user", JSON.stringify(res.user));

        log.login = true;
        window.location.reload();

      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    }
    
    return (
      <section className={styles.section} >
      <div  className={styles.phone}>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2  >
            👍 Login Success
          </h2>
        ) : (
          <div  >
            <h1  >
              <span className={styles.head}> Sign In <br />  with Phone Number</span>
            </h1>
            {showOTP ? (
              <>
                <div >
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  
                  
                >
                  Enter your OTP
                </label>
                <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  type="number"
                  autoFocus
                  
                />
                <button
                  onClick={onOTPVerify}
                  
                >
                  {loading && (
                    <CgSpinner size={20} />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div >
                  <BsTelephoneFill size={30} />
                </div>
                <label
                  htmlFor=""
                  className={styles.verify}
                 
                  
                >
                  Verify your phone number
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                <button
                  onClick={onSignup}
                  
                >
                  {loading && (
                    <CgSpinner size={20} />
                  )}
                  <span>Send code via SMS</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Phone;
