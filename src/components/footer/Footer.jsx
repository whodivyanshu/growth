"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';
import styles from './footer.module.css';
import Logo from "public/logo.png";
import Facebook from "public/facebook.png";
import Insta from "public/insta.png";
import Twitter from "public/twitter.png";
import Linkedin from "public/linkedin.png";
import Youtube from "public/youtube.png";
import Copyright from "public/copyright.png";
import AstuteGiraffe from "public/astuteGiraffe.svg"

const Footer =()=>{
    useEffect(()=>{
       console.log("It works");
    },[])
    return(
        <div className={styles.footer}>
            <div id={styles.section1} className={styles.flexDiv}>
                <div id={styles.part1}>
                    <div className={styles.flexDiv}>

                    <Image id={styles.logo} width={150} height={60}src={Logo} alt="" />
                    </div>
                    <div className={styles.flexDiv}>
                        <Image width={25}height={25}src={AstuteGiraffe} alt="" />
                        &emsp;
                        <span style={{paddingTop:"5px",fontWeight:"500"}}>  Astute Giraffe </span>
                    </div>
                    
                    <span style={{fontSize:"13px"}}>Astute Giraffe Private Limited</span>
                    <br />
                    <br />
                    <p style={{fontSize:"13px"}}>Find us on</p>
                    <div className={`${styles.flexDiv} ${styles.socials}`}>
                        <a href="">
                            <Image width={20} height={20}src={Facebook} alt="" />
                        </a>
                        <a href="">
                            <Image width={20} height={20} src={Insta} alt="" />
                        </a>
                        <a href="">
                            <Image width={20} height={20} src={Twitter} alt="" />
                        </a>
                        <a href="">
                            <Image width={20} height={20} src={Linkedin} alt="" />
                        </a>
                        <a href="">
                            <Image width={20} height={20} src={Youtube} alt="" />
                        </a>
                    </div>
                </div>
                <div id={styles.part2}>
                    <p>Quick Links</p>
                    <br />
                    <div >
                        <div className={styles.flexDiv}>
                            <a href="">Invest Now</a>
                            <a href="">Testimonials</a>
                            <a href="">About Us</a>
                        </div>
                        <div className={styles.flexDiv}>
                            <a href="">Refer & Earn</a>
                            <a href="">FAQ</a>
                        </div>
                    </div>
                </div>
                <div id={styles.part3}>
                    <h3>Support</h3>
                    <br />
                    <span><Image width={15} height={15} src="https://aasthy.com/static/media/email-footer.3565b9fe.svg" alt="" />&emsp;
                        support@aasthy.com
                    </span>
                    <br />
                    <br />
                    <span><Image width={15} height={15}src='https://aasthy.com/static/media/phone-footer.8c04ca18.svg' alt="" />&emsp;
                        +91 8045688004
                    </span>
                </div>
            </div>
            <hr />
            <div id={styles.section2} className={styles.flexDiv}>
                <span><Image width={30} height={15} src={Copyright} alt="" />2022, Aasthy</span>

                <div>
                <a href="">Privacy Policy</a>
                <a href="">Terms & Conditions</a></div>
            </div>
            <hr />
            <div id={styles.section3}>
                <div className={styles.part1}>
                    <a href="/real-estate-investment-in-Bangalore" >Real Estate Investment in Bangalore</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-mumbai" >Real Estate Investment in Mumbai</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Delhi" >Real Estate Investment in Delhi</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Kolkata" >Real Estate Investment in Kolkata</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Chennai" >Real Estate Investment in Chennai</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Hyderabad" >Real Estate Investment in Hyderabad</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Goa" >Real Estate Investment in Goa</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Gujarat" >Real Estate Investment in Gujarat</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Ahmedabad" >Real Estate Investment in Ahmedabad</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Pune" >Real Estate Investment in Pune</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Noida" >Real Estate Investment in Noida</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Karnataka" >Real Estate Investment in Karnataka</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Tamil%20Nadu" >Real Estate Investment in Tamil Nadu</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Kerala" >Real Estate Investment in Kerala</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Maharashtra" >Real Estate Investment in Maharashtra</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-West%20Bengal" >Real Estate Investment in West Bengal</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Rajasthan" >Real Estate Investment in Rajasthan</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Uttar%20Pradesh" >Real Estate Investment in Uttar Pradesh</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Madhya%20Pradesh" >Real Estate Investment in Madhya Pradesh</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Haryana" >Real Estate Investment in Haryana</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Punjab" >Real Estate Investment in Punjab</a>&nbsp;|&nbsp;<a href="/investments?page=explore" >Fractional Investments in Real Estate</a>&nbsp;|&nbsp;<a href="/faq#reit" >Invest in REITS</a>&nbsp;|&nbsp;<a href="/faq#reit" >Invest in Embassy REIT</a>&nbsp;|&nbsp;<a href="/faq#reit" >Invest in Brookfield REIT</a>&nbsp;|&nbsp;<a href="/faq#reit" >Invest in Mindspace REIT</a>&nbsp;|&nbsp;<a href="https://medium.com/aasthy/aasthy-your-investment-buddy-21cba73bb49f" >Monthly Returns on Real Estate Investments</a>&nbsp;|&nbsp;<a href="https://medium.com/aasthy/aasthy-your-investment-buddy-21cba73bb49f" >How to get assured returns?</a>&nbsp;|&nbsp;<a href="https://medium.com/aasthy/aasthy-your-investment-buddy-21cba73bb49f" >How to get monthly returns on investments?</a>&nbsp;|&nbsp;<a href="https://medium.com/aasthy/aasthy-your-investment-buddy-21cba73bb49f" >How to make passive income on my investments?</a>
                </div>
                
                <br />
                <div className={styles.part2}>
                    <h4>Disclaimer</h4>
                    <p>Aasthy.com is a website and a fractional investment platform operated by Astute Giraffe Private Limited (&quot;Aasthy&quot;) (Company Number: 202220900D). Astute Giraffe serves as a manager to asset holding entities in various countries, like Aasthy Enterprises LLP, for India. From time to time, the executives of Astute Giraffe Private Limited organize private companies (SPVs) under the asset holding entities registered in respective countries. Neither Astute Giraffe nor asset holding entity is a broker-dealer or an investment advisor. All securitisation is conducted under the Aasthy asset holding entities organized by Astute Giraffe.</p>
                    <br />

                    <p>You should speak with your financial advisor, accountant, and/or attorney when evaluating any offering of interests, securities or fractional ownership. Neither Astute Giraffe nor Aasthy asset holding entities makes any recommendations or provides advice about investments, and no communication, through this website or in any other medium, should be construed as a recommendation for any security offered on or off this investment platform. Nothing in this material should be construed as investment or tax advice, or a solicitation or offer, or a recommendation to buy or sell any securities. The Site and/or the App may make forward-looking statements. These forward-looking statements include, but are not limited to, statements concerning the company, property, risk factors, plans, and projections. You should not rely on these statements but should carefully evaluate the offering materials in assessing any investment opportunity, including the complete set of risk factors that are provided as part of the offering circular for your consideration. We urge you to review the applicable offering circular, available here.</p>

                    <br />
                    <p>Neither Aasthy asset holding entities nor Astute Giraffe, nor any other person or entity assumes responsibility for the accuracy and completeness of forward-looking statements. Investments displayed on the Website are not bank deposits, are not insured, and are not guaranteed by Aasthy and/or Astute Giraffe, and may lose value. Investment opportunities posted on this website are &quot;private placements&quot; of securities that are not publicly traded, are subject to max holding period requirements, and are intended for investors who do not need a liquid investment.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer