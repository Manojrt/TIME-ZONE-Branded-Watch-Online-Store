var Home_heading = document.getElementById("Home_heading")
var closer = document.getElementById("close")
var add = document.getElementById("advertisement")
var video_div = document.getElementById("video_div")

function hide(){
    add.style.display="none"
}

let time_out = setTimeout(function (){
    add.style.opacity="1"
    add.style.transitionDelay="2s"
    add.style.display="block"
    add.style.transitionX="200px"
    add.style.position="sticky"
    add.style.bottom="20px"
},5000)

