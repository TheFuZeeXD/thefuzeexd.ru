document.addEventListener("DOMContentLoaded", function () {
if (localStorage.getItem("Bage") == "1") {
    toggleBackground();
}
if (localStorage.getItem("Language") == null) {
  localStorage.setItem("Language", "EN");
}

if (localStorage.getItem("Language") == "EN") {
    EnglishLang();
}
if (localStorage.getItem("Language") == "RU") {
    RussianLang();
}});

function RussianLang() {
  if (document.getElementById("NavigationLanguageHome") != null) {
    document.getElementById("NavigationLanguageHome").innerHTML = "Главное";
  }
  if (document.getElementById("NavigationLanguageNews") != null) {
    document.getElementById("NavigationLanguageNews").innerHTML = "Новости";
}
  if (document.getElementById("NavigationLanguagePortfolio") != null) {
    document.getElementById("NavigationLanguagePortfolio").innerHTML = "Учебник";
  }
  if (document.getElementById("NavigationLanguageAbout") != null) {
  document.getElementById("NavigationLanguageAbout").innerHTML = "Обо мне";
  }
  if (document.getElementById("DescriptionLanguage") != null) {
    document.getElementById("DescriptionLanguage").innerHTML = "TheFuZeeXD — это тот, кто всегда находится в поиске новых идей, творческих решений и уникального контента. Он выделяется своим нестандартным мышлением, страстью к технологиям и играм, а также желанием поделиться всем этим с миром.";
  }
  if (document.getElementById("SectionProjectLanguage") != null) {
    document.getElementById("SectionProjectLanguage").innerHTML = "Мои проекты";
  }
  if (document.getElementById("DescriptionYoutubeLanguage") != null) {
    document.getElementById("DescriptionYoutubeLanguage").innerHTML = "Канал TheFuZeeXD на YouTube специализируется на создании музыкальных компиляций и редактированных аудио, включая такие жанры, как phonk и бразильский фанк.";
  }
  if (document.getElementById("DescriptionDiscordLanguage") != null) {
    document.getElementById("DescriptionDiscordLanguage").innerHTML = "Discord Server TheFuZeeXD - Здесь собираются все поклонники phonk, бразильского фанка и других топовых жанров, представленных на YouTube-канале TheFuZeeXD.";
  }
  if (document.getElementById("SectionLinksLanguage") != null) {
    document.getElementById("SectionLinksLanguage").innerHTML = "Мои Социальные Сети";
  }
  if (document.getElementById("SectionPartnerLanguage") != null) {
    document.getElementById("SectionPartnerLanguage").innerHTML = "Партнер";  
  }
  if (document.getElementById("TitleAlwoLanguage") != null) {
    document.getElementById("TitleAlwoLanguage").innerHTML = "Discord Сервер - ALWO Hub";  
  }
  if (document.getElementById("DescriptionAlwoLanguage") != null) {
    document.getElementById("DescriptionAlwoLanguage").innerHTML = "ALWO Hub это сообщество для любителей аниме, Dota 2, CS и весёлого времяпрепровождения. Здесь можно общаться, играть, обсуждать любимые темы и просто хорошо проводить время в уютной атмосфере. Индивидуальность каждого участника ценится, и каждый найдёт здесь своё место.";  
  }
  if (document.getElementById("LinksALWOLanguage") != null) {
    document.getElementById("LinksALWOLanguage").innerHTML = "Перейти в Discord"; 
  } 
  if (document.getElementById("TitleSqq1") != null) {
    document.getElementById("TitleSqq1").innerHTML = "Место, где рождаются идеи и проекты";
  }
  if (document.getElementById("TitleSyt1") != null) {
    document.getElementById("TitleSyt1").innerHTML = "TheFuZeeXD на YouTube";
  }
  if (document.getElementById("DescSyt1") != null) {
    document.getElementById("DescSyt1").innerHTML = "Видео: Hensonn - Sahara (Slowed & Reverb) II FuZee";
  }
  if (document.getElementById("TitleSdd1") != null) {
    document.getElementById("TitleSdd1").innerHTML = "ALL WORLD на Discord";
  }
  if (document.getElementById("TitleLastNews") != null) {
    document.getElementById("TitleLastNews").innerHTML = "Последние Новости";
  }
  if (document.getElementById("NewsDesc1") != null) {
    document.getElementById("NewsDesc1").innerHTML = "Не найдено";
  }
  if (document.getElementById("NewsTitle1") != null) {
    document.getElementById("NewsTitle1").innerHTML = "Список новостей TheFuZeeXD";
  }
  if (document.getElementById("EmailLanguage") != null) {
    document.getElementById("EmailLanguage").innerHTML = "Контакт: fuzeexd@naebalova.ru";
  }
  if (document.getElementById("tg") != null) {
    document.getElementById("tg").innerHTML = "Телеграм: @funzixd";
  }
  if (document.getElementById("descriptionAbout") != null) {
    document.getElementById("descriptionAbout").innerHTML = "Сайт thefuzeexd.ru был создан для объединения креативности, инноваций и развлечений. Он служит платформой, где вы можете найти увлекательный контент, уникальные проекты и свежие идеи. Создатель сайта, известный как TheFuZeeXD, увлечен технологиями и играми и стремится поделиться своими нетрадиционными мыслями и идеями с миром.";
  }
    localStorage.setItem("Language", "RU");
};

