// Scripts

import { FC } from 'react'
import Header from "../explore/components/header/Header"
import Footer from "../explore/components/footer/Footer"
import Code from "../explore/components/code/Code"

type HTMLElements = {
    Header: FC
    Footer: FC
    Code: FC
}

export const HTMLDoom: HTMLElements = {
    Header,
    Footer,
    Code
}

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
import campfire from "/test_image/campfire.gif"
import elaina from "/test_image/elaina_pixel.png"
import cloud1 from "/test_image/cloud1.png"
import cloud2 from "/test_image/cloud2.png"
import cloud3 from "/test_image/cloud3.png"

type PixelArtType = {
    campfire: string;
    elaina: string;
    cloud1: string;
    cloud2: string;
    cloud3: string;
};

export const PixelArt: PixelArtType = {
    campfire,
    elaina,
    cloud1,
    cloud2,
    cloud3
};

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
if (localStorage.getItem("Theme-color") == null || localStorage.getItem("Theme-color") == "undefined") {
    if (theme == "Light") {
        localStorage.setItem("Theme-color", "Light")
    } else if (theme == "Dark") {
        localStorage.setItem("Theme-color", "Hight")
        document.body.classList.add("Dark-mode");
    }
}


