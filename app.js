var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotatevalue = circle.style.transform;
var rotateSum;

upBtn.onclick = function(){
    rotateSum = rotatevalue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotatevalue = rotateSum;
}

downBtn.onclick = function(){
    rotateSum = rotatevalue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotatevalue = rotateSum;
}


const ContactUs =document.getElementById("myBtn")

function changeColor() {
    var form = document.getElementById('myForm');
    
    form.style.backgroundColor =  '#'+Math.floor(Math.random()*16777215).toString(16); 
    document.body.style.backgroundColor = randomColor; 
}
