import "./footer.css"
import Sun from "/image/svg/sun-icon.svg"
import Banner from "/image/wallpaper.dark.jpg"
import BannerLight from "/image/wallpaper.light.jpg"
import Mon from "/image/svg/moon-icon.svg"
import configSettings from "../../assets/client.ts"
import { useState, useEffect } from "react";
import { Background } from "../../App.jsx";

// Created by TheFuZeeXD
// 2025 © TheFuZeeXD All rights reserved.


export default function Footer() {
  const [isTheme, set] = useState(configSettings.themeColor);

function changeTheme() {
        set(isTheme == "Light" ? "Hight" : "Light");
        localStorage.setItem('Theme-color', isTheme);
        location.reload();
        // localStorage.getItem("Theme-color") == "Hight" ? Background.src = Banner : Background.src = BannerLight;
      };

    useEffect(() => {
        set(isTheme == "Light" ? "Hight" : "Light");
        localStorage.setItem('Theme-color', isTheme);
    }, []);
      
    return (
        <footer>
            <h2>2025 © TheFuZeeXD All rights reserved.</h2>
            <a href="https://github.com/TheFuZeeXD/thefuzeexd.ru">Source❤️Code</a>
            <div id="ImgBox">
            <img onClick={changeTheme} src={localStorage.getItem("Theme-color") == "Hight" ? Mon : Sun}></img>
            </div> 
            </footer>
    )
}

