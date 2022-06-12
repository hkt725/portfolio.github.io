// import * as THREE from 'three';
// import { OrbitControls } from 'OrbitControls';
// import { DRACOLoader } from 'DRACOLoader';
// import { GLTFLoader } from 'GLTFLoader';
// import { RoomEnvironment } from 'RoomEnvironment';
import * as THREE from 'https://unpkg.com/three@0.125.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.125.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.125.0/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'https://unpkg.com/three@0.125.0/examples/jsm/loaders/DRACOLoader.js';
import { RoomEnvironment } from 'https://unpkg.com/three@0.125.0/examples/jsm/environments/RoomEnvironment.js';

let object, cook0, cooks;
let cook1,cook2, cook3, cook4, cook5, cook6, cook7;
// Models data
let item = [
    //veg
    {
        title: '斤一斤 - 花椰菜',
        model: '/dist/model/item/veg/hue-tshai.glb',
        scale: '1.5',
        rotation: '.5',
        cook: '/dist/model/cook/veg/cook-hue-tshai.glb',
        servings: 3,
        cookScale: 1.3
    },
    {
        title: '斤一斤 - 苦瓜',
        model: '/dist/model/item/veg/khoo-kue.glb',
        scale: '1.5',
        rotation: '',
        cook: '/dist/model/cook/veg/cook-khoo-kue.glb',
        servings: 3,
        cookScale: 1.3
    },
    {
        title: '斤一斤 - 南瓜',
        model: '/dist/model/item/veg/kim-kue.glb',
        scale: '0.5',
        rotation: '',
        cook: '/dist/model/cook/veg/cook-kim-kue.glb',
        servings: 2,
        cookScale: 1.3
    },
    {
        title: '斤一斤 - 高麗菜',
        model: '/dist/model/item/veg/ko-le-tshai.glb',
        scale: '1',
        rotation: '',
        cook: '/dist/model/cook/veg/cook-ko-le-tshai.glb',
        servings: 4,
        cookScale: 1.3
    },
    {
        title: '斤一斤 - 蘆筍',
        model: '/dist/model/item/veg/loosun.glb',
        scale: '1',
        rotation: '',
        cook: '/dist/model/cook/veg/cook-loosun.glb',
        servings: 3,
        cookScale: 1.3
    },
    {
        title: '斤一斤 - 白菜',
        model: '/dist/model/item/veg/peh-tshai.glb',
        scale: '1',
        rotation: '',
        cook: '/dist/model/cook/veg/cook-peh-tshai.glb',
        servings: 3,
        cookScale: 1.3
    },
    // beef
    {
        title: '斤一斤 - 牛尾',
        model: '/dist/model/item/beef/gu-bue.glb',
        scale: '1',
        rotation: '-.5',
        cook: '/dist/model/cook/beef/cook-gu-bue.glb',
        servings: 8,
        cookScale: 1.3
    },
    {
        title: '斤一斤 - 牛筋',
        model: '/dist/model/item/beef/gu-kin.glb',
        scale: '0.8',
        rotation: '0',
        cook: '/dist/model/cook/beef/cook-gu-kin.glb',
        servings: 3,
        cookScale: 1.5
    },
    {
        title: '斤一斤 - 牛肋條',
        model: '/dist/model/item/beef/gu-lam.glb',
        scale: '1',
        rotation: '0',
        cook: '/dist/model/cook/beef/cook-gu-lam.glb',
        servings: 5,
        cookScale: 1.5
    },
    {
        title: '斤一斤 - 牛小排',
        model: '/dist/model/item/beef/gu-pai.glb',
        scale: '1.5',
        rotation: '.3',
        cook: '/dist/model/cook/beef/cook-gu-pai.glb',
        servings: 3,
        cookScale: 1.5
    },
    {
        title: '斤一斤 - 牛腱',
        model: '/dist/model/item/beef/kian-tsi-bah.glb',
        scale: '1.3',
        rotation: '0',
        cook: '/dist/model/cook/beef/cook-kian-tsi-bah.glb',
        servings: 3,
        cookScale: 1.3
    },
    {
        title: '斤一斤 - 戰斧牛排',
        model: '/dist/model/item/beef/tsian-poo-gu-pai.glb',
        scale: '1.3',
        rotation: '5',
        cook: '/dist/model/cook/beef/cook-tsian-poo-gu-pai.glb',
        servings: 1,
        cookScale: 1.5
    },
    // pork
    {
        title: '斤一斤 - 豬里肌',
        model: '/dist/model/item/pork/io-lai-bah.glb',
        scale: '1.3',
        rotation: '-5',
        cook: '/dist/model/cook/pork/cook-io-lai-bah.glb',
        servings: 2,
        cookScale: 1
    },
    {
        title: '斤一斤 - 五花肉',
        model: '/dist/model/item/pork/sam-tsan-bah.glb',
        scale: '1.2',
        rotation: '.1',
        cook: '/dist/model/cook/pork/cook-sam-tsan-bah.glb',
        servings: 4,
        cookScale: 1.5
    },
    {
        title: '斤一斤 - 豬胛心',
        model: '/dist/model/item/pork/kah-sim-bah.glb',
        scale: '1.3',
        rotation: '6',
        cook: '/dist/model/cook/pork/cook-kah-sim-bah.glb',
        servings: 2,
        cookScale: 1.5
    },
    {
        title: '斤一斤 - 梅花豬',
        model: '/dist/model/item/pork/kah-sim-thau.glb',
        scale: '1.3',
        rotation: '6',
        cook: '/dist/model/cook/pork/cook-kah-sim-thau.glb',
        servings: 4,
        cookScale: 1.5
    },
    {
        title: '斤一斤 - 豬脚',
        model: '/dist/model/item/pork/ti-kha.glb',
        scale: '0.5',
        rotation: '0',
        cook: '/dist/model/cook/pork/cook-ti-kha.glb',
        servings: 2,
        cookScale: 1
    },
    {
        title: '斤一斤 - 豬肋排',
        model: '/dist/model/item/pork/ti-pin-a-pai.glb',
        scale: '1',
        rotation: '6',
        cook: '/dist/model/cook/pork/cook-ti-pin-a-pai.glb',
        servings: 4,
        cookScale: 1.2
    },{
        title: '斤一斤 - 鶏胸',
        model: '/dist/model/item/chi/ke-hing.glb',
        scale: '1.3',
        rotation: '',
        cook: '/dist/model/cook/chi/cook-ke-hing.glb',
        servings: 6,
        cookScale: 0.5
    },{
        title: '斤一斤 - 鶏爪',
        model: '/dist/model/item/chi/ke-jiau.glb',
        scale: '.6',
        rotation: '',
        cook: '/dist/model/cook/chi/cook-ke-jiau.glb',
        servings: 3,
        cookScale: 1.2
    },{
        title: '斤一斤 - 鶏腿排',
        model: '/dist/model/item/chi/ke-thui-pai.glb',
        scale: '.4',
        rotation: '.5',
        cook: '/dist/model/cook/chi/cook-ke-thui-pai.glb',
        servings: 3,
        cookScale: 1.5
    },{
        title: '斤一斤 - 鶏腿',
        model: '/dist/model/item/chi/ke-thui.glb',
        scale: '.11',
        rotation: '.3',
        cook: '/dist/model/cook/chi/cook-ke-thui.glb',
        servings: 1,
        cookScale: .06
    },{
        title: '斤一斤 - 鶏翅',
        model: '/dist/model/item/chi/ke-sit.glb',
        scale: '.2',
        rotation: '20',
        cook: '/dist/model/cook/chi/cook-ke-sit.glb',
        servings: 2,
        cookScale: 1.6
    },
    {
        title: '斤一斤 - 蛤蠣',
        model: '/dist/model/item/fish/ham-a.glb',
        scale: '1',
        rotation: '',
        cook: '/dist/model/cook/fish/cook-ham-a.glb',
        servings: 3,
        cookScale: 1.3
    },
    {
        title: '斤一斤 - 鮭魚',
        model: '/dist/model/item/fish/ang-lian-hi.glb',
        scale: '1.5',
        rotation: '.5',
        cook: '/dist/model/cook/fish/cook-ang-lian-hi.glb',
        servings: 2,
        cookScale: 1.3
    },
    {
        title: '斤一斤 - 虱目魚',
        model: '/dist/model/item/fish/sat-bak-hi.glb',
        scale: '1.3',
        rotation: '.2',
        cook: '/dist/model/cook/fish/cook-sat-bak-hi.glb',
        servings: 4,
        cookScale: 1.3
    },{
        title: '斤一斤 - 鱈魚',
        model: '/dist/model/item/fish/suat-hi.glb',
        scale: '1.3',
        rotation: '.2',
        cook: '/dist/model/cook/fish/cook-suat-hi.glb',
        servings: 2,
        cookScale: 1.5
    },{
        title: '斤一斤 - 透抽',
        model: '/dist/model/item/fish/tho-thiu.glb',
        scale: '.5',
        rotation: '0',
        cook: '/dist/model/cook/fish/cook-tho-thiu.glb',
        servings: 2,
        cookScale: 1.8
    },{
        title: '斤一斤 - 草蝦',
        model: '/dist/model/item/fish/tshau-he.glb',
        scale: '.5',
        rotation: '0',
        cook: '/dist/model/cook/fish/cook-tshau-he.glb',
        servings: 1,
        cookScale: 1.8
    },{
        title: '斤一斤 - 香蕉',
        model: '/dist/model/item/fruit/kim-tsio.glb',
        scale: '1',
        rotation: '0',
        cook: '/dist/model/cook/fruit/cook-kim-tsio.glb',
        servings: 1,
        cookScale: 1.6
    },{
        title: '斤一斤 - 檸檬',
        model: '/dist/model/item/fruit/le-bong.glb',
        scale: '1',
        rotation: '0',
        cook: '/dist/model/cook/fruit/cook-le-bong.glb',
        servings: 1,
        cookScale: 2
    },{
        title: '斤一斤 - 蓮霧',
        model: '/dist/model/item/fruit/lian-bu.glb',
        scale: '1',
        rotation: '0',
        cook: '/dist/model/cook/fruit/cook-lian-bu.glb',
        servings: 1,
        cookScale: 1.5
    },{
        title: '斤一斤 - 荔枝',
        model: '/dist/model/item/fruit/nai-tsi.glb',
        scale: '1',
        rotation: '0',
        cook: '/dist/model/cook/fruit/cook-nai-tsi.glb',
        servings: 1,
        cookScale: 1.5
    },{
        title: '斤一斤 - 西瓜',
        model: '/dist/model/item/fruit/si-kue.glb',
        scale: '1',
        rotation: '0',
        cook: '/dist/model/cook/fruit/cook-si-kue.glb',
        servings: 1,
        cookScale: 1.5
    },{
        title: '斤一斤 - 芒果',
        model: '/dist/model/item/fruit/suainn-a.glb',
        scale: '1',
        rotation: '0',
        cook: '/dist/model/cook/fruit/cook-suainn-a.glb',
        servings: 1,
        cookScale: 1.5
    }
];

