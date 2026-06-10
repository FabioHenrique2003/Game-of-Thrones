const scenes = document.querySelectorAll(".scene")

function showScene(index){

scenes.forEach(scene=>{
scene.classList.remove("active")
})

scenes[index].classList.add("active")

}

document
.getElementById("throne")
.addEventListener("click",()=>{

showScene(1)

})

document
.getElementById("yes1")
.addEventListener("click",()=>{

showScene(2)

const video =
document.getElementById("dragonVideo")

video.play()

})

document
.getElementById("dragonVideo")
.addEventListener("ended",()=>{

showScene(3)

})

document
.getElementById("yes2")
.addEventListener("click",()=>{

showScene(4)

})

function makeRun(button){

button.addEventListener(
"mouseenter",
()=>{

const x =
Math.random() *
(window.innerWidth - 200)

const y =
Math.random() *
(window.innerHeight - 100)

button.style.left = x+"px"
button.style.top = y+"px"

}
)

}

makeRun(
document.getElementById("no1")
)

makeRun(
document.getElementById("no2")
)