function EnglishLang() {

  if (document.getElementById("NavigationLanguageHome") != null) {
    document.getElementById("NavigationLanguageHome").innerHTML = "Home";
  }
  if (document.getElementById("NavigationLanguageNews") != null) {
    document.getElementById("NavigationLanguageNews").innerHTML = "News";
}
  if (document.getElementById("NavigationLanguagePortfolio") != null) {
    document.getElementById("NavigationLanguagePortfolio").innerHTML = "Education";
  }
  if (document.getElementById("NavigationLanguageAbout") != null) {
    document.getElementById("NavigationLanguageAbout").innerHTML = "About";
  }
  if (document.getElementById("DescriptionLanguage") != null) {
    document.getElementById("DescriptionLanguage").innerHTML = "TheFuZeeXD is someone who is always on the lookout for new ideas, creative solutions, and unique content. He stands out for his unconventional thinking, passion for technology and gaming, and his desire to share it all with the world.";
  }
  if (document.getElementById("SectionProjectLanguage") != null) {
    document.getElementById("SectionProjectLanguage").innerHTML = "My project";
  }
  if (document.getElementById("DescriptionYoutubeLanguage") != null) {
    document.getElementById("DescriptionYoutubeLanguage").innerHTML = "The TheFuZeeXD YouTube channel - specializes in creating music compilations and edited audio, featuring genres like phonk and Brazilian funk. And more music.";
  }
  if (document.getElementById("DescriptionDiscordLanguage") != null) {
    document.getElementById("DescriptionDiscordLanguage").innerHTML = "Discord Server TheFuZeeXD - This is the place for all fans of phonk, Brazilian funk, and other top music genres featured on the TheFuZeeXD YouTube channel.";
  }
  if (document.getElementById("SectionLinksLanguage") != null) {
    document.getElementById("SectionLinksLanguage").innerHTML = "My Social Network"; 
  }
  if (document.getElementById("SectionPartnerLanguage") != null) {
    document.getElementById("SectionPartnerLanguage").innerHTML = "Partner";  
  }
  if (document.getElementById("TitleAlwoLanguage") != null) {
    document.getElementById("TitleAlwoLanguage").innerHTML = "Discord Server - ALWO Hub"; 
  }
  if (document.getElementById("DescriptionAlwoLanguage") != null) {
    document.getElementById("DescriptionAlwoLanguage").innerHTML = "ALWO Hub is a community for fans of anime, Dota 2, CS, and fun entertainment. Here, you can chat, play, discuss your favorite topics, and simply have a great time in a cozy atmosphere. Individuality is valued, and everyone can find their place here.";  
  }
  if (document.getElementById("LinksALWOLanguage") != null) {
    document.getElementById("LinksALWOLanguage").innerHTML = "Go to Discord"; 
  } 
  if (document.getElementById("TitleSqq1") != null) {
    document.getElementById("TitleSqq1").innerHTML = "Place where ideas and projects are born";
  }
  if (document.getElementById("TitleSyt1") != null) {
    document.getElementById("TitleSyt1").innerHTML = "TheFuZeeXD on YouTube";
  }
  if (document.getElementById("DescSyt1") != null) {
    document.getElementById("DescSyt1").innerHTML = "Video: Hensonn - Sahara (Slowed & Reverb) II FuZee";
  }
  if (document.getElementById("TitleSdd1") != null) {
    document.getElementById("TitleSdd1").innerHTML = "ALL WORLD on Discord";
  }
  if (document.getElementById("TitleLastNews") != null) {
    document.getElementById("TitleLastNews").innerHTML = "Last News";
  }
  if (document.getElementById("NewsDesc1") != null) {
    document.getElementById("NewsDesc1").innerHTML = "Not found";
  }
  if (document.getElementById("NewsTitle1") != null) {
    document.getElementById("NewsTitle1").innerHTML = "News List TheFuZeeXD";
  }
  if (document.getElementById("EmailLanguage") != null) {
    document.getElementById("EmailLanguage").innerHTML = "Contact: fuzeexd@naebalova.ru";
  }
  if (document.getElementById("tg") != null) {
    document.getElementById("tg").innerHTML = "Telegram: @funzixd";
  }
  if (document.getElementById("descriptionAbout") != null) {
    document.getElementById("descriptionAbout").innerHTML = "The website thefuzeexd.ru was created to bring together creativity, innovation, and entertainment. It serves as a platform where you can find engaging content, unique projects, and fresh ideas. The site's creator, known as TheFuZeeXD, is passionate about technology and gaming and strives to share his unconventional thoughts and ideas with the world.";
  }

    localStorage.setItem("Language", "EN");
};



