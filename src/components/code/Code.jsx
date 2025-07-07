import "./code.css"
import "../../fonts.css"
import Logo from "/image/logo.jpg"
import LanguagePack from "../../assets/lang"
// Created by TheFuZeeXD
// 2025 © TheFuZeeXD All rights reserved.

export default function Code() {
    return (
        <>
            <section className="myInfo">
                <img src={Logo}></img>
                <h1>TheFuZeeXD</h1>
                <div className="containerBadges">
                    <span>👤 He/Him</span>
                    <span>🏔️ Sankt-Peterburg</span>
                    <span>&lt;/&gt; Web-Developer</span>
                </div>
            </section>

            <section className="aboutMe">
                <h2>{LanguagePack.aboutme.title}</h2>
                <p>{LanguagePack.aboutme.description}</p>
            </section>

            <h1 id="title-Project">{LanguagePack.projects.title}</h1>
            <section className="myProject">
                <div className="projects" id="BRH" onClick={() => { location.href = "https://github.com/TheFuZeeXD/BR-Helper" }}>
                    <div className="flex">
                        <h1>BR-Helper | <span className="Author">by TheFuZeeXD</span></h1>
                        <p>{LanguagePack.projects.brh_description}</p>
                        <h3 className="LangName" id="JS">JavaScript</h3>
                    </div>
                </div>

                <div className="projects" id="NaebVerse" onClick={() => { location.href = "https://naebalova.ru/" }}>
                    <div className="flex">
                        <h1>NaebVerse | <span className="Author">by TheFuZeeXD</span></h1>
                        <p>{LanguagePack.projects.naebverse_description}</p>
                        <h3 className="LangName" id="PHP">PHP</h3>
                    </div>
                </div>


                <div className="projects" id="NaebVerse" onClick={() => { location.href = "https://naebalova.store/" }}>
                    <div className="flex">
                        <h1>Naebalova.store | <span className="Author">by TheFuZeeXD</span></h1>
                        <p>{LanguagePack.projects.naebalova_store_description}</p>
                        <h3 className="LangName" id="PHP">PHP</h3>
                    </div>
                </div>
            </section>
        </>
    )
}
