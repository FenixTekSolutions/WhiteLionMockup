let images = [
    "welcome.jpg",
    "2.jpg",
    "fire1.jpg",
    "fire2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
]

let carousel = document.getElementById("image");

let idx = 0;

function NextImage(){
    let carousel = document.getElementById("image");
    idx++;
    if(idx >= images.length){
        idx = 0;
    }
    carousel.src = "./img/" + images[idx];
}

function PrevImage(){
    let carousel = document.getElementById("image");
    idx--;
    if(idx < 0){
        idx = images.length-1;
    }
    carousel.src = "./img/" + images[idx];
}
