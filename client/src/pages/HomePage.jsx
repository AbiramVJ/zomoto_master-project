import React from 'react'
import { useParams } from 'react-router-dom';
import Delivery from '../components/Delivery';
import Dining from '../components/Dining';
import NightLife from "../components/NightLife/index";
import Nutrition from "../components/Nutrition/index";

export const HomePage = () => {
    const { type } = useParams();
    console.log(type);
    
    return (
        <>
            <div className="my-5">
            {type === "delivery" && <Delivery />}  
            {type === "dining" && <Dining />} 
            {type === "night" && <NightLife/>} 
            {type === "nutri" && <Nutrition/>} 
            
             </div>


          
        </>
    )
}

export default HomePage;