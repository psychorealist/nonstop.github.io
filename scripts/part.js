const muteButton = document.querySelector(".vol");
const audio = document.getElementById('myAudio');
const video3 = document.getElementById('vid3');
const d1 = document.querySelector(".d1");
const d2 = document.querySelector(".d2");
const d3 = document.querySelector(".d3");
const d1c = document.querySelector("#d1c");
const n1 = document.querySelector(".n1");
const txt2 = document.querySelector(".txt2")
const pt2 = document.querySelector(".pt2");
const obj = document.querySelector(".obj2");
const pt3 = document.querySelector("#pt3");
const yn1 = document.querySelector("#yn1");
const y1 = document.querySelector("#y1");
const n2 = document.querySelector("#n2");
const an1 = document.querySelector("#an1");

function toggleMute() {
    if (audio.muted) {
        audio.muted = false;
        muteButton.textContent = 'Mute';
    } else {
        audio.muted = true;
        muteButton.textContent = 'Unmute';
    }
}

muteButton.addEventListener('click', toggleMute);

document.addEventListener('DOMContentLoaded', function() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: 1
    });
});

window.onload = function() {
    video3.muted = true;
    video3.play();
    video3.loop = true;
};
d1.parentElement.addEventListener('click', function(event) {
    if (event.target === d1 || event.target === d2 || event.target === d3 ) {
        d1c.textContent = "Mind is raceing till you finally relax";
        video3.style.filter = 'grayscale(100%) invert(1)';
        pt2.style.filter = 'contrast(200%) invert(1)';
        pt3.textContent = "Are you tired Yet?";
        yn1.style.display = 'block';
        an1.textContent = "focus";
    
        
    }
});


n1.addEventListener('click', function() {
    d1c.textContent = "Mind is racing, Mind is racing, Mind is racing, Mind is racing";
    pt3.textContent = "Are you tired Yet?";
    yn1.style.display = 'block';
    video3.style.filter = 'contrast(200%)';
    an1.textContent = "procastate";

    
});

y1.addEventListener('click', function() {
    pt2.style.display = 'none';
    video3.style.filter = 'none';
    video3.setAttribute('src', 'vids/vid6.mp4');
    video3.play();
    video3.loop = false;
    video3.addEventListener('ended', function() {
        window.location.href = 'index.html';
    });
});

n2.addEventListener('click', function() {
    pt2.style.display = 'none';
    video3.style.filter = 'none';
    video3.setAttribute('src', 'vids/vid5.mp4');
    video3.play();
    video3.loop = false;
    video3.addEventListener('ended', function() {
        window.location.href = 'pre.html';
    });
});


const fullscreenBtn = document.querySelector('.fbtn');
fullscreenBtn.addEventListener('click', () => {
    const doc = document.documentElement;
    if (!doc.fullscreenElement && !doc.webkitFullscreenElement && !doc.mozFullScreenElement && !doc.msFullscreenElement) {
        doc.requestFullscreen();
    } else {
        if (doc.exitFullscreen) {
            doc.exitFullscreen();
        } else if (doc.mozCancelFullScreen) { 
            doc.mozCancelFullScreen();
        } else if (doc.webkitExitFullscreen) { 
            doc.webkitExitFullscreen();
        } else if (doc.msExitFullscreen) { 
            doc.msExitFullscreen();
        }
    }
});
