const muteButton = document.querySelector(".vol");
const btn1 = document.querySelector("#btn1");
const ptxt = document.querySelector(".ptxt");
const video = document.getElementById("vid1");
const fullscreenBtn = document.querySelector(".fbtn");
btn1.addEventListener("click", function() {
    btn1.style.display = "none";
    ptxt.style.display = "none";
    video.play();
});
video.onended = function() {
    document.getElementById("vid1").style.display = "none";
    playAnimations();
};
function playAnimations() {
    var animation1 = lottie.loadAnimation({
        container: document.getElementById("back1"),
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "scripts/back2.json"
    });
    animation1.addEventListener("data_ready", function() {
        animation1.play();
        animation1.addEventListener("complete", function() {
            document.getElementById("back1").style.display = "none";
            var animation2 = lottie.loadAnimation({
                container: document.getElementById("back2"),
                renderer: "svg",
                loop: false,
                autoplay: true,
                path: "scripts/back1.json"
            });
            animation2.addEventListener("data_ready", function() {
                animation2.play();
                lottie.setSpeed(2, animation2);
                animation2.addEventListener("complete", function() {
                    document.getElementById("back2").style.display = "none";
                    document.getElementById("cont").style.display = "block";
                });
            });
        });
    });
}
var elDisplay = document.querySelector(".display"), arrLetters = "abcdefghijklmnopqrstuvwxyz!@\xa3$%^&*+<>".split(""), intArrLettersLength = arrLetters.length, interval;
function flipLetters(strEl) {
    if (strEl.innerHTML !== " ") strEl.innerHTML = arrLetters[Math.floor(Math.random() * intArrLettersLength)];
}
var arrCharacters = elDisplay.innerHTML.split(""), strCharacterSplit = "";
for(i = 0; i < arrCharacters.length; i++){
    var strCharacter = arrCharacters[i];
    strCharacterSplit = strCharacterSplit + "<span data-l='" + strCharacter + "'>" + strCharacter + "</span>";
}
elDisplay.innerHTML = strCharacterSplit;
elDisplay.onmouseenter = function() {
    document.querySelector("#btn1").style.animation = "none";
    interval = setInterval(function() {
        for(i = 0; i < elDisplay.childNodes.length; i++)flipLetters(elDisplay.childNodes[i]);
    }, 100);
};
elDisplay.onmouseleave = function() {
    document.querySelector("#btn1").style.animation = "";
    clearInterval(interval);
    for(i = 0; i < elDisplay.childNodes.length; i++){
        var thisLetter = elDisplay.childNodes[i];
        thisLetter.innerHTML = thisLetter.getAttribute("data-l");
    }
};
function toggleMute() {
    if (video.muted) {
        video.muted = false;
        muteButton.textContent = "Mute";
    } else {
        video.muted = true;
        muteButton.textContent = "Unmute";
    }
}
video.onclick = function() {
    vol;
};
fullscreenBtn.addEventListener("click", ()=>{
    if (!document.fullscreenElement) document.body.requestFullscreen();
    else document.documentElement.exitFullscreen();
});
let pgfade = document.querySelector(".container");
pgfade.classList.toggle("fade");

//# sourceMappingURL=index.06b7e553.js.map
