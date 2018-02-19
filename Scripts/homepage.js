
let video = document.getElementById( "headervideo" );

let btn = document.getElementById( "playbtn" );

let mutebtn = document.getElementById( "mutebtn" );

const vid = document.getElementById( "headervideo" );
vid.volume = 0.05;

function Playbutton() {
    if (video.paused ) {
        video.play();
        btn.innerHTML = "Pause";
    }
    else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

function Mutebutton() {
    if (video.muted === true ) {
        video.muted = false;
        mutebtn.innerHTML = "Mute";
    }
    else {
        video.muted = true;
        mutebtn.innerHTML = "Unmute";
    }
}