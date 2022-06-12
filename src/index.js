// cursor
let curs = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    curs.style.left = x - 25 + "px";
    curs.style.top = y - 25 + "px";
});

let images = document.querySelectorAll(".about-title");
let servicesImages = [
    "url('dist/kai.png')",
];

let pointers = document.querySelectorAll(".pointer-item");
let servicesPointer = "url('dist/click.svg')"

images.forEach((image, i) => {
    image.addEventListener("mouseover", (e) => {
        curs.classList.add("cursor-image-show");
        curs.style.backgroundImage = servicesImages[i];
    });
    image.addEventListener("mouseleave", (e) => {
        curs.classList.remove("cursor-image-show");
        curs.style.backgroundImage = "none";
    });
});

pointers.forEach((pointer, i) => {
    pointer.addEventListener("mouseover", (e) => {
        curs.classList.add("cursor-pointer-show");
        curs.style.backgroundImage = servicesPointer;
    });
    pointer.addEventListener("mouseleave", (e) => {
        curs.classList.remove("cursor-pointer-show");
        curs.style.backgroundImage = "none";
    });
});
// work
const newline = "\r\n";
let works = [
    {
        class: 'work-box--0',
        title: '版塊六週年線上展',
        intro: `自從疫情開始對線上展需求增加，版塊意圖跳脫以往傳統對線上展的想像，將網站與線上展做更好的結合與觀展體驗。在海上有許多的島嶼，所有的島嶼都是版塊的一部份，利用游標動態的座標系統，可以探索整個版塊的展覽世界。`+ newline +`註：以電腦觀看獲得最佳體驗。`,
        credit: `網頁設計｜Kai Ting Hsu / Roizi Lu` + newline + `程式開發｜Kai Ting Hsu / Roizi Lu`,
        date:'2021/08/30',
        href:'https://blockstudio.tw/display/2021intern-web/'
    },
    {
        class: 'work-box--1',
        title: '斤一斤',
        intro: '「一台斤食材的量」是大多數現代人在逛市場時會遇到的最大問題。鑑於這點，期望藉由沈浸式行動網站——「斤一斤」的建置，幫助使用者快速了解「一台斤的食材」可轉換成的料理份數，並以3D建模呈現美味的食物與料理造型。'+ newline +`註：以手機觀看獲得最佳體驗。`,
        credit: `網頁設計 / 3D建模｜ `+ newline + `Kai Ting Hsu / YUN EN TSAI`+ newline + `JUN NI HAO / YU XIANG CHEN` + newline + `程式開發｜Kai Ting Hsu`,
        date:'2021/05/08',
        href:'http://onetaiwancatty.com/'
    },
    {
        class: 'work-box--2',
        title: 'Kai Ting Hsu Portfolio 2021',
        intro: `個人作品網站，結合插畫呈現個人特色，使面試者能快速認識我，並使用小遊戲增加互動。作品以卡牌翻頁呈現，翻頁後為作品詳細資訊，點擊後能觀看更多內容。`+ newline +`註：以電腦觀看獲得最佳體驗。`,
        credit: `網頁設計｜Kai Ting Hsu`+ newline + `程式開發｜Kai Ting Hsu`,
        date:'2021/06/10',
        href:'https://hkt725.github.io/'
    },
    {
        class: 'work-box--3',
        title: 'HPV 8成與你有關',
        intro: '將衛教數據圖表轉換為一頁式網站，結合插畫動態呈現資訊。',
        credit: `網頁設計｜Tenten / Kai Ting Hsu `+ newline + `程式開發｜Tenten`,
        date:'2021/11/10',
        href:'https://www.hpvcancerbye.com/'
    },
    {
        class: 'work-box--4',
        title: 'Cafe Nomad',
        intro: '現有咖啡廳搜尋網站redesign，將搜尋功能放在第一屏，使用者進入後能最快速的搜尋想去的咖啡廳，並以全屏滾動網頁使各頁的資訊功能更加簡潔明瞭。',
        credit: `網頁主視覺｜Kai Ting Hsu`+ newline + `網頁設計｜Kai Ting Hsu / Tenten`,
        date:'2021/06/01',
        href:'https://hkt725.github.io/cafe/cafenomad.html'
    },
    {
        class: 'work-box--5',
        title: 'C肝衛教網站',
        intro: '將衛教數據圖表轉換為一頁式網站，以日記插畫形式呈現C肝患者心路歷程及衛教資訊。',
        credit: `網頁設計｜Kai Ting Hsu`+ newline + `程式開發｜Kai Ting Hsu`,
        date:'2021/12/25',
        href:'https://www.figma.com/proto/FSJFTAKGSrb6ClaDBDUFWc/c%E8%82%9D?page-id=0%3A1&node-id=1%3A17&viewport=697%2C920%2C0.09&scaling=min-zoom&starting-point-node-id=1%3A17&show-proto-sidebar=1'
    },
    {
        class: 'work-box--6',
        title: '台北府城',
        intro: '我出生於古都萬華，在歷史文化的薰陶下，沈迷於生活周遭的古蹟，他們與城市的發展並存著，卻逐漸被世人遺忘，藉由這款趣味伴手禮，將台北府城的美推廣出去。',
        credit: `設計｜Kai Ting Hsu`,
        date:'2020/10/25',
        href:'https://www.behance.net/gallery/118921087/-Tai-pak-Hu-siann'
    },
    {
        class: 'work-box--7',
        title: '機場指標改造',
        intro: '',
        credit: `設計｜Kai Ting Hsu`,
        date:'2020/05/25',
        href:'https://www.behance.net/gallery/120483319/_'
    },
    {
        class: 'work-box--8',
        title: '標準字設計',
        intro: '',
        credit: `設計｜Kai Ting Hsu`,
        date:'2020/11/25',
        href:'https://www.behance.net/gallery/119808207/Typography_'
    },
    {
        class: 'work-box--9',
        title: '清境農場品牌再造',
        intro: '原識別系統在長年發展下，延伸出無統一規範定調識別。近期許多傳統產業轉型皆以年輕、親子族群為主，結合清境農場特色並以童趣、簡約風格發展。',
        credit: `設計｜Kai Ting Hsu`,
        date:'2020/09/25',
        href:'https://www.behance.net/gallery/120475525/_'
    },
    {
        class: 'work-box--10',
        title: `IT'S MY VAGINA!`,
        intro: '',
        credit: `設計｜Kai Ting Hsu`,
        date:'2022/06/10',
        href:'https://www.behance.net/gallery/145855909/ITS-MY-VAGINA'
    },
    {
        class: 'work-box--11',
        title: `Sandwich,Soda,Curry!`,
        intro: '',
        credit: `插畫｜Kai Ting Hsu`,
        date:'2020/06/10',
        href:'https://www.behance.net/gallery/120523509/SandwichSodaCurry'
    },
]
$(document).ready(function () {
    // contact hover
    $('.box-contact').hover(function(){
        $(this).parents(".matter").parents('.contacts').siblings('.contact-vector').find('.vector').toggleClass("active");
    });
    document.querySelectorAll(".nav button").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            gsap.to(window, { duration: 1.5, scrollTo: { y: "#section" + (index + 1), offsetY: 100 } });
            $(btn).addClass("active");
            $(btn).siblings().removeClass("active");

        });
    });
    works.map(function (work, index, array) {
        $("body").on("click", function (event) {
            if ($(event.target).hasClass(work.class)) {
                console.log(work.class)
                document.querySelector("#title").textContent = work.title;
                document.querySelector("#intro").textContent = work.intro;
                document.querySelector("#credit").textContent = work.credit;
                document.querySelector("#date").textContent = work.date;
                document.querySelector("#href").href = work.href;
            }
        });
    });
});

