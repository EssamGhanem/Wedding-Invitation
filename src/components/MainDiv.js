import React, { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import sound from '../BGMusic.mp3';

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "./sass/styles.css";
// import required modules
import { Scrollbar, Mousewheel } from "swiper/modules";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import CountDownTimer from "./CountDownTimer";

function MainDiv() {
  function changeAudioBG() {
    const Abutton = document.querySelector("#audioButton");
    Abutton.classList.toggle("audioOFF");
  }

  const audio = new Audio(sound);

  function playAudio() {
    console.log();
    if (audio.paused) {
      changeAudioBG();
      audio.play();

      return;
    }

    audio.pause();
    changeAudioBG();
  }

  
  // useEffect(()=>playAudio(),[])

  let date = new Date();
  let todayInMS =
    date.getDate() * 24 * 60 * 60 +
    date.getHours() * 60 * 60 +
    date.getMinutes() * 60 +
    date.getSeconds();
  const widdingDay = 22 * 24 * 60 * 60 + 19 * 60 * 60 + 30 * 60;
  const countDownTime = widdingDay - todayInMS;
  

  return (
    <>


      <div className="mainDiv">
        <div className="swiperContainer">
          <Swiper
              
            direction="vertical"
            scrollbar={{
              hide: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Scrollbar, Mousewheel]}
            className="mySwiper"
            mousewheel={{
              enabled: true,
            }}
          >
            <SwiperSlide className="swiper1">
              <Slide1 />
            </SwiperSlide>
            <SwiperSlide   >
            
              <Slide2/>
            </SwiperSlide>

            <SwiperSlide>
              <CountDownTimer timeInM={countDownTime} />
            </SwiperSlide>
            <SwiperSlide>
              <Slide3 />
            </SwiperSlide>


          </Swiper>
          <audio controls autoplay loop   src={sound} type="audio/mp3" hidden >
              
              </audio>
  
          <div id="audioButton" className="audioOFF" onClick={playAudio}>
            {" "}
          </div>

        </div>
      </div>
    </>
  );
}

export default MainDiv;
