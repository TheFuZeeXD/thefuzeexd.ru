let aboutme;
let projects;
let footer;

if (navigator.language == "ru" || navigator.language == "ru_RU") {
    document.title = "TheFuZeeXD | Web Dev & Code Art | Веб разработчик без границ"
    aboutme = {
        title: "Обо мне",
        description: "Привет! я Фузи и я веб-разработчик с опытом в создании современных веб-приложений. Специализируюсь на фронтенд-разработке (HTML, CSS, JavaScript) и бэкенд-технологиях (PHP, Python, Node.js), а также активно работаю с базами данных (MySQL). Владею популярными фреймворками и библиотеками, включая React.js, Vite и TypeScript, что позволяет разрабатывать быстрые, масштабируемые и удобные проекты."
    };

    projects = {
        title: "Мои проекты",
        brh_description: "Black Russia Helper — это расширение для Google Chrome, разработанное как автоответчик на форуме forum.blackrussia.online/threads/. Оно обеспечивает быстрые и удобные шаблоны ответов для пользователей, активно работающих на форуме.",
        naebverse_description: "NaebVerse — это современный фотохостинг для быстрой загрузки и обмена изображениями. Сервис предлагает бесплатное хранение с поддержкой форматов JPG, PNG, GIF.  Идеален для блогеров, форумов и соцсетей. Быстрые серверы по всему миру.",
        naebalova_store_description: "Naebalova.store — стильный онлайн-магазин модной одежды и аксессуаров. Уникальные вещи от проверенных брендов и молодых дизайнеров. Быстрая доставка, удобный поиск и выгодные цены. Обновляемая коллекция трендовых луков. Согласись бред какойто."
    };

    footer = {
        title: "2025 © TheFuZeeXD Все права защищены."
    }
} else {
    document.title = "TheFuZeeXD | Web Dev & Code Art | Web Developer Without Borders"
    aboutme = {
        title: "About me",
        description: "Hi! I'm Fuzi and I'm a web developer with experience in creating modern web applications. I specialize in frontend development (HTML, CSS, JavaScript) and backend technologies (PHP, Python, Node.js), and also actively work with databases (MySQL). I own popular frameworks and libraries, including React.js, Vite and TypeScript, which allows me to develop fast, scalable and convenient projects."
    };

    projects = {
        title: "My projects",
        brh_description: "Black Russia Helper is a Google Chrome extension designed as an autoresponder for the forum forum.blackrussia.online/threads/. It provides quick and convenient response templates for users actively working on the forum.",
        naebverse_description: "NaebVerse is a modern photo hosting for fast uploading and sharing of images. The service offers free storage with support for JPG, PNG, GIF formats. Ideal for bloggers, forums and social networks. Fast servers all over the world.",
        naebalova_store_description: "Naebalova.store is a stylish online store of fashionable clothes and accessories. Unique items from trusted brands and young designers. Fast delivery, convenient search and great prices. An updated collection of trendy looks. Agree, some kind of nonsense."
    };

    footer = {
        title: "2025 © TheFuZeeXD All rights reserved."
    }
}

const LanguagePack: object = {
    aboutme,
    projects,
    footer
}

export default LanguagePack;
