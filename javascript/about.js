window.addEventListener('load', loader);
var mission = document.querySelector(".mission-container");
var vision = document.querySelector(".vision-container");
var our = document.querySelector(".our-container");
var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2");
var line3 = document.querySelector(".line3");


function hideMO(){
    mission.style.display = "none";
    our.style.display = "none";
    line1.style.display = "none";
    line3.style.display = "none";
    vision.classList.remove("active");
    vision.style.transform = "ease-in 0.5s"
    vision.style.display = "block";
    line2.style.display= "block";

}

function hideVO(){
    vision.style.display = "none";
    mission.classList.add("active");
    line2.style.display = "none";
    mission.style.display = "block";
    line1.style.display = "block";
    our.style.display = "none";
    mission.style.transform = "ease-in 0.2s";
    line3.style.display = "none";

}

function hideMV(){
   
    mission.style.display = "none";
    line2.style.display = "none";
    our.style.display = "block";
    line3.style.display = "block";
    vision.style.display = "none";
    our.style.transform = "ease-in 0.5s";
    line1.style.display = "none";

}



function loader(){

    vision.classList.add("active");
    our.classList.add("active");
    line2.style.display = "none";
    line3.style.display = "none";
}