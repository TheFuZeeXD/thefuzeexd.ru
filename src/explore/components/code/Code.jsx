import "./code.css"
import "../../../fonts.css"
import Logo from "/image/avatar.gif"
import LanguagePack from "../../../assets/lang"
import { Icons } from "../../../assets/client"
// Created by TheFuZeeXD
// 2025 © TheFuZeeXD All rights reserved.

export default function Code() {
    return (
        <div id="MyContent_Code">

            <div className="ScrollContents">
                <section className="myInfo">
                    <img src={Logo}></img>
                    <h1>TheFuZeeXD</h1>
                    <div className="containerBadges">
                        <span>👤 He/Him</span>
                        <span>🏔️ Sankt-Peterburg</span>
                        <span>&lt;/&gt; Web-Developer</span>
                    </div>

                </section>



                <section className="aboutMe" id="infoText">
                    <h2>{LanguagePack.aboutme.title}</h2>
                    <p>{LanguagePack.aboutme.description}</p>
                </section>


                <section className="aboutMe" id="PrContentView">
                    <h2>{LanguagePack.PrContentView.title1}</h2>
                    <div className="containerLanguagesPr" id="firstCLPr">
                        <span>Python</span>
                        <span>Java</span>
                        <span>Kotlin</span>
                        <span>PHP + SQL</span>
                        <span>HTML5</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>TypeScript</span>
                    </div>
                    <h2 id="header-title_aboutME-2">{LanguagePack.PrContentView.title2}</h2>
                    <div className="containerLanguagesPr" id="lastCLPr">
                        <span title={LanguagePack.titlepack.github} onClick={() => { location.href = "https://github.com/TheFuZeeXD" }} className="iconXh1"><img src={Icons.github} /><h1>GitHub</h1></span>
                        <span title={LanguagePack.titlepack.youtube} onClick={() => { location.href = "https://www.youtube.com/@TheFuZeeXD" }} className="iconXh1"><img src={Icons.youtube} /><h1>YouTube</h1></span>
                        <span title={LanguagePack.titlepack.pinterest} onClick={() => { location.href = "https://ru.pinterest.com/TheFuZeeXD/" }} className="iconXh1" ><img src={Icons.pinterest} /><h1>Pinterest</h1></span>
                    </div>
                    <h2 id="header-title_aboutME-3">{LanguagePack.PrContentView.title3}</h2>
                    <div className="containerIDEPr">
                        <span className="iconXh1"><img src={Icons.vscode} /><h1>VScode</h1></span>
                        <span className="iconXh1"><img src={Icons.intellij} /><h1>Intellij IDEA</h1></span>
                    </div>
                </section>
            </div>


            <div className="ScrollContents">
                <h1 id="title-Project">{LanguagePack.projects.title}</h1>
                <section className="myProject">
                    <div className="projects" id="BRH" onClick={() => { location.href = "https://github.com/TheFuZeeXD/BR-Helper" }}>
                        <div className="flex">
                            <h1>BR-Helper | <span className="Author">by TheFuZeeXD</span></h1>
                            <p>{LanguagePack.projects.brh_description}</p>
                        </div>
                        <div className="ContainerLang">
                            <h3 className="LangName" id="JS">JavaScript</h3>
                        </div>
                    </div>

                    <div className="projects" id="NaebVerse" onClick={() => { location.href = "https://naebalova.ru/" }}>
                        <div className="flex">
                            <h1>NaebVerse | <span className="Author">by TheFuZeeXD</span></h1>
                            <p>{LanguagePack.projects.naebverse_description}</p>
                        </div>
                        <div className="ContainerLang">
                            <h3 className="LangName" id="PHP">PHP</h3>
                        </div>
                    </div>


                    <div className="projects" id="NaebVerse" onClick={() => { location.href = "https://wonderix.ru/" }}>
                        <div className="flex">
                            <h1>Wonderix | <span className="Author">by TheFuZeeXD</span></h1>
                            <p>{LanguagePack.projects.wonderix_description}</p>
                        </div>
                        <div className="ContainerLang">
                            <h3 className="LangName" id="PHP">PHP</h3>
                        </div>
                    </div>
                </section>


                <section className="myProject">
                    <div className="projects" id="myArch" onClick={() => { location.href = "https://github.com/TheFuZeeXD/arch-hyprland-config" }}>
                        <div className="flex">
                            <h1>MyArch Config | <span className="Author">by TheFuZeeXD</span></h1>
                            <p>{LanguagePack.projects.archcfg_description}</p>

                        </div>
                        <div className="ContainerLang">
                            <h3 className="LangName" id="SHELL">Shell</h3>
                        </div>
                    </div>

                    <div className="projects" id="NaebVerse" onClick={() => { location.href = "https://github.com/TheFuZeeXD/Alixso" }}>
                        <div className="flex">
                            <h1>Aliucord-Themes | <span className="Author">by TheFuZeeXD</span></h1>
                            <p>{LanguagePack.projects.aliucord_description}</p>
                        </div>
                        <div className="ContainerLang">
                            <h3 className="LangName" id="JSON">Json</h3>
                        </div>
                    </div>

                    <div className="projects" id="NaebVerse" onClick={() => { location.href = "https://github.com/TheFuZeeXD/Alixso" }}>
                        <div className="flex">
                            <h1>Madrix bot | <span className="Author">by TheFuZeeXD</span></h1>
                            <p>{LanguagePack.projects.madrix_description}</p>
                        </div>
                        <div className="ContainerLang">
                            <h3 className="LangName" id="Py">Python</h3>
                        </div>
                    </div>

                </section>
            </div>

            <div className="ScrollContents">
                <h1 id="title-GitHub">{LanguagePack.github.title}</h1>
                <section className="myGitHub">
                    <img id="Git1" alt="GitHub" src="https://github-readme-stats.vercel.app/api?username=TheFuZeeXD&theme=tokyonight&hide_border=false&include_all_commits=false&count_private=false"></img>
                    <img id="Git2" alt="GitHub" src="https://nirzak-streak-stats.vercel.app/?user=TheFuZeeXD&theme=tokyonight&hide_border=false"></img>
                </section>
            </div>

        </div >
    )
}