document.addEventListener("DOMContentLoaded", function () {
    const hiddenElements = document.querySelectorAll(".hidden");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.9; // Порог появления элемента

        hiddenElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Проверить сразу после загрузки
});


function toggleMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}

function toggleBackground() {
    let body = document.querySelector("body");
    body.classList.toggle("HightBody");
    if (body.classList.value == "HightBody") {
        localStorage.setItem("Bage", "0");
    } else {
        localStorage.setItem("Bage", "1");
    }
 //  if (body.classList)
}

let process = 0;

function index() {
    const screen = document.querySelector(".Screen");
    const header = document.querySelector("header");
    if (process == 0) {
      process = 1;
    screen.classList.add("fadeoutbg");

    setTimeout(() => {
        screen.remove();
           const newscreenindex = document.createElement("div");
           newscreenindex.classList.add("Screen");
           newscreenindex.innerHTML = `<div class="AnimationDivindex">
           <section class="information">
        <img class="item" src="/Images/avatar.jpg" >
        <h1 class="item" >fuzeexd</h1>
        <p class="item"  id="DescriptionLanguage">TheFuZeeXD is someone who is always on the lookout for new ideas, creative solutions, and unique content. He stands out for his unconventional thinking, passion for technology and gaming, and his desire to share it all with the world.</p>
       </section>
  
        <section class="links">
          <h1 class="item"  id="SectionLinksLanguage">My Social Network</h1>
          <a class="item"  href="https://discord.gg/nSHPtbZTrU"  id="DiscordLink"><img src="/Images/Discordicon2.png" id="ImageDiscord" title="Discord"></a>
          <a  class="item"  href="https://github.com/TheFuZeeXD"  id="GitHubLink"><img src="/Images/GitHubicon2.png" id="ImageGitHub" title="GitHub"></a>
          <a class="item"  href="https://www.youtube.com/@TheFuZeeXD"  id="WebLink"><img src="/Images/Webicon2.png" id="ImageWeb" title="thefuzeexd.ru"></a>
          <a  class="item" href="https://youtube.com/@thefuzeexd"  id="YoutubeLink"><img src="/Images/Youtubeicon2.png" id="ImageYoutube" title="YouTube"></a>
        </section>
  
      <section id="project"> 
  
        <h1 class="item"   id="SectionProjectLanguage">My project</h1>
       <div class="item"   id="DivYoutube">
        <div class="item"  id="Youtube">
          <h1 class="item"   id="TextInYouTube">YouTube<h1>
            <p class="item"  id="DescriptionYoutubeLanguage">The TheFuZeeXD YouTube channel - specializes in creating music compilations and edited audio, featuring genres like phonk and Brazilian funk. And more music.</p>
            <a class="item"  href="https://www.youtube.com/@TheFuZeeXD">YouTube Channel</a>
          </div>
          </div>
  
          <div class="item"  id="DivDiscord">
          <div class="item"  id="Discord">
            <h1 class="item"  id="TextInDiscord">Discord<h1>
              <p class="item"  id="DescriptionDiscordLanguage">Discord Server TheFuZeeXD - This is the place for all fans of phonk, Brazilian funk, and other top music genres featured on the TheFuZeeXD YouTube channel.</p>
              <a class="item"  href="https://discord.gg/nSHPtbZTrU">Discord Server</a>
            </div>
            </div>
  
      </section>
  
      <section class="Partner">
        
        <h1 class="item"  id="SectionPartnerLanguage">Partner</h1>
        <div  id="DivDivedALWO">
        <div class="ALWOHub">
        <img class="item"  src="/Images/alwohubicon.jpg" >
          <h1 class="item"   id="TitleAlwoLanguage">Discord Server - ALWO Hub</h1>
         <p class="item"  id="DescriptionAlwoLanguage">ALWO Hub is a community for fans of anime, Dota 2, CS, and fun entertainment. Here, you can chat, play, discuss your favorite topics, and simply have a great time in a cozy atmosphere. Individuality is valued, and everyone can find their place here.</p>
         <div  id="DivLinkAlwo"> 
         <a class="item"  href="https://discord.gg/sXUP7q92x8" id="LinksALWOLanguage">Go to Discord</a>
         </div>
        </div>
        </div>
        </section>
  
        <footer class="item">
          <p id="RU">© 2025 - TheFuZeeXD.</p>
          <a href="weather.thefuzeexd.html" class="FindWeather" target="_blank" title="Weather by FZ">FindWeather</a>
          <button onclick="RussianLang()" class="ButtonChangeRULanguage">Russian</button>
          <button onclick="EnglishLang()" class="ButtonChangeENLanguage">English</button>
          <button onclick="toggleBackground()" class="ButtonChangeENLanguage">Hight/Light</button>
        </footer>
        </div>`;
        header.after(newscreenindex);

        if (localStorage.getItem("Language") == "RU") {
          RussianLang();
        };
        if (localStorage.getItem("Language") == "EN") {
          EnglishLang();
        };
        process = 0;
}, 1500)}
}


