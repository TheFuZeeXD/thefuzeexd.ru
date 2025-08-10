import "./code.css"
import "../../fonts.css"
import Logo from "/image/logo.jpg"
import LanguagePack from "../../assets/lang"
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



                <section className="aboutMe">
                    <h2>{LanguagePack.aboutme.title}</h2>
                    <p>{LanguagePack.aboutme.description}</p>
                </section>


                <section className="aboutMe" id="PrContentView">
                    <h2>{LanguagePack.PrContentView.title1}</h2>
                    <div className="containerLanguagesPr" id="firstCLPr">
                        <span>PHP</span>
                        <span>JavaScript</span>
                        <span>React.js</span>
                        <span>HTML5</span>
                        <span>TypeScript</span>
                        <span>CSS</span>
                        <span>SQL</span>
                        <span>Python</span>
                    </div>
                    <h2 id="header-title_aboutME-2">{LanguagePack.PrContentView.title2}</h2>
                    <div className="containerLanguagesPr" id="lastCLPr">
                        <span onClick={() => { location.href = "https://github.com/TheFuZeeXD" }}>GitHub</span>
                        <span onClick={() => { location.href = "https://www.youtube.com/@TheFuZeeXD" }}>YouTube</span>
                        <span onClick={() => { location.href = "https://ru.pinterest.com/TheFuZeeXD/" }}>Pinterest</span>
                    </div>
                    <h2 id="header-title_aboutME-3">{LanguagePack.PrContentView.title3}</h2>
                    <div className="containerIDEPr">
                        <span>VSCode</span>
                        <span>Vim</span>
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


                    <div className="projects" id="NaebVerse" onClick={() => { location.href = "https://wonderix.ru/" }}>
                        <div className="flex">
                            <h1>Wonderix | <span className="Author">by TheFuZeeXD</span></h1>
                            <p>{LanguagePack.projects.wonderix_description}</p>
                            <h3 className="LangName" id="PHP">PHP</h3>
                        </div>
                    </div>
                </section>


                <section className="myProject">
                    <div className="projects" id="myArch" onClick={() => { location.href = "https://github.com/TheFuZeeXD/arch-hyprland-config" }}>
                        <div className="flex">
                            <h1>MyArch Config | <span className="Author">by TheFuZeeXD</span></h1>
                            <p>{LanguagePack.projects.archcfg_description}</p>
                            <h3 className="LangName" id="SHELL">Shell</h3>
                        </div>
                    </div>


                    <div className="projects" id="NaebVerse" onClick={() => { location.href = "https://github.com/TheFuZeeXD/Alixso" }}>
                        <div className="flex">
                            <h1>Alixso bot | <span className="Author">by TheFuZeeXD</span></h1>
                            <p>{LanguagePack.projects.alixso_description}</p>
                            <h3 className="LangName" id="JS">JavaScript</h3>
                        </div>
                    </div>

                </section>
            </div>

            <div className="ScrollContents">
                <h1 id="title-GitHub">{LanguagePack.github.title}</h1>
                <section className="myGitHub">
                    <img id="Git1" src="https://github-readme-stats.vercel.app/api?username=TheFuZeeXD&theme=tokyonight&hide_border=false&include_all_commits=false&count_private=false"></img>
                    <img id="Git2" src="https://nirzak-streak-stats.vercel.app/?user=TheFuZeeXD&theme=tokyonight&hide_border=false"></img>
                </section>
            </div>

        </div >
    )
}
