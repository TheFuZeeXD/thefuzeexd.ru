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
    // localStorage.getItem("Theme-color") == "Hight" ? Background.src = Banner : Background.src = BannerLight;
  };

  useEffect(() => {
    set(isTheme == "Light" ? "Hight" : "Light");
    localStorage.setItem('Theme-color', isTheme);
    if (isTheme == "Light") {
      document.body.classList.remove("Dark-mode");
    } else {
      document.body.classList.add("Dark-mode");
      document.querySelector("#Git1").src = "https://github-readme-stats.vercel.app/api?username=TheFuZeeXD&theme=maroongold&hide_border=false&include_all_commits=false&count_private=false";
      document.querySelector("#Git2").src = "https://nirzak-streak-stats.vercel.app/?user=TheFuZeeXD&theme=maroongold&hide_border=false";

    }

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