function HomePage() {
    const screen = document.querySelector(".Screen");
    const header = document.querySelector("header");
    if (process == 0) {
      process = 1;
  screen.classList.add("fadeoutbg");

    setTimeout(() => {
        screen.remove();
           const newscreen = document.createElement("div");
        newscreen.classList.add("Screen");
        newscreen.innerHTML = `  
       <section class="Sectionqq1">
    <h1 class="item" id="TitleSqq1">Place where ideas and projects are born</h1>
       </section>

<section class="SectionYoutube">
<iframe class="item" width="760" height="415" src="https://www.youtube.com/embed/8L2FCF74KUs?si=hwiYdyq4-L2PnBGZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<h1 class="item" id="TitleSyt1">TheFuZeeXD on YouTube</h1>
<p class="item" id="DescSyt1">Video: Hensonn - Sahara (Slowed & Reverb) II FuZee</p>
</section>

<section class="SectionDiscord">
<iframe class="item" src="https://discord.com/widget?id=871697364958707722&theme=dark" width="850" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
<h1 class="item" id="TitleSdd1">ALL WORLD on Discord</h1>
</section>

<section class="LastNews">
<h1 class="item" id="TitleLastNews">Last News</h1>
<p class="item" id="NewsDesc1">Not found</p>
</section>

                <footer class="item">
          <p id="RU">© 2025 - TheFuZeeXD.</p>
          <a href="weather.thefuzeexd.html" class="FindWeather" target="_blank" title="Weather by FZ">FindWeather</a>
          <button onclick="RussianLang()" class="ButtonChangeRULanguage">Russian</button>
          <button onclick="EnglishLang()" class="ButtonChangeENLanguage">English</button>
          <button onclick="toggleBackground()" class="ButtonChangeENLanguage">Hight/Light</button>
        </footer>
        `;
        header.after(newscreen);
        if (localStorage.getItem("Language") == "RU") {
          RussianLang();
        };
        if (localStorage.getItem("Language") == "EN") {
          EnglishLang();
        };
        process = 0;
}, 1500)}
}

