let aboutme;
let projects;
let footer;
let github;
let PrContentView;
let titlepack;

if (navigator.language == "ru" || navigator.language == "ru_RU" || navigator.language == "ru_RU") {
    document.title = "TheFuZeeXD | Web Dev & Code Art | Веб разработчик без границ"
    aboutme = {
        title: "Обо мне",
        description: "Привет! Я Фузи — веб-разработчик с опытом в создании современных веб-приложений. Специализируюсь на фронтенд-разработке (HTML, CSS, JavaScript) и бэкенд-технологиях (PHP, Python, Node.js), а также активно работаю с базами данных (MySQL). Владею популярными фреймворками и библиотеками, включая React.js, Vite и TypeScript, что позволяет разрабатывать быстрые, масштабируемые и удобные проекты. Также разрабатываю Discord-ботов на discord.js, работаю с Nginx для развертывания и оптимизации серверов и использую Arch Linux в качестве основной ОС для полного контроля над рабочим окружением."
    };

    PrContentView = {
        title1: "Мой стек языков в разработке",
        title2: "Социальные сети",
        title3: "IDE Приложения"
    }

    projects = {
        title: "Мои проекты",
        brh_description: "Black Russia Helper — это расширение для Браузеров Chrome, Firefox, разработанное как автоответчик на форуме forum.blackrussia.online. Оно обеспечивает быстрые и удобные шаблоны ответов для пользователей.",
        naebverse_description: "В эпоху цифрового общения слова — это лишь половина дела. Настоящие эмоции передаются через яркие стикеры, живые эмодзи и выразительные смайлы. NaebVerse создан, чтобы твоё общение стало насыщеннее, веселее и эмоциональнее!",
        wonderix_description: "Wonderix — это современный фотохостинг для быстрой загрузки и обмена изображениями. Сервис предлагает бесплатное хранение с поддержкой форматов JPG, PNG, GIF.  Идеален для блогеров, форумов и соцсетей.",
        archcfg_description: "Моя конфигурация Hyprland для Arch Linux с минималистичным и аккуратным стилем. Репозиторий содержит готовые настройки для Hyprland, Waybar, Kitty, Hyprlock и Wlogout, а также автоматический скрипт установки который я нафарганил.",
        madrix_description: "Madrix Bot — это мощный, универсальный бот с огромным набором функций для удобной модерации, развлечений и полезных утилит. Идеально подходит для любых Discord-серверов: от небольших дружеских чатов до крупных игровых и комьюнити-серверов.",
        aliucord_description: "Aliucord Themes – коллекция пользовательских тем для Aliucord, кастомизируемого клиента Discord на Android. Здесь вы найдёте разнообразные стили: тёмные, светлые, цветные и минималистичные."
    };

    github = {
        title: "Github Статистика"
    };

    footer = {
        title: "2025 © TheFuZeeXD Все права защищены."
    };

    titlepack = {
        github: "Перейти в github.com/TheFuZeeXD",
        youtube: "Перейти в youtube.com/@TheFuZeeXD",
        pinterest: "Перейти в pinterest.com/@TheFuZeeXD",
        brh: "Открыть GitHub репозиторий BR-Helper",
        nv: "Открыть NaebVerse",
        wonderix: "Открыть Wonderix",
        archconf: "Открыть GitHub репозиторий Arch Config",
        aliucord: "Открыть GitHub репозиторий Aliucord-Themes",
        madrix: "Открыть раздел /madrix"
    }
} else {
    document.title = "TheFuZeeXD | Web Dev & Code Art | Web Developer Without Borders"
    aboutme = {
        title: "About me",
        description: "Hi! My name is FuZee, I am a web developer with experience in creating modern web applications. I specialize in frontend development (HTML, CSS, JavaScript) and backend technologies (PHP, Python), and also actively work with databases (MySQL). I am proficient in popular frameworks and libraries, including React.js, Vite and TypeScript, which allows me to develop fast, scalable and convenient projects. I also develop bots for Discord on discord.js, work with Nginx for server deployment and optimization, and use Arch Linux as my main OS for full control over the working environment."
    };

    PrContentView = {
        title1: "My language stack in development",
        title2: "Social media",
        title3: "IDE Applications"
    }

    projects = {
        title: "My projects",
        brh_description: "Black Russia Helper is an extension for Chrome, Firefox browsers, developed as an autoresponder on the forum forum.blackrussia.online. It provides fast and convenient response templates for users.",
        naebverse_description: "In the age of digital communication, words are only half the battle. Real emotions are conveyed through bright stickers, live emojis and expressive emoticons. NaebVerse is designed to make your communication richer, more fun and emotional!",
        wonderix_description: "Wonderix is a modern photo hosting for fast uploading and sharing of images. The service offers free storage with support for JPG, PNG, GIF formats. Ideal for bloggers, forums and social networks.",
        archcfg_description: "My Hyprland configuration for Arch Linux with a minimalistic and neat style. The repository contains ready-made settings for Hyprland, Waybar, Kitty, Hyprlock and Wlogout, as well as an automatic installation script that I slapped together.",
        madrix_description: "Madrix Bot is a powerful, versatile bot with a huge set of features for convenient moderation, entertainment and useful utilities. Ideal for any Discord servers: from small friendly chats to large gaming and community servers.",
        aliucord_description: "Aliucord Themes is a collection of custom themes for Aliucord, a customizable Discord client for Android. Here you will find a variety of styles: dark, light, colorful, and minimalistic."
    };

    github = {
        title: "Github Stats"
    };

    footer = {
        title: "2025 © TheFuZeeXD All rights reserved."
    };

    titlepack = {
        github: "Go to github.com/TheFuZeeXD",
        youtube: "Go to youtube.com/@TheFuZeeXD",
        pinterest: "Go to pinterest.com/@TheFuZeeXD",
        brh: "Open GitHub repository BR-Helper",
        nv: "Open NaebVerse",
        wonderix: "Open Wonderix",
        aliucord: "Open GitHub repository Aliucord-Themes",
        madrix: "Open section /madrix"
    }
}

const LanguagePack: object = {
    aboutme,
    projects,
    footer,
    github,
    PrContentView,
    titlepack
}

export default LanguagePack;