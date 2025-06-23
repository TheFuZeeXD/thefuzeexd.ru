import "./code.css"
import "../../fonts.css"
import Logo from "/image/logo.jpg"
import openLink from "/image/svg/open-icon.svg"

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
            <h2>about me</h2> 
            <p>Привет! я Фузи и я веб-разработчик с опытом в создании современных веб-приложений. Специализируюсь на фронтенд-разработке (HTML, CSS, JavaScript) и бэкенд-технологиях (PHP, Python, Node.js), а также активно работаю с базами данных (MySQL). Владею популярными фреймворками и библиотеками, включая React.js, Vite и TypeScript, что позволяет разрабатывать быстрые, масштабируемые и удобные проекты.</p>
        </section>

             <h1 id="title-Project">Projects</h1>
        <section className="myProject">
            <div className="projects" id="BRH" onClick={() => {location.href="https://github.com/TheFuZeeXD/BR-Helper"}}>
                <div className="flex">
                <h1>BR-Helper | <span className="Author">by TheFuZeeXD</span></h1>
                <p>Black Russia Helper — это расширение для Google Chrome, разработанное как автоответчик на форуме forum.blackrussia.online/threads/. Оно обеспечивает быстрые и удобные шаблоны ответов для пользователей, активно работающих на форуме.</p>
                <h3 className="LangName" id="JS">JavaScript</h3>
                </div>
            </div>

             <div className="projects" id="NaebVerse" onClick={() => {location.href="https://naebalova.ru/"}}>
                <div className="flex">
                  <h1>NaebVerse | <span className="Author">by TheFuZeeXD</span></h1>
                <p>NaebVerse — это современный фотохостинг для быстрой загрузки и обмена изображениями. Сервис предлагает бесплатное хранение с поддержкой форматов JPG, PNG, GIF.  Идеален для блогеров, форумов и соцсетей. Быстрые серверы по всему миру.</p>
                <h3 className="LangName" id="PHP">PHP</h3>
                </div>
            </div>


             <div className="projects" id="NaebVerse" onClick={() => {location.href="https://naebalova.store/"}}>
                <div className="flex">
                  <h1>Naebalova.store | <span className="Author">by TheFuZeeXD</span></h1>
                <p>Naebalova.store — стильный онлайн-магазин модной одежды и аксессуаров. Уникальные вещи от проверенных брендов и молодых дизайнеров. Быстрая доставка, удобный поиск и выгодные цены. Обновляемая коллекция трендовых луков. Согласись бред какойто.</p>
                <h3 className="LangName" id="PHP">PHP</h3>
                </div>
            </div>

        </section>
        </>
    )
}
