import "./footer.css"
import Sun from "/image/svg/sun-icon.svg"
import Mon from "/image/svg/moon-icon.svg"
import { configSettings } from "../../assets/client.ts"
import { useState, useEffect } from "react";
import LanguagePack from "../../assets/lang.ts";

// Created by TheFuZeeXD
// 2025 © TheFuZeeXD All rights reserved.


export default function Footer() {
  const [isTheme, set] = useState(configSettings.themeColor);

  function changeTheme() {
    set(isTheme == "Light" ? "Hight" : "Light");
    localStorage.setItem('Theme-color', isTheme);
    location.reload();
  };

  useEffect(() => {
    set(isTheme == "Light" ? "Hight" : "Light");
    localStorage.setItem('Theme-color', isTheme);
  }, []);

  return (
    <footer>
      <h2>{LanguagePack.footer.title}</h2>
      <a id="contactMalito" href="mailto:fuzeexd@thefuzeexd.ru?subject=Связаться с thefuzeexd">fuzeexd@thefuzeexd.ru</a>
      <a href="https://github.com/TheFuZeeXD/thefuzeexd.ru">Source❤️Code</a>
      <div id="ImgBox">
        <img onClick={changeTheme} src={localStorage.getItem("Theme-color") == "Hight" ? Mon : Sun}></img>
      </div>
    </footer>
  )
}

