const muteButton = document.querySelector(".vol"); 
const audio = document.getElementById('myAudio');
const audio2 = document.getElementById('myAudio2');
const video2 = document.getElementById('vid2');
const video3 = document.getElementById('vid3');
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

document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: 1,
        
        
    });
});



window.onload = function() {
    video2.muted = true;
    video2.play();
    video2.loop = true;
    video3.muted = true;
    video3.play();
    video3.loop = true;
  };
  
  const fullscreenBtn = document.querySelector('.fbtn');
  fullscreenBtn.addEventListener('click', () => {
      const doc = document.documentElement;
      if (!doc.fullscreenElement && !doc.webkitFullscreenElement && !doc.mozFullScreenElement && !doc.msFullscreenElement) {
          doc.requestFullscreen();
      } else {
          if (doc.exitFullscreen) {
              doc.exitFullscreen();
          } else if (doc.mozCancelFullScreen) { /* Firefox */
              doc.mozCancelFullScreen();
          } else if (doc.webkitExitFullscreen) { /* Chrome, Safari and Opera */
              doc.webkitExitFullscreen();
          } else if (doc.msExitFullscreen) { /* IE/Edge */
              doc.msExitFullscreen();
          }
      }
  });
  const txtRun = document.querySelector('.txtRun');
  const run  = document.querySelector('#run');
  const go2 = document.querySelector('#school');
  const go = document.querySelector('#go');
  
  go.addEventListener('click', () => {
      go2.textContent = 'Oh shit Im late to class!'
      go2.style.backgroundColor = '#ED6C6C'
      go2.style.color = 'green'
      go2.style.fontSize = '100px'
      go2.classList.add('animated')
      run.style.display = 'block'
      run.style.color = 'green'
      audio2.play();
      
  });
run.addEventListener('click', () => {
    txtRun.style.fontSize = '200pt'
    run.style.display = 'none'
    go2.classList.add('animated2')
    video2.setAttribute('src', 'vids/vid2.mp4');
    video2.play();
    
});

