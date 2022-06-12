let curs = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    curs.style.left = x - 25 + "px";
    curs.style.top = y - 25 + "px";
});

let images = document.querySelectorAll(".about-title");
let servicesImages = [
    "url('../dist/kai.png')",
];

let pointers = document.querySelectorAll(".about-item");
let servicesPointers = [
    "url('../dist/click.svg')",
    "url('../dist/click.svg')",
    "url('../dist/click.svg')",
    "url('../dist/click.svg')",
    "url('../dist/click.svg')",
    "url('../dist/click.svg')"
];

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

pointers.forEach((image, i) => {
    image.addEventListener("mouseover", (e) => {
        curs.classList.add("cursor-pointer-show");
        curs.style.backgroundImage = servicesPointers[i];
    });
    image.addEventListener("mouseleave", (e) => {
        curs.classList.remove("cursor-pointer-show");
        curs.style.backgroundImage = "none";
    });
});


let works = [
    {
        class: 'work-box--0',
        title: '版塊六週年線上展',
        intro: '',
        credit: '',
        date:'',
        link:''
    },
]
$(document).ready(function () {
    $('.box-contact').hover(function(){
        $(this).parents(".matter").parents('.contacts').siblings('.contact-vector').find('.vector').toggleClass("active");
    });
    
    works.map(function (work, index, array) {
        $("body").on("click", function (event) {
            console.log($(event.target))
            if ($(event.target).hasClass(work.class)) {

            }

        });
        // if (document.title === work.class) {
             
        // }
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
    // addWebs();
    // addContacts();

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
