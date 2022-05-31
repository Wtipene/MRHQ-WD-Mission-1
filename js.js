
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



  //HISTORY PAGE

  function qs(selector, all = false) {
    return all ? document.querySelectorAll(selector) : document.querySelector(selector);
  }
  
  const sections = qs('.section', true);
  const timeline = qs('.timeline');
  const line = qs('.line');
  line.style.bottom = `calc(100% - 20px)`;
  let prevScrollY = window.scrollY;
  let up, down;
  let full = false;
  let set = 0;
  const targetY = window.innerHeight * .8;
  
  function scrollHandler(e) {
    const {
      scrollY
    } = window;
    up = scrollY < prevScrollY;
    down = !up;
    const timelineRect = timeline.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;
  
    const dist = targetY - timelineRect.top;
    console.log(dist);
  
    if (down && !full) {
      set = Math.max(set, dist);
      line.style.bottom = `calc(100% - ${set}px)`;
    }
  
    if (dist > timeline.offsetHeight + 50 && !full) {
      full = true;
      line.style.bottom = `-50px`;
    }
  
    sections.forEach(item => {
      // console.log(item);
      const rect = item.getBoundingClientRect(); //     console.log(rect);
  
      if (rect.top + item.offsetHeight / 5 < targetY) {
        item.classList.add('show-me');
      }
    }); // console.log(up, down);
  
    prevScrollY = window.scrollY;
  }
  
  scrollHandler();
  line.style.display = 'block';
  window.addEventListener('scroll', scrollHandler);



  const assets = [
    "gallery1.jpg",
    "gallery2.jpg",
    "gallery3.jpg",
    "gallery4.jpg"
    ]
    i = 0
    function nextImg(){
      
    i = i+1
    if(i==assets.length)i=0
    let x = document.getElementById('gallery');
    x.src=assets[i]
    }