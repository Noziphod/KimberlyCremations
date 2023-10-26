var map = document.querySelector(".head-map");
var map1 = document.querySelector(".head-map1");
var map2 = document.querySelector(".head-map2")
function Show(){
    
    if(map.classList.contains("active")){
        map1.classList.remove("active");
        map2.classList.remove("active");
    }else{
        map.classList.add("active");
        map1.classList.remove("active");
        map2.classList.remove("active");
    }
   
}

function Show1(){
    
    if(map1.classList.contains("active")){
        map.classList.remove("active");
        map2.classList.remove("active");
    }else{
        map1.classList.add("active");
        map.classList.remove("active");
        map2.classList.remove("active");
    }
   
}

function Show2(){
    
    if(map2.classList.contains("active")){
        map1.classList.remove("active");
        map.classList.remove("active");
    }else{
        map2.classList.add("active");
        map1.classList.remove("active");
        map.classList.remove("active");
    }
   
}