// Matter.js
let Engine = null
let World = null
let engine = null
let world = null

function initMatter (matterHolder) {
    const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            World = Matter.World,
            MouseConstraint = Matter.MouseConstraint,
            Mouse = Matter.Mouse,
            Bounds = Matter.Bounds,
            Composite = Matter.Composite
    
    const engine = Engine.create()
    engine.enableSleeping = true
    world = engine.world
    
    const heightAdjust = 1
    const width = matterHolder.clientWidth
    const height = matterHolder.clientHeight * heightAdjust
    const scale = window.devicePixelRatio
    
    const render = Render.create({
        element: matterHolder,
        engine,
        options: {
        wireframes: true,
        showAngleIndicator: false,
        background: 'transparent',
        showSleeping: false,
        width,
        height
        }
    })
    Matter.Render.setPixelRatio(render, scale)
    
    const runner = Runner.create();
    Runner.run(runner, engine);
    const placement = {x: 1, y: 1};
    const spacing = {x: 200, y: 200};
    
    createBoundingBox();
    addMouse();

    $("body").on("click", function (event) {
        if ($(event.target).hasClass('about-item')) {
            addAbouts();
        }
    });

    ScrollTrigger.create({
        trigger: '.works',
        duration: {min: 0.2, max: 3}, 
        ease: "power0.inOut",
        onEnter: addWebs,
        once:true,
        start: "50% 100%",
    });
    ScrollTrigger.create({
        trigger: '.contacts',
        duration: {min: 0.2, max: 3}, 
        ease: "power0.inOut",
        onEnter: addContacts,
        once:true,
        start: "50% 100%",
    });
      
    const gravity = 0.5
    engine.world.gravity.y = gravity
    Matter.Runner.run(engine)
    Render.run(render)
    window.requestAnimationFrame(mapHTML);  
    
    function createBoundingBox() {
        World.add(engine.world, [
        Bodies.rectangle(width / 2, height + 250, width, 500, {isStatic: true, label: '_noMap'}),
        Bodies.rectangle(width / 2, -50, width, 100, {isStatic: true, label: '_noMap'}),
        Bodies.rectangle(-50, height / 2, 100, height, {isStatic: true, label: '_noMap'}),
        Bodies.rectangle(width + 50, height / 2, 100, height, {isStatic: true, label: '_noMap'}),
        ]);   
    }
    function addAbouts () {
        matterHolder.querySelectorAll('[data-about]').forEach((object) => {
            addAbout(object)
        })
    }
    function addWebs () {
        matterHolder.querySelectorAll('[data-item]').forEach((object) => {
            addWeb(object)
        })
    }
    function addContacts () {
        matterHolder.querySelectorAll('[data-contact]').forEach((object) => {
            addContact(object)
        })
    }
    function addAbout (object) {
        const objWidth = object.scrollWidth;
        const objHeight = object.scrollHeight;
        const rect = Matter.Bodies.rectangle(
            placement.x * spacing.y, 
            placement.y * spacing.x, 
            objWidth, 
            objHeight,
            {
            label: object.getAttribute('data-about'),
            density: 0.8,
            frictionAir: 0.01,
            restitution: 0.5,
            friction: 0.01,
            render: {
                fillStyle: 'transparent',
                strokeStyle: 'transparent',
            }
        }, 100)

        World.add(engine.world, rect);
        Matter.Sleeping.update(rect, 50);
        const rotation = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 1)
        Matter.Body.rotate(rect, rotation)   
        checkPlacement()
    }
    function addWeb (object) {
        const objWidth = object.scrollWidth;
        const objHeight = object.scrollHeight;
        const rect = Matter.Bodies.rectangle(
            placement.x * spacing.y, 
            placement.y * spacing.x, 
            objWidth, 
            objHeight,
            {
            label: object.getAttribute('data-item'),
            density: 0.8,
            frictionAir: 0.01,
            restitution: 0.5,
            friction: 0.01,
            render: {
                fillStyle: 'transparent',
                strokeStyle: 'transparent',
            }
        }, 100)

        World.add(engine.world, rect);
        Matter.Sleeping.update(rect, 50);
        const rotation = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 1)
        Matter.Body.rotate(rect, rotation)   
        checkPlacement()
    }
    function addContact (object) {
        const objWidth = object.scrollWidth;
        const objHeight = object.scrollHeight;
        const rect = Matter.Bodies.rectangle(
            placement.x * spacing.y, 
            placement.y * spacing.x, 
            objWidth, 
            objHeight,
            {
            label: object.getAttribute('data-contact'),
            density: 0.8,
            frictionAir: 0.01,
            restitution: 0.5,
            friction: 0.01,
            render: {
                fillStyle: 'transparent',
                strokeStyle: 'transparent',
            }
        }, 100)

        World.add(engine.world, rect);
        Matter.Sleeping.update(rect, 50);
        const rotation = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 1)
        Matter.Body.rotate(rect, rotation)   
        checkPlacement()
    }
        
  function checkPlacement() {
    placement.x++;
    if (placement.x * spacing.x > width - spacing.x) {
      placement.y++;
      placement.x = 1;
    }
  }
  
  function addMouse () {
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: {
        //   fillStyle: 'transparent',
        //   strokeStyle: 'transparent',
          visible: false,
        },
      },
    });
    World.add(engine.world, mouseConstraint);
  
    mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
    mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);
    render.mouse = mouse;
  }
  
  function mapHTML() {
    const allBodies = Matter.Composite.allBodies(engine.world);
    allBodies.forEach((body) => {
        const targetObject = matterHolder.querySelector(`[data-about="${body.label}"]`)
        if (body.label === '_noMap' || !targetObject) { return }
        targetObject.style.setProperty('--move-x', `${body.position.x}px`);
        targetObject.style.setProperty('--move-y', `${body.position.y}px`);
        targetObject.style.setProperty('--rotate', `${body.angle}rad`);
      })
    allBodies.forEach((body) => {
      const targetObject = matterHolder.querySelector(`[data-item="${body.label}"]`)
      if (body.label === '_noMap' || !targetObject) { return }
      targetObject.style.setProperty('--move-x', `${body.position.x}px`);
      targetObject.style.setProperty('--move-y', `${body.position.y}px`);
      targetObject.style.setProperty('--rotate', `${body.angle}rad`);
    })
    allBodies.forEach((body) => {
        const targetObject = matterHolder.querySelector(`[data-contact="${body.label}"]`)
        if (body.label === '_noMap' || !targetObject) { return }
        targetObject.style.setProperty('--move-x', `${body.position.x}px`);
        targetObject.style.setProperty('--move-y', `${body.position.y}px`);
        targetObject.style.setProperty('--rotate', `${body.angle}rad`);
    })
    window.requestAnimationFrame(mapHTML);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const matterHolder0 = document.querySelector('[data-about-matter]')
  const matterHolder1 = document.querySelector('[data-item-matter]')
  const matterHolder2 = document.querySelector('[data-contact-matter]')
  if (!matterHolder0) { return }
  if (!matterHolder1) { return }
  if (!matterHolder2) { return }
  initMatter(matterHolder0)
  initMatter(matterHolder1)
  initMatter(matterHolder2)
});
