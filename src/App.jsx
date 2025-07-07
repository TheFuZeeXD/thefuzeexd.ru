import './index.css'
import Banner from "/image/wallpaper.dark.webp"
import BannerLight from "/image/wallpaper.light.webp"
import { HTMLDoom } from './assets/client'
import { useEffect } from "react";


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
        <HTMLDoom.Code />
        <HTMLDoom.Footer />
      </div>
    </>
  )
}
