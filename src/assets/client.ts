// HTML Elements
import Header from "../explore/components/header/Header"
import Footer from "../explore/components/footer/Footer"
import Code from "../explore/components/code/Code"
export const HTMLDoom: object = {
    Header,
    Footer,
    Code
}

// Themes and Time
import { theme } from "./theme";
const now = new Date();
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');

const themeColor: string = localStorage.getItem("Theme-color") || "undefined";
export const configSettings: object = {
    themeColor,
    time: {
        hours,
        minutes,
        seconds
    }
};

// Pixel Image Pack
import campfire from "/image/campfire.gif"
import cloud1 from "/image/cloud1.png"
import cloud2 from "/image/cloud2.png"
import cloud3 from "/image/cloud3.png"
export const PixelArt: object = {
    campfire,
    cloud1,
    cloud2,
    cloud3
};

// Icons Image Pack
import github from "/image/icons/github_icon.png"
import youtube from "/image/icons/youtube_icon.png"
import pinterest from "/image/icons/pinterest_icon.png"
import vscode from "/image/icons/vscode_icon.png"
import intellij from "/image/icons/intelli_icon.png"
export const Icons: object = {
    github,
    youtube,
    pinterest,
    vscode,
    intellij
}

// Change theme if Theme-color == null/undefined
if (localStorage.getItem("Theme-color") == null || localStorage.getItem("Theme-color") == "undefined") {
    if (theme == "Light") {
        localStorage.setItem("Theme-color", "Light")
    } else if (theme == "Dark") {
        localStorage.setItem("Theme-color", "Hight")
        document.body.classList.add("Dark-mode");
    }
}


