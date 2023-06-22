"use client"
import React,{useState,useEffect} from "react";
import styles from './faq.module.css';
import Image from 'next/image';
import Collapse from "public/collapse-arrow.png";
import Expand from "public/expand-arrow.png";
const Qgeneral=["who can invest in growth?","how can NRI'S invest with growth?","HOW do you keep my personal information secure?"]
const Ageneral=["any Indian citizen, Hindu undivided family(HUF), COMPANIES, and NRIs can invest with growth.","NRI investors can invest through on NRO or NRE account or from a normal bank account in India. \nYour returns and sale proceeds, however, will be credit to your NRO account.","at growth, the security of our platform and the privacy of all your data is an utmost priority. Our platform is built keeping the best-in-class security and privacy features in mind.\nAll your data is hosted on secure cloud network and all sensitive client data is encrypted and stored with 256-bit SHA encryption."]

const genlen=Qgeneral.length;
const genstr=[];
let i=0;
while(i<genlen){
    genstr.push(i);
    i++;
}
const General =(props)=>{

    const [answer,setAnswer]= useState(false);
    const toggleAnswer=()=>{
        setAnswer(!answer);
    }
    return(
        
        <div id={"inv-"+props.index} className={styles.question}>
        <div className={styles.flexDiv}>
            <span>{Qgeneral[props.index]}</span>
            <button className={styles.toggleButton} onClick={toggleAnswer}><Image width={20} height={20}src={answer?Collapse:Expand} alt="" /></button>
        </div>
        {answer?
            <div className="answer">
            <br />
            <p className={styles.ans}>{Ageneral[props.index].split('\n').map((str,i) => <p key={i}>{str}</p>)}</p></div>:
            <></>}
        </div>
    )
}

const Qinvestment=["what is the minimum investment?","what are the reporting standards and disclosures?","do you offer any guarantee on returns?","what are the key differences between a REIT and strata?","what if something goes wrong with growth? Is my investment safe?"]
const Ainvestment=["the minimum investment is Rs. 500000. Please note that this subject to change.","we believe in 100% transparency. All property document, rental agreements, tenancy details, title report, due diligence report, etc. Will be available through the investor dashboard.","Yes growth offer 12 to 15% guarantee return on your investment depended on term and condition with builder.","REITs are publicly traded instruments. Investors buy and sell units of the REIT to receive dividends and make capital gains.\nWhereas with growth, investors are made shareholders of a private limited company which owns the property. Growth manages the property on behalf of SPV.\n\nYIELDS\nIn a REIT, the yield varies based on your entry price. With growth the yield are fixed.\n\nVOLATILITY\nAs a listed product, a REIT is subject to stock market volatility which can by out of synd with actual property value.\nWith growth, Asset valuations are far more stable and only change according to ground reality.","your investments are yours and are absolutely secure regardless of what happens to growth.\n\nHERE’S HOW\nYour investment is in the form of equity shares and compulsorily convertible debentures in a private limited company, incorporated for the sole purpose of acquiring and owning the asset.\nBy virtue of holding equity shares in the SPV, you in turn own the asset.\nThe SPV is bound to comply with statutory requirements such as holding general meetings, filling returns, etc. That are undertaken by third party consultancy. Due to this structure, the ultimate decision-making power lies with the investors alone.\nThus, even if growth is not functional, your ownership and control of the asset remains secure."]

const invlen=Qinvestment.length;
const invstr=[];
let j=0;
while(j<invlen){
    invstr.push(j);
    j++;
}
const Investment =(props)=>{

    const [answer,setAnswer]= useState(false);
    const toggleAnswer=()=>{
        setAnswer(!answer);
    }
    return(
        
        <div id={"gen-"+props.index} className={styles.question}>
        <div className={styles.flexDiv}>
            <span>{Qinvestment[props.index]}</span>
            <button className={styles.toggleButton} onClick={toggleAnswer}><Image width={20} height={20}src={answer?Collapse:Expand} alt="" /></button>
        </div>
        {answer?
            <div className="answer">
            <br />
            <p className={styles.ans}>{Ainvestment[props.index].split('\n').map((str,i) => <p key={i}>{str}</p>)}</p></div>:
            <></>}
        </div>
    )
}

