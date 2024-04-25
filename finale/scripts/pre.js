const muteButton = document.querySelector(".vol");
const audio = document.getElementById('myAudio');
const video4 = document.getElementById('vid4');
const msgNt1 = document.getElementById('msgNt1');
const txtCont = document.querySelector('.txtCont');
const nt1 = document.querySelector('.nt1');
const msgRc1 = document.querySelector('.msgRc1');
const msgSn1 = document.querySelector('.msgSn1');
const n3 = document.querySelector('#n3');
const y2 = document.querySelector('#y2');
const yn2 = document.querySelector('.yn2');

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
    video4.muted = true;
    video4.play();
    video4.loop = true;
};




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


msgNt1.addEventListener("mouseover", function() {
    msgNt1.textContent = "/open new message/";
    msgNt1.style.animation = "none";
    msgNt1.style.filter = "none";
});

msgNt1.addEventListener("mouseout", function() {
    msgNt1.textContent = "1 new text message";
});

msgNt1.addEventListener("click", function() {
    txtCont.style.opacity = '1';
    msgNt1.style.display = "none";
    nt1.style.display = "none";
    msgRc1.classList.add("typed-out");
    msgSn1.classList.add("typed-out");
   
});

n3.addEventListener("click", function() {
    txtCont.style.display = 'none';
    yn2.style.display = 'none';
    video4.setAttribute('src', 'vids/vid6.mp4');
    video4.play();
    video4.loop = false;
    video4.addEventListener('ended', function() {
        window.location.href = 'index.html';
    });
});

y2.addEventListener("click", function() {
    txtCont.style.display = 'none';
    yn2.style.display = 'none';
    video4.setAttribute('src', 'vids/vid8.mp4');
    video4.play();
    video4.loop = false;
    video4.addEventListener('ended', function() {
        window.location.href = 'index.html';
    });
});