import React, { useEffect, useState } from "react";

export default function CountDownTimer(props) {
  const [timeMs, setTime] = useState(parseInt(props.timeInM));
  
  const [seconds,setSeconds] = useState(0) ;
  const [minutes,setMinutes] = useState(0) ;
  const [hours,setHours] = useState(0) ;
  const [days,setDays] = useState(0) ;
 

  useEffect(() => {
    if (timeMs > 0) {
      setTimeout(() => {
        setTime(timeMs - 1);
      }, 1000);
    }
    setSeconds(Math.floor(timeMs ));
    setMinutes(Math.floor((seconds/60) ));
    setHours(Math.floor((minutes/60) ));
    setDays(Math.floor((hours/24) ));
  }, [timeMs]);

  return (
    <>
    <div className="slide4">

    

    <div className="countDown">
    <div>  <span>{seconds%60}</span> <p>seconds</p>   </div>
      
      <div><span>{minutes%60}</span>  <p>Minutes </p> </div>
      <br/>
      <div> <span>{hours%24}</span> <p>Hours</p>  </div>
      <div> <span>{days%24}</span>  <p>Days</p>  </div>
    </div>
    <a target='_blank'  href="https://www.google.com/maps/place/Villa+Saudi+%7C+%D9%81%D9%8A%D9%84%D8%A7+%D8%B3%D8%B9%D9%88%D8%AF%D9%8A,+%D8%A8%D8%B9%D8%AF+%D8%A8%D9%86%D8%B2%D9%8A%D9%86%D9%87+%D8%B7%D8%A7%D9%82%D9%87,+%D9%A5%D9%A0%D9%A0+%D9%85%D8%AA%D8%B1+%D9%85%D9%86,+Ring+Rd,+Al+Warak,+Giza+Governorate%E2%80%AD/data=!4m2!3m1!1s0x14586b5b17be089f:0xf62c6a73cdaa843b?utm_source=mstt_1&entry=gps&coh=192325&g_ep=CAESCjExLjExNS4xMDMYACDXggMqGyw5NDIwNzUwMCw0NzA3NTkxNSw0NzA4NDM5M0ICRUc%3D" rel="noreferrer">
    <div className="location">
      <div  className="locotionIcon">
      </div>

      <div className="locationText">
     الوراق - فيلا السعودي
      </div>
    </div>

    </a>

    </div>

      
    </>
  );
}