const Qpreinvest=["WHAT IS THE INVESTMENT PROCESS?","what happens if a property does not get fully funded?","do I have to travel to the location of the property or your office to invest? ","what if I want to withdraw my initial token advance?","is there any lock in on my investment?","what are growth fees?","will there be a management fee when the property is not fully funded?"]
const Apreinvest=["the first thing you will need is a growth account which is KYC verified. The documents you will require are\n\n •	A copy of your PAN card.\n•	Address proof such as adhaar, driver’s license, or passport.\n•	Bank statmentor a cancelled cheque leaf with the name printed.\n\nNRI investors need to provide an NRE or NRO account number.\nNON-INDIVIDUAL entities will be required to submit additional documents.\nOnce verified, a virtual account will be created and you can now invest in any open opportunity listed on  the platform.\nTo do so all you need to do is click on the ‘invest now’ button and confirm your investment details\nYou will receive all necessary property and SPV related documents for your persual and scrutuny.\nIf you decide to move forward and block your investment, you will need to e-sign a binding expression of interest (EOI) and transfer the initial 10% token advance to your virtual account, which you will find on your dashboard.\nOnce 100% commitment is received from interested investors, the opportunity is considered to be fully funded.\nYou will then be required to transfer the remaining amount into your virtual account.\nYour investment amount will then be routed through an escrow mechanism to the share subscription accounts and ultimately, to the current account of the SPV.\nYou will be allocated equity shares and compulsorily convertible debentures (CCCDs) in the private limited company.\nThe SPV will then proceed to purchase the asset.","In the unlikely event that a property on our platform doesn’t complete its funding target, any funds that have been committed by investors will be reimbursed to the verified bank account.","yes, but there is no need to visit the property in person. All required documentation will be signed digitally through a reputed digital signature provider.","once the initial investment or token advance is paid, a termination fee shall apply for any withdrawals. The fee will be as per the terms mentioned in the expression of interest.","Yes, there is a 2-year lock in from the time the property is registered. You are free to sell your holding thereafter.","a 1.5% annual management fees on your profit charged by growth.","No, there will be no management fee charged to investor for as long as the property is not fully funded."]

const preinlen=Qpreinvest.length;
const preinstr=[];
let k=0;
while(k<preinlen){
    preinstr.push(k);
    k++;
}
const PreInvestment =(props)=>{

    const [answer,setAnswer]= useState(false);
    const toggleAnswer=()=>{
        setAnswer(!answer);
    }
    return(
        
        <div id={"prein-"+props.index} className={styles.question}>
        <div className={styles.flexDiv}>
            <span>{Qpreinvest[props.index]}</span>
            <button className={styles.toggleButton} onClick={toggleAnswer}><Image width={20} height={20}src={answer?Collapse:Expand} alt="" /></button>
        </div>
        {answer?
            <div className="answer">
            <br />
            <p className={styles.ans}>{Apreinvest[props.index].split('\n').map((str,i) => <p key={i}>{str}</p>)}</p></div>:
            <></>}
        </div>
    )
}


const Qpostinvest=["when is my investment process complete? ","when & how will i receive my returns?","how will I be updated on the performance of my investment?","how can I exit my investment?"]
const Apostinvest=["Your investment is completed as soon as the opportunity is fully funded and private placement of your investment is done in the SPV.\nGrowth generally has a time frame of 15 days to ensure that the property receive complete funding.","the return on your investment is in the form of interest on debentures and is paid after 2-year time period.\nThe return is transferred to your bank account after time period mention on property dashboard.","you can view the performance of your investment through our online dashboard. Note that the Net Asset Value (NAV) of the property will be updated on a half yearly basis.","you can exit your investment once the 2-year lock in period is complete. This can be done in two different ways.\n\nPRIVATE SALE:\nYou can sell fractional/holding to anyone you may know, such as friends or family. You will be required to execute the necessary transfer document for the same.\nGrowth will provide you with the valuation of your holding should you require assistance in setting a price.\n\nRESALE MARKET:\nUsing growth online dashboard, you can list your fraction/holding on growth’s resale market at growth’s recommended NAV.\nYou will be required to execute the necessary transfer documents for the same. Once a new investor has acquired your fraction, you will be credited your gains (post taxes and fees ) on your registered bank account."]


const postinlen=Qpostinvest.length;
const postinstr=[];
let l=0;
while(l<postinlen){
    postinstr.push(l);
    l++;
}
const PostInvestment =(props)=>{

    const [answer,setAnswer]= useState(false);
    const toggleAnswer=()=>{
        setAnswer(!answer);
    }
    return(
        
        <div id={"postin-"+props.index} className={styles.question}>
        <div className={styles.flexDiv}>
            <span>{Qpostinvest[props.index]}</span>
            <button className={styles.toggleButton} onClick={toggleAnswer}><Image width={20} height={20}src={answer?Collapse:Expand} alt="" /></button>
        </div>
        {answer?
            <div className="answer">
            <br />
            <p className={styles.ans}>{Apostinvest[props.index].split('\n').map((str,i) => <p key={i}>{str}</p>)}</p></div>:
            <></>}
        </div>
    )
}



const Qtaxfin=["what are the tax implications on my investment?","how will the returns of NRI be taxed?","can i transfer my investment amount to any foreign currency?"]
const Ataxfin=["For Indian residents, you will be paying taxes on capital appreciation.\nShort term gain will be applicable if the shares and debentures area sold before 24 and 36 months respectively. This will be taxed at the rate applicable to the investor.","under Indian income tax law. On NRI is required to pay tax on any income earned or sourced in India. If the earned income in India exceeds the basic exemption limit, the NRI will have to pay taxes in India as per the applicable slab rates\nNRIs can explore benefits under the double taxation avoidance agreement (DTAA) entered with the respective country, subject to the availability of a tax residency certificate.","the transfer of foreign currency by NRIs is regulated by extant RBI and FEMA guidelines."]



const taxfinlen=Qtaxfin.length;
const taxfinstr=[];
let m=0;
while(m<taxfinlen){
    taxfinstr.push(m);
    m++;
}
const TaxFinance =(props)=>{

    const [answer,setAnswer]= useState(false);
    const toggleAnswer=()=>{
        setAnswer(!answer);
    }
    return(
        
        <div id={"taxfin-"+props.index} className={styles.question}>
        <div className={styles.flexDiv}>
            <span>{Qtaxfin[props.index]}</span>
            <button className={styles.toggleButton} onClick={toggleAnswer}><Image width={20} height={20}src={answer?Collapse:Expand} alt="" /></button>
        </div>
        {answer?
            <div className="answer">
            <br />
            <p className={styles.ans}>{Ataxfin[props.index].split('\n').map((str,i) => <p key={i}>{str}</p>)}</p></div>:
            <></>}
        </div>
    )
}



const Qlegal=["how are the investment structured? ","what is an SPV?","should I engage an attorney or lawyer? ","what kind of documentation will I need to sign?","how does growth ensure that property titles are in the clear?"]
const Alegal=["for each asset listed on the growth platform, a special purpose vehicle (SPV) is created in which funds are raised to purchase, own and manage the property.\nYour investment shall be towards subscription of the shares and compulsarily converlible debentures of the SPV that holds the property and represents your fractional investment.\nGrowth will provide asset management services to the SPV and undertake accounting, sectentatial, and maintenance, and other operational aspect under the asset management services contract with the SPV.","a special purpose vehicle is an entity incorporated/created under the law being a partnership firm, LLP a private company, etc for a specific lawful purpose.\nAny investment opportunity listed on the growth platform will be owned by an SPV being a private limited company set up for this specific purpose.","growth undertakes the legal due diligence of the property before it is purchased by the SPV. All investment and property related legal processes are handled by growth.\nHowever, you are welcome to seek tax and legal advice from your advisors to understand if the opportunity listed is suited for you. Should you engage any legal/tax advistor, we will be happy to answer any questions that they may have.","to begin with, you will be required to sign on expression of interest to confirm your commitment and remit 10% of your investment amount.\nFollowing this a drawdown notice will be sent to you once the opportunity has 100% commitment from all interested investors.\nApost which you may remit the remaining funds towards your investment.\nThis is followed by the offer letter for private placement of securities and, execution of share securities subscription agreement (SSA)with the SPV. The SPV also executes the asset management agreement with growth for which you will be executing a consent letter.\nAt the time of resale/liquidation of your holding in the SPV, you will be required to execute securities transfer documentation which includes a request letter for the transfer of securities, a deed of adherence to the SSA, and securities transfer form.\nAll these documents shall be executed through on e-signing process complete with an audit trail and no physical copies will have to be signed. This makes your investment process completely digital, fast, transparent, and very convenient.","growth has an experienced team that performs through technical and legal due diligence before listing any property on your platform. We engage reputed tier 1 law firms to conduct due diligence on the property title."]



const legallen=Qlegal.length;
const legalstr=[];
let n=0;
while(n<legallen){
    legalstr.push(n);
    n++;
}
const Legal =(props)=>{

    const [answer,setAnswer]= useState(false);
    const toggleAnswer=()=>{
        setAnswer(!answer);
    }
    return(
        
        <div id={"legal-"+props.index} className={styles.question}>
        <div className={styles.flexDiv}>
            <span>{Qlegal[props.index]}</span>
            <button className={styles.toggleButton} onClick={toggleAnswer}><Image width={20} height={20}src={answer?Collapse:Expand} alt="" /></button>
        </div>
        {answer?
            <div className="answer">
            <br />
            <p className={styles.ans}>{Alegal[props.index].split('\n').map((str,i) => <p key={i}>{str}</p>)}</p></div>:
            <></>}
        </div>
    )
}


export default function Faq(){
    return(
        <div id={styles.faq}>
            <h1>FAQs</h1>
            <p>Your treasure trove of information! Find out all you need to know about real estate, Aasthy and investments with our curated set of questions.</p>
            <br />
            <br />
            <div id="general">
                <h3>General</h3>
                {genstr.map(i=>(
                    <General key={i} index={i} />
                ))}
            </div>
            <div id="investment">
                <h3>Investment</h3>
                {invstr.map(i=>(
                    <Investment key={i} index={i} />
                ))}
            </div>
            <div id="preInv">
                <h3>Pre-Investment</h3>
                {preinstr.map(i=>(
                    <PreInvestment key={i} index={i} />
                ))}
            </div>
            <div id="postInv">
                <h3>Post-Investment</h3>
                {postinstr.map(i=>(
                    <PostInvestment key={i} index={i} />
                ))}
            </div>
            <div id="taxFin">
                <h3>Tax & Finance</h3>
                {taxfinstr.map(i=>(
                    <TaxFinance key={i} index={i} />
                ))}
            </div>
            <div id="legal">
                <h3>Legal</h3>
                {legalstr.map(i=>(
                    <Legal key={i} index={i} />
                ))}
            </div>
        </ div>
    )
}
