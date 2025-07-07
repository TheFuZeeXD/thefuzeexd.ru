// Scripts
import { theme } from "./theme";
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Code from "../components/code/Code"
const themeColor: string = localStorage.getItem("Theme-color") || "undefined";

export const HTMLDoom: object = {
    Header,
    Footer,
    Code
}

export const configSettings: object = {
    themeColor
};


if (localStorage.getItem("Theme-color") == null || localStorage.getItem("Theme-color") == "undefined") {
    if (theme == "Light") {
        localStorage.setItem("Theme-color", "Light")
    } else if (theme == "Dark") {
        localStorage.setItem("Theme-color", "Hight")
    }
}
