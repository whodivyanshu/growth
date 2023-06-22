"use client"
import React,{useContext} from "react";
import styles from './testimonials.module.css';
import UiContext from '@/context/ui/uiContext';


const ReviewTile =(props)=>{
  const {aasthian} =props;
  const investImgStyle = {
    backgroundImage: `url("${aasthian.image}")`
    };
    return(
      <div className={styles.reviewTile}>
              <div className={styles.photo} style={investImgStyle}>
              </div>
              <div className={styles.testimonies}>
                  <p className={styles.review}>{aasthian.discription}</p>
                  <br/>
                  <h4 className={styles.name}>{aasthian.name}</h4>
                  <p className={styles.hob}>{aasthian.role}</p>
              </div>
      </div>
  )
}

const Testimonials=()=> {
  const asthian = useContext(UiContext);
  console.log(asthian);
  const noOfAasthians= asthian.length;
  const aasthianIndex=[];
  for(var i=1;i<noOfAasthians;i++){
    aasthianIndex.push(i);
  }
  return(
    <div className={styles.cover}>
        <h1 className={styles.heading}>Happy Aasthians</h1>
        <div className={styles.reviewContainer}>
          {aasthianIndex.map(i=>(
            <ReviewTile key={i} aasthian={asthian[i]}/>
            ))}

    </div>
    </div>
  )
}


export default Testimonials;
