var video = document.getElementById("headervideo");

var playbtn = document.getElementById("playbtn");

var mutebtn = document.getElementById("mutebtn");

var vid = document.getElementById("headervideo");
vid.volume = 0.05;

playbtn.addEventListener("click", Playbutton);
mutebtn.addEventListener("click", Mutebutton);

function Playbutton() {
    if (video.paused) {
        video.play();
        playbtn.innerHTML = "Pause";
    } else {
        video.pause();
        playbtn.innerHTML = "Play";
    }
}

function Mutebutton() {
    if (video.muted === true) {
        video.muted = false;
        mutebtn.innerHTML = "Mute";
    } else {
        video.muted = true;
        mutebtn.innerHTML = "Unmute";
    }
}