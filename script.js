// import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
import "./style.css"
import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";

import {gsap} from "gsap"

const container = document.getElementById("roomContainer")

let selectedRoom = "all";

let mousePosition = new THREE.Vector2();

let items = {};

const redBtn = document.querySelector(".red")
const orangeBtn = document.querySelector(".orange")
const yellowBtn = document.querySelector(".yellow")
const greenBtn = document.querySelector(".green")
const blueBtn = document.querySelector(".blue")
const indigoBtn = document.querySelector(".indigo")
const purpleBtn = document.querySelector(".purple")
const greyBtn = document.querySelector(".grey")

console.log(window.innerWidth/window.innerHeight)

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(0.67 * window.innerWidth,0.67 * window.innerHeight);

renderer.setClearColor(0x1B1717)

// renderer.shadowMap.enabled = true

// renderer.setClearColor(0x0000FF)

const gltfImg = new URL('/models/lpir.glb', import.meta.url);

container.appendChild(renderer.domElement)

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth/window.innerHeight,
    0.1,
    1000,
);

const orbit = new OrbitControls(camera,renderer.domElement);
orbit.enableDamping = true;
orbit.enableRotate = false
orbit.enableZoom = false;

camera.position.set(-5.079337957340117, 4.386736484082166, 4.685815717070662);
orbit.update();

const light = new THREE.AmbientLight(0xFFFFFF,1);
light.position.set(-2,2,-1)
scene.add(light)

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/");
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader)

let roomItems = []; 
// let bedId

let example = new THREE.Object3D();
gltfLoader.load(gltfImg.href , (gltfScene)=>{
    example = gltfScene.scene
    example.position.y = -0.1
    example.scale.set(0.5,0.5,0.5)
    setItems();
    scene.add(example);
    // let bedId = example.children[0].children[0].children[0].children[0].children[0].children[2]
    // roomItems.push(example.children[0].children[0].children[0].children[0].children[0].children[2].id)
})

// console.log(roomItems)
function setItems()
{
    items["room"]=example;
    // console.log(items["room"])
    setIds();
}

let bedId1;

function setIds()
{
    const room1 = items["room"].children[0].children[0].children[0].children[0].children[0];
    const room2 = items["room"].children[0].children[0].children[0].children[0].children[1];
    const room3 = items["room"].children[0].children[0].children[0].children[0].children[2];
    const room4 = items["room"].children[0].children[0].children[0].children[0].children[3];
    const room5 = items["room"].children[0].children[0].children[0].children[0].children[4];
    const room6 = items["room"].children[0].children[0].children[0].children[0].children[5];
    const room7 = items["room"].children[0].children[0].children[0].children[0].children[6];
    const bedId = room1.children[0].children[0].id
    const bed = room1.children[0];

    // console.log(bedId)

    container.addEventListener("mousemove",(e)=>{
        mousePosition.x = e.clientX/container.offsetWidth * 2 -1; 
        mousePosition.y = - (e.clientX/container.offsetWidth) * 2  + 1; 
        rayPos(bedId,bed);
    })
}
// const bedId = roomItems;

const raycaster = new THREE.Raycaster();

// gltfLoader.load()
function getWidth() {
return parseInt(window.getComputedStyle(container).width);
}

function getHeight() {
return parseInt(window.getComputedStyle(container).height);
}

window.addEventListener("resize",()=>{
    console.log(window.innerWidth/window.innerHeight)
    // if(container.offsetHeight>= 262 && container.offsetWidth>= 875) 
    // {
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        // container.style.border = "2px solid black"
        // }
        // console.log(container.offsetHeight,container.offsetWidth)
        renderer.setSize((0.67 * window.innerWidth),(0.67*window.innerHeight))
},false)

container.addEventListener("mousemove",(e)=>{
    example.rotation.y = e.clientX/4800 - 0.15;
})


function rayPos(bedId,bed)
{
    raycaster.setFromCamera(mousePosition,camera);
    let intersects =raycaster.intersectObjects(scene.children);
    // console.log(intersects[0].object)
    // console.log(bed.children[0].children[0]);
    if(selectedRoom === "red")
    {
        if(intersects[0].object.id === bedId)
        {
            // console.log(bed.children[0])
            // bed.children[0].material.map = new THREE.TextureLoader().load("/models/blanket.jpg")
        }
    }
}

redBtn.addEventListener("click",()=>{
    selectedRoom = "red";
    gsap.to(camera.position,
    {x: -2.051718510287302,y: 3.2567558609152509,z: -0.085154276999964, duration: 1})
})
orangeBtn.addEventListener("click",()=>{
    selectedRoom = "orange";
    gsap.to(camera.position,
    {x: -3.851718510287302,y: 1.9267558609152509,z: -0.085154276999964, duration: 1})
})
yellowBtn.addEventListener("click",()=>{
    selectedRoom = "yellow";
    gsap.to(camera.position,
    {x: -4.151718510287302,y: 0.7267558609152509,z: 1.885154276999964, duration: 1})
})
greenBtn.addEventListener("click",()=>{
    selectedRoom = "green";
    gsap.to(camera.position,
    {x: -2.251718510287302,y: 1.9267558609152509,z: 1.685154276999964, duration: 1})
})
blueBtn.addEventListener("click",()=>{
    selectedRoom = "blue";
    gsap.to(camera.position,
    {x: -2.051718510287302,y: 0.5867558609152509,z: 3.745154276999964, duration: 1})
})
indigoBtn.addEventListener("click",()=>{
    selectedRoom = "indigo";
    gsap.to(camera.position,
    {x: -0.651718510287302,y: 1.9267558609152509,z: 3.285154276999964, duration: 1})
})
purpleBtn.addEventListener("click",()=>{
    selectedRoom = "purple";
    gsap.to(camera.position,
    {x: -0.551718510287302,y: 3.3267558609152509,z: 1.785154276999964, duration: 1})
})
greyBtn.addEventListener("click",()=>{
    selectedRoom = "grey";
    gsap.to(camera.position,
    {x: -5.079337957340117,y: 4.386736484082166,z: 4.685815717070662, duration: 1})
})

function animate()
{
    renderer.render(scene,camera);
    // console.log(camera.position)
    // requestAnimationFrame(animate);
}

renderer.setAnimationLoop(animate);