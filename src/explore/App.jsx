import './index.css'
import Banner from "/image/wallpaper.dark.webp"
import BannerLight from "/image/wallpaper.light.webp"
import { HTMLDoom, PixelArt } from '../assets/client'
import { useEffect } from "react";
import DanceAnime from "/image/danceAnime1.gif"
// Created by TheFuZeeXD
// 2025 © TheFuZeeXD All rights reserved.

export default function App() {
  useEffect(() => {
    let preloader = document.getElementById("preloader");
    preloader.classList.add("LoadHidden");
    let bodycompleteload = document.querySelector("body");
    bodycompleteload.classList.add("LoadHidden");
  }, []);

  return (
    <>
      <div id="preloader">
        <div className="preloader-container">
          <div className="text-glow"></div>
          <div className="fz-text">
            <span className="f-letter" data-char="F">F</span>
            <span className="z-letter" data-char="Z">Z</span>
          </div>
        </div>
        <div className="scene">

        </div>
        <div className="loader"></div>
      </div>

      <img id="Banner-image" src={localStorage.getItem("Theme-color") == "Hight" ? Banner : BannerLight}></img>
      <div className='content-body'>
        <HTMLDoom.Header />
        <img id="cloud1" src={PixelArt.cloud1}></img>
        <img id="cloud2" src={PixelArt.cloud2}></img>
        <HTMLDoom.Code />
        <div className="ContainerPixels">
          <img id="campfire" src={PixelArt.campfire}></img>
          <img id="danceAnime" src={DanceAnime}></img>
        </div>
        <HTMLDoom.Footer />
      </div>
    </>
  )
}
