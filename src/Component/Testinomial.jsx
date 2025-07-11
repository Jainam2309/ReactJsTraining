import { useEffect, useState } from "react";
import CardProfile from "./CardProfile"
import reviews from "./ProfileData"; 

export default function Testimonials() {

    const[index,setIndex] = useState(0);

    // useEffect( () => {
    //     const currentProfile = reviews[index];
    //     alert(`Updated Details:\nName: ${currentProfile.name}\nJob: ${currentProfile.job}\nInfo: ${currentProfile.text}`);
    // },[index])
    

   
    function leftHandler() {
        if(index - 1 < 0) {
            setIndex(reviews.length-1);
        } 

        else {
            setIndex(index-1);
        }
    };
function handleRight() {
    if (index + 1 >= reviews.length) {
        setIndex(0);
    } else {
        setIndex(index + 1);
    }
}


    function surpriseHandler() {
      let randomIndex = Math.floor(Math.random() * reviews.length);
      setIndex(randomIndex);
    }
    return (
        <div>
            <CardProfile reviews={reviews[index]} />
            <button style={{marginRight:"15px"}} onClick={leftHandler}>Left</button>
            <button  style={{marginRight:"15px"}} onClick={handleRight}>Right</button>
            <button onClick={surpriseHandler}>surprise click</button>
        </div>
    );
    }

