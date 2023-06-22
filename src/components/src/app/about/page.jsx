import React from "react";
import styles from './about.module.css';
import TopRight from '../../../public/about-top-right.svg';
import BottomRight from '../../../public/about-bottom-right.png';
import Image from 'next/image';
import Link from 'next/link';
import FirstImage from 'public/growth2.svg';
import SecondImage from 'public/growth4.svg';

const About=()=>{
    return(
        <div>
            <div className={styles.flexDiv} id={styles.top}>
                <div>
                    <h1>Simple.</h1>
                    <h1 id={styles.highlight}>Transparent.</h1>
                    <h1>Data First.</h1>
                    <br />
                    <p>Aasthy is democratizing real estate investments to bridge the multi-trillion dollar gap between high infrastructure demand and low retail investments due to lack of transparency and access. We do this with our deep experience in technology, data and investment structures.</p>
                </div>
                <div><Image className={styles.image} width={400} height={400} src={FirstImage} alt="image"></Image></div>
            </div>
            <div className={styles.flexDiv} id={styles.bottom}>
                <div>
                    <br />
                    <br />
                    <h2>Discover fractional investments in real estate curated by our experts to give you the best returns!</h2>
                    <br />
                    <br />
                    <Link type="button" id={styles.exploreAss} href="/#properties">Explore Assets!</Link>
                </div>
                <div><br /><br /><Image className={styles.image} width={380} height={240} src={SecondImage} alt="image"></Image></div>
            </div>
        </div>
    )
}

export default About;