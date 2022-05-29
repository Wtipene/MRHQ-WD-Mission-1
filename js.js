
//HOME PAGE
//function for video on scroll
let video = document.querySelector("video")
        window.addEventListener('scroll',function(){
        let value = 1 + window.scrollY /-600;
        video.style.opacity = value;
    })

//hover function for Weapon systems
function onImg() {
    this.setAttribute('src', 'fsg16.jpg');
}
function outImg() {
    this.setAttribute('src', 'fsg6.jpg');
}


//hover function for Fit to Fight
function onImg1() {
    this.setAttribute('src', 'fsg8.jpg');
}
function outImg1() {
    this.setAttribute('src', 'fsg9.jpg');
}

//hover function for history
function onImg2() {
    this.setAttribute('src', 'fsg17.jpg');
}
function outImg2() {
    this.setAttribute('src', 'fsg15.jpg');
}

//hover function for contact page
function onImg3() {
    this.setAttribute('src', 'fsg21.jpg');
}
function outImg3() {
    this.setAttribute('src', 'fsg18.jpg');
}



// CONTACT PAGE
//click function for contact page
function play() {
    let audio = document.getElementById("audio");
    audio.play();
}




//WEAPONS PAGE
//mouse over function for SFMG img
function sfmgAudio() {
    let audio = document.getElementById('sfmgaudio');
    audio.play();
}

//mouse over function for GMG img
function gmgAudio() {
    let audio = document.getElementById('gmgaudio');
    audio.play();
}

//mouse over function for HMG img
function hmgAudio() {
    let audio = document.getElementById('hmgaudio');
    audio.play();
}

//mouse over function for JAV img
function javAudio() {
    let audio = document.getElementById('javaudio');
    audio.play();
}

//mouse over function for AMR img
function amrAudio() {
    let audio = document.getElementById('amraudio');
    audio.play();
}

let navBar = document.getElementById("navButtons");

navBar.addEventListener("mouseover", function( event ) {
    event.target.style.background = "black";
  
    setTimeout(function() {
    event.target.style.background = "linear-gradient(0deg, #6e0000,#000000)"
    }, 100);
  }, false);