function AboutPage() {
  const screen = document.querySelector(".Screen");
  const header = document.querySelector("header");
  if (process == 0) {
    process = 1;
screen.classList.add("fadeoutbg");

  setTimeout(() => {
      screen.remove();
         const newscreenabout = document.createElement("div");
      newscreenabout.classList.add("Screen");
      newscreenabout.innerHTML = `<div class="AnimationDivindex">
      <section class="AboutInfo">
        <img src="/Images/avatar.jpg">
           <h1  id="EmailLanguage">Contact: fuzeexd@naebalova.ru</h1>
            <h2  id="tg">Telegram: @funzixd</h2>
           <p  id="descriptionAbout">The website thefuzeexd.ru was created to bring together creativity, innovation, and entertainment. It serves as a platform where you can find engaging content, unique projects, and fresh ideas. The site's creator, known as TheFuZeeXD, is passionate about technology and gaming and strives to share his unconventional thoughts and ideas with the world.</p>
          </section>


          <footer class="item">
          <p id="RU">© 2025 - TheFuZeeXD.</p>
          <a href="weather.thefuzeexd.html" class="FindWeather" target="_blank" title="Weather by FZ">FindWeather</a>
          <button onclick="RussianLang()" class="ButtonChangeRULanguage">Russian</button>
          <button onclick="EnglishLang()" class="ButtonChangeENLanguage">English</button>
          <button onclick="toggleBackground()" class="ButtonChangeENLanguage">Hight/Light</button>
        </footer>

      </div>
      
      `;
      header.after(newscreenabout);
      if (localStorage.getItem("Language") == "RU") {
        RussianLang();
      };
      if (localStorage.getItem("Language") == "EN") {
        EnglishLang();
      };
      process = 0;
}, 1500)}
}


function NewsPage() {
  const screen = document.querySelector(".Screen");
  const header = document.querySelector("header");
  if (process == 0) {
    process = 1;
screen.classList.add("fadeoutbg");

  setTimeout(() => {
      screen.remove();
         const newscreennews = document.createElement("div");
         newscreennews.classList.add("Screen");
      newscreennews.innerHTML = `<div class="AnimationDivindex">
      <section class="NewsListFZ">
      <h1 class="item" id="NewsTitle1">News List TheFuZeeXD</h1>
      <p class="item" id="NewsDesc1">Not found</p>
      </section>


          <footer class="item">
          <p id="RU">© 2025 - TheFuZeeXD.</p>
          <a href="weather.thefuzeexd.html" class="FindWeather" target="_blank" title="Weather by FZ">FindWeather</a>
          <button onclick="RussianLang()" class="ButtonChangeRULanguage">Russian</button>
          <button onclick="EnglishLang()" class="ButtonChangeENLanguage">English</button>
          <button onclick="toggleBackground()" class="ButtonChangeENLanguage">Hight/Light</button>
        </footer>

      </div>
      
      `;
      header.after(newscreennews);
      if (localStorage.getItem("Language") == "RU") {
        RussianLang();
      };
      if (localStorage.getItem("Language") == "EN") {
        EnglishLang();
      };
      process = 0;
}, 1500)}
}




function initScrollAppear(selector) {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
          }
      });
  }, { threshold: 0.1 });

  function observeNewElements() {
      document.querySelectorAll(selector).forEach((item) => {
          if (!item.classList.contains("observed")) {
              observer.observe(item);
              item.classList.add("observed");
          }
      });
  }

  observeNewElements();

  const mutationObserver = new MutationObserver(observeNewElements);
  mutationObserver.observe(document.body, { childList: true, subtree: true });
}

// Инициализация для всех элементов с классом .item
initScrollAppear(".item");