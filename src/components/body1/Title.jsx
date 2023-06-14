"use client";
import React, {useState, useEffect} from 'react'
import Body1res from './responsive/Body1res';
import Body1 from './Body1';

const Title = () => {
    const [responsive, setresponsive] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) {
                setresponsive(true);
            } else {
                setresponsive(false);
            }
        };
        
        handleResize(); // Check initial screen size
        
        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[]);
  return (
    <div>
        {responsive ? (<Body1res />) : (<Body1 />)}
    </div>
  )
}

export default Title