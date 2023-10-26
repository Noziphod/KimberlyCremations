var testVar = document.querySelectorAll('.column');

var btns = document.querySelectorAll('.division-p');
var btnContainer = document.querySelectorAll('.divisions-container');
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('clicck', function(){
        this.classList.add('focus');
        
    })
}
function Filter(filterText){
    //console.log(typeof(filterText));

    for(let i =0; i < testVar.length; i++){
        testVar[i].classList.remove('effect');
        if( testVar[i].firstElementChild.children[1].innerText !== filterText){
            testVar[i].classList.add('effect')
           
            
        }else{
            testVar[i].classList.remove('effect');
        }
    }
}

function All (filterText){
    for(let i =0; i < testVar.length; i++){
        if( testVar[i].firstElementChild.children[1].innerText !== filterText){         
            testVar[i].classList.remove('effect');
        }
    }
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    this.className += " active1";
  });
}


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 150*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 2000
});


//var mover = document.querySelector('.arrow');

//function animate(){
    //mover.classList.add('move');
    
//}


//setInterval(animate, 1000);

