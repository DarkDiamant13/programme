var compteurImage = 1;
var totalImage = 5;

function slider(x){

    var image = document.getElementById('img');
    compteurImage = compteurImage + x;
    image.src = "img/logo" + compteurImage + ".jfif"; 

    if(compteurImage >= totalImage){
            compteurImage = 1;
    }
    if(compteurImage < 1){
        compteurImage = 5;
    }
}

function sliderAuto(){

    var image = document.getElementById('img');
    compteurImage = compteurImage + 1;
    image.src = "img/logo" + compteurImage + ".jfif"; 

    if(compteurImage >= totalImage){
            compteurImage = 1;
    }
    if(compteurImage < 1){
        compteurImage = 5;
    }
}

window.setInterval(sliderAuto, 3000);