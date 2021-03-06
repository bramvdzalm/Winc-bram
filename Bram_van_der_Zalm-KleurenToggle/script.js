
let hamMenu = document.querySelector(".ham-menu")
let hamBut = document.querySelector(".ham-but")

function hamSlideOpen(){
  hamMenu.classList.add("showNav")
}
function hamSlideClose(){
  hamMenu.classList.remove("showNav")
}
hamBut.addEventListener("mouseover", hamSlideOpen)
hamBut.addEventListener("mouseout", hamSlideClose)
hamMenu.addEventListener("mouseover", hamSlideOpen)
hamMenu.addEventListener("mouseout", hamSlideClose)

let hamItems = document.querySelectorAll(".ham-item");

hamItems.forEach(link => {
  link.addEventListener("click", function(){
    hamItems.forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");
  })
})

let home = document.querySelector(".home")
let roze = document.querySelector(".roze")
let geel = document.querySelector(".geel")
let rood = document.querySelector(".rood")
let oranje = document.querySelector(".oranje")
let paars = document.querySelector(".paars")
let body = document.querySelector(".body-back")

let gaHome = () => {
  body.className = "home"
  hamMenu.classList.add("closeNav")
  hamMenu.classList.remove("showNav")
  document.querySelector(".text-naam").innerHTML = "HOME"
}
home.addEventListener("click", gaHome)

let gaRoze = () => {
    body.className = "roze"
    hamMenu.classList.add("closeNav")
    hamMenu.classList.remove("showNav")
    document.querySelector(".text-naam").innerHTML = "PINK"
}
roze.addEventListener("click", gaRoze)

let gaGeel = () => {
    body.className = "geel"
    hamMenu.classList.add("closeNav")
    hamMenu.classList.remove("showNav")
    document.querySelector(".text-naam").innerHTML = "YELLOW"
}
geel.addEventListener("click", gaGeel)

let gaRood = () => {
  body.className = "rood"
  hamMenu.classList.add("closeNav")
  hamMenu.classList.remove("showNav")
  document.querySelector(".text-naam").innerHTML = "RED"
}
rood.addEventListener("click", gaRood)

let gaOranje = () => {
  body.className = "oranje"
  hamMenu.classList.add("closeNav")
  hamMenu.classList.remove("showNav")
  document.querySelector(".text-naam").innerHTML = "ORANGE"
}
oranje.addEventListener("click", gaOranje)

let gaPaars = () => {
  body.className = "paars"
  hamMenu.classList.add("closeNav")
  hamMenu.classList.remove("showNav")
  document.querySelector(".text-naam").innerHTML = "PURPLE"
}
paars.addEventListener("click", gaPaars);

body.addEventListener("keydown", (e)=>{
  if(e.keyCode === 48){
    body.className = "home"
    home.classList.add("active")
    roze.classList.remove("active")
    rood.classList.remove("active")
    oranje.classList.remove("active")
    paars.classList.remove("active")
    document.querySelector(".text-naam").innerHTML = "HOME"
  }
  if(e.keyCode === 49){
    body.className = "roze"
    home.classList.remove("active")
    roze.classList.add("active")
    rood.classList.remove("active")
    oranje.classList.remove("active")
    paars.classList.remove("active")
    document.querySelector(".text-naam").innerHTML = "PINK"
  }
  if(e.keyCode === 50){
    body.className = "geel"
    home.classList.remove("active")
    roze.classList.remove("active")
    geel.classList.add("active")
    rood.classList.remove("active")
    oranje.classList.remove("active")
    paars.classList.remove("active")
    document.querySelector(".text-naam").innerHTML = "YELLOW"
  }
  if(e.keyCode === 51){
    body.className = "rood"
    home.classList.remove("active")
    roze.classList.remove("active")
    geel.classList.remove("active")
    rood.classList.add("active")
    oranje.classList.remove("active")
    paars.classList.remove("active")
    document.querySelector(".text-naam").innerHTML = "RED"
  }
  if(e.keyCode === 52){
    body.className = "oranje"
    home.classList.remove("active")
    roze.classList.remove("active")
    geel.classList.remove("active")
    rood.classList.remove("active")
    oranje.classList.add("active")
    paars.classList.remove("active")
    document.querySelector(".text-naam").innerHTML = "ORANGE"
  }
  if(e.keyCode === 53){
    body.className = "paars"
    home.classList.remove("active")
    roze.classList.remove("active")
    geel.classList.remove("active")
    rood.classList.remove("active")
    oranje.classList.remove("active")
    paars.classList.add("active")
    document.querySelector(".text-naam").innerHTML = "PURPLE"
  }
  })