let scene, camera, controls, canvas, renderer, clock, mixer;
ScrollTrigger.defaults({
    immediateRender: false,
    ease: "power1.inOut",
    scrub: 0.5
});
init();
function init() {
    canvas = document.querySelector('canvas.webgl');
    scene = new THREE.Scene();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/dist/draco/");
    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    item.map(function (item, index, array) {
        if (document.title === item.title) {
            gltfLoader.load(
                item.model,
                (gltf) => {
                    object = gltf.scene;
                    if (item.rotation !== '') {
                        object.rotation.z = item.rotation;
                    }
                    object.scale.x = item.scale;
                    object.scale.y = item.scale;
                    object.scale.z = item.scale;
                    object.traverse(function (children) {
                        if (object) {
                            let scrollY = window.scrollY;        
                            window.addEventListener('scroll', () =>
                            {
                            scrollY = window.scrollY
                            const tween = gsap.timeline()
                            // 
                            tween.to(object.rotation,{x: 0.5, y: 0, z: -0.5, scrollTrigger: {
                            scrub:true,
                            trigger: ".section-2",
                            // duration: {min: 0.2, max: 3}, 
                            ease: "power0.inOut",
                            start: "50% 90%",
                            end: "70% 90%",
                            },
                            }) 
                            //
                            .fromTo(object.position, { x: 0, y: 0, z: 0 },{x: -3, y: -2, z: 0.8, scrollTrigger: {
                            scrub:true,
                            trigger: ".section-2",
                            // duration: { min: 2, max: 3 }, 
                            ease: "power0.inOut",
                            start: "50% 90%",
                            end: "70% 90%",
                            },
                            }) 
                            //
                            .to(object.rotation,{x: -0.5, y: 0, z: 0, scrollTrigger: {
                            scrub:true,
                            trigger: ".one-catty",
                            // duration: {min: 0.2, max: 1}, 
                            ease: "power0.inOut",
                                
                            start: "20% 50%",
                            end: "90% 50%",
                            },
                            }) 
                            //
                            .to(object.position,{x: -1, y: -1, z: -0.8, scrollTrigger: {
                            scrub:true, 
                            trigger: ".one-catty",
                            duration: {min: 0.2, max: 1}, 
                            ease: "power0.inOut",
                            start: "20% 50%",
                            end: "90% 50%",
                            },
                            })
                            //
                            .to(object.rotation, {x: 0, y: 0, z: 0.5, scrollTrigger: {
                            scrub:true,
                                
                            trigger: ".section-3",
                            // duration: {min: 0.2, max: 1}, 
                            ease: "power0.inOut",
                            start: "50% 80%",
                            end: "60% 80%",
                            },
                            })
                            .to(object.position, {x: -3, y: -2.5, z: 0, scrollTrigger: {
                            scrub:true,
                                
                            trigger: ".section-3",
                            // duration: {min: 0.2, max: 1}, 
                            ease: "power0.inOut",
                            start: "20% 80%",
                            end: "60% 80%",
                            },
                            }) 
                            .to(object.position, {x: -1, y: -2, z: -5, scrollTrigger: {
                                scrub:true,   
                                trigger: ".weigh",
                                // duration: {min: 0.2, max: 1}, 
                                ease: "power0.inOut",
                                start: "top 70%",
                                end: "60% 70%",
                            },
                            })
                                .fromTo(object.scale, { x: `${item.scale}`, y: `${item.scale}`, z: `${item.scale}` },{x: 0, y: 0, z: 0, scrollTrigger: {
                                scrub:true,   
                                trigger: ".weigh",
                                // duration: {min: 0.2, max: 1}, 
                                ease: "power0.inOut",
                                start: "top 70%",
                                end: "60% 70%",
                            },
                            })
                            .to(".pointer", {rotation: 50,x:30,y:15, scrollTrigger: {
                                scrub:true,
                                trigger: ".weigh",
                                duration: {min: 0.2, max: 1}, 
                                // ease: "power0.inOut",
                                start: "0% 70%",
                                end: "100% 70%",
                            },
                            }) 
                         })
                        }
                    })
                    scene.add(object)        
                }
            );
            // cook-model
            gltfLoader.load(
            item.cook,
            (gltf) => {
                cook0 = gltf.scene;
                cooks = new THREE.Group();
                if (cook0) {
                    cook0.scale.x = item.cookScale;
                    cook0.scale.y = item.cookScale;
                    cook0.scale.z = item.cookScale;
                    cook0.position.set(0, 0, -.02);
                    if (item.servings === 1) {
                        cooks.add(cook0)
                    }
                    if (item.servings === 2) {
                        cook1 = cook0.clone();
                        cook0.position.set(+.5, 0, +.2);
                        if (cook1) { 
                            cook1.position.set(+.3, -.5, -.3);
                            cook1.rotation.y = 2.5;
                        }
                        cooks.add(cook0,cook1)
                    }
                    if (item.servings === 3) {
                        cook1 = cook0.clone();
                        if(cook1) cook1.position.set(+.3, -.5, -.5);
                        cook2 = cook0.clone();
                        if (cook2) { 
                            cook2.position.set(-.5, -.8, +.5);
                            cook2.rotation.y = 2;
                        }
                        cooks.add(cook0,cook1,cook2)
                    }
                    if (item.servings === 4) {
                        cook1 = cook0.clone();
                        if(cook1) cook1.position.set(+.3, -.5, -.5);
                        cook2 = cook0.clone();
                        if (cook2) cook2.position.set(-.5, -.8, +.5);
                        cook3 = cook0.clone();
                        if(cook3) cook3.position.set(+.1, -1.1, +.1);
                        cooks.add(cook0,cook1,cook2,cook3)
                    }
                    if (item.servings === 5) {
                        cook1 = cook0.clone();
                        if(cook1) cook1.position.set(+.3, -.5, -.5);
                        cook2 = cook0.clone();
                        if (cook2) cook2.position.set(-.5, -.8, +.5);
                        cook3 = cook0.clone();
                        if (cook3) cook3.position.set(+.5, -1, -.1);
                        cook4 = cook0.clone();
                        if (cook4) cook4.position.set(-.1, -1.4, +.6);
                        cooks.add(cook0,cook1,cook2,cook3,cook4)
                    }
                    if (item.servings === 6) {
                        cook1 = cook0.clone();
                        if (cook1) { 
                            cook1.position.set(+.3, -.5, -.3);
                            cook1.rotation.y = 2.5;
                        }
                        cook2 = cook0.clone();
                        if (cook2) { 
                            cook2.position.set(-.5, -.8, +.5);
                            cook2.rotation.y = 2;
                        }
                        cook3 = cook0.clone();
                        if (cook3) cook3.position.set(+.5, -1, -.1);
                        cook4 = cook0.clone();
                        if (cook4) { 
                            cook4.position.set(-.1, -1.4, +.6);
                            cook4.rotation.y = 1;
                        }
                        cook5 = cook0.clone();
                        if (cook5) cook5.position.set(-.5, -2, -1);
                        cooks.add(cook0,cook1,cook2,cook3,cook4, cook5)
                    }
                    if (item.servings === 8) {
                        cook1 = cook0.clone();
                        if(cook1) cook1.position.set(+.3, -.5, -.5);
                        cook2 = cook0.clone();
                        if (cook2) cook2.position.set(-.5, -.6, +.5);
                        cook3 = cook0.clone();
                        if (cook3) cook3.position.set(-.7, +.1, -.6);
                        cook4 = cook0.clone();
                        if (cook4) cook4.position.set(-.8, -1.6, +.9);
                        cook5 = cook0.clone();
                        if (cook5) cook5.position.set(-.9, -1, -.8);
                        cook6 = cook0.clone();
                        if (cook6) cook6.position.set(+.1, -1.1, +.1);
                        cook7 = cook0.clone();
                        if (cook7) cook7.position.set(-.6, +.4, +.5);
                        cooks.add(cook0, cook1,cook2, cook3, cook4, cook5, cook6, cook7)
                    }
                }
                cooks.traverse(function (children) {
                    if (cooks) {
                        cooks.scale.set(0, 0, 0)
                        let scrollY = window.scrollY;        
                        window.addEventListener('scroll', () =>
                        {
                            scrollY = window.scrollY
                            const tween = gsap.timeline()
                            // 
                            tween.fromTo(cooks.scale, { x: 0, y: 0, z: 0 }, {
                                    x: 1, y: 1, z: 1, scrollTrigger: {
                            scrub:true,
                            trigger: ".section-4",
                            duration: {min: 0.2, max: 3}, 
                            ease: "power0.inOut",
                            start: "40% 90%",
                            end: "100% 90%",
                            },
                            }) 
                            .fromTo(cooks.position, { x: 0, y: 0, z: -.8 }, {
                                    x: 0, y: 0, z: 0, scrollTrigger: {
                            scrub:true,
                            trigger: ".section-4",
                            duration: {min: 0.2, max: 3}, 
                            ease: "power0.inOut",
                            start: "50% 90%",
                            end: "100% 90%",
                            },
                            }) 
                            .to(cooks.scale, {x: 3, y: 3, z: 3, scrollTrigger: {
                            scrub:true,
                            trigger: ".section-5",
                            duration: {min: 0.2, max: 3}, 
                            ease: "power0.inOut",
                            start: "-10% 90%",
                            end: "60% 90%",
                            },
                            }) 
                        })
                    }
                })
                scene.add(cooks)
                }
            );
            
        }
    });

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
    camera.position.set(3, 2, 0);
    // scene.add(camera);

    controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true  
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearAlpha(0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.sRGBEncoding;

    window.addEventListener('resize', () => {
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    });

    const environment = new RoomEnvironment();
    const pmremGenerator = new THREE.PMREMGenerator( renderer );

    scene.environment = pmremGenerator.fromScene(environment).texture;
}
function render() {
    renderer.render( scene, camera );
}
clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    controls.update();
    if (object) {
        object.rotation.y = elapsedTime * 0.4;
    }
    if (cook0) cook0.rotation.y = elapsedTime * 0.4;

    render();
    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
};
tick();
window.onpopstate = function(event) {
    console.log(document.location)
    if(document.location.href === 'http://onetaiwancatty.com/'){
        $('#intro').css({"display": "none"});
        $('#popup-menu').css({"display": "none"});
        camera.position.set( - 120, 100, 200 );
        camera.zoom= 0;
    }
};
$(document).ready(function () {
    const tw = new TimelineMax();
        tw.from('.webgl', { y: -1000,duration: 1.5, ease: "strong.inOut"}, 2)
        .from('item-wrapper', { opacity:0 , delay:0,duration: 2, ease: "strong.inOut"}, 2)
        .from('.marquee-wrapper', { y: -1000 , delay:.8,duration: 2, ease: "strong.inOut"}, 2)
        .from('.btn-wrapper', { opacity: 0 , delay:1.6,duration: 2, ease: "strong.inOut"}, 2)
        .from('.scroll',{ opacity: 0, delay:1.6,duration: 2, ease: "strong.inOut" }, 2)
        // 螢幕錄影
        // .to(window,20, { delay:2,duration: 30 ,scrollTo: { y: "#section2" } });
    // window.onload = (event) => { 
    //     // 進場動態
        
    // };
    const tween = gsap.timeline();   
    let tl = tween.from('#btn-weigh', {
        scrollTrigger: {
        trigger: ".item-wrapper",
        duration: { min: 2, max: 3 },
        start: '500% 0%',
        end: '600% 0%',
        toggleClass: "active",
        },
    })
    .from('#btn-picking', {
        scrollTrigger: {
        trigger: ".item-wrapper",
        duration: { min: 2, max: 3 },
        start: '500% 0%',
        end: '600% 0%',
        toggleClass: "active",
        },
    })
    .from('#btn-top', {
        scrollTrigger: {
        trigger: ".item-wrapper",
        duration: { min: 2, max: 3 },
        start: '500% 0%',
        end: '600% 0%',
        toggleClass: "active",
        },
    })
    .from('.navbar', {
        scrollTrigger: {
        trigger: ".item-wrapper",
        duration: { min: 2, max: 3 },
        start: '500% 0%',
        end: '600% 0%',
        toggleClass: "active",
        },
    })

    document.querySelectorAll(".btn-wrapper button").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        gsap.to(window, { duration: 1.5, scrollTo: { y: "#section" + (index + 1), offsetY:100 } });
    });
    });
    document.getElementById("btn-top").addEventListener("click", () => {
    gsap.to(window, { duration: 1.5, scrollTo: { y: "#top" } });
    });
    document.getElementById("toggle").addEventListener("click", () => {
        gsap.fromTo('.nav-logo', { duration: 1, x: 0 }, { duration: 1, x: 0, left: 60, ease: "ease" });
    });
    document.getElementById("close").addEventListener("click", () => {
        gsap.fromTo('.nav-logo', { duration: 1, x: 0, left: 60 }, { duration: 1, x: 0, left: "50%", ease: "ease" });
    });
});

