let myBut = document.getElementById("mybutton");
let but2nd = document.getElementById("2ndbutton")
let body = document.getElementById("head-body")



myBut.addEventListener("click", function(){alert("button clicked")})



let toggleColor = () => {
    body.classList.toggle("red-background")
}
but2nd.addEventListener("click", toggleColor)