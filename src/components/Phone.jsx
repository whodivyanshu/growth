"use client"
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

import { useState } from "react";
import styles from "./phone.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "@/app/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

const Phone = () => {
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
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <section style={{ background: "#10B981" }} className="flex items-center justify-center h-screen">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 style={{ color: "#FFF" }} className="text-center font-medium text-2xl">
            👍 Login Success
          </h2>
        ) : (
          <div style={{ width: "20rem" }} className="flex flex-col gap-4 rounded-lg p-4">
            <h1 style={{ color: "#FFF" }} className="text-center leading-normal font-medium text-3xl mb-6">
              Welcome to <br /> CODE A PROGRAM
            </h1>
            {showOTP ? (
              <>
                <div style={{ background: "#FFF", color: "#10B981" }} className="w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#FFF" }}
                  className="text-center"
                >
                  Enter your OTP
                </label>
                <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  type="number"
                  autoFocus
                  style={{ width: "100%" }}
                />
                <button
                  onClick={onOTPVerify}
                  style={{ background: "#10B981", color: "#FFF", width: "100%", display: "flex", gap: "0.25rem", alignItems: "center", justifyContent: "center", paddingTop: "0.625rem", borderRadius: "0.25rem" }}
                >
                  {loading && (
                    <CgSpinner size={20} style={{ marginTop: "0.25rem", animation: "spin 1s linear infinite" }} />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div style={{ background: "#FFF", color: "#10B981" }} className="w-fit mx-auto p-4 rounded-full">
                  <BsTelephoneFill size={30} />
                </div>
                <label
                  htmlFor=""
                  style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#FFF" }}
                  className="text-center"
                >
                  Verify your phone number
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                <button
                  onClick={onSignup}
                  style={{ background: "#10B981", color: "#FFF", width: "100%", display: "flex", gap: "0.25rem", alignItems: "center", justifyContent: "center", paddingTop: "0.625rem", borderRadius: "0.25rem" }}
                >
                  {loading && (
                    <CgSpinner size={20} style={{ marginTop: "0.25rem", animation: "spin 1s linear infinite" }} />
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
