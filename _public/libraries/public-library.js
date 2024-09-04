// ^ Audio Libraries

// create audio elements with
function audio_IMPORT(musicID, id, isLOOPED, isMUTED, canAUTOPLAY) {
    let audio = document.createElement('audio');
    audio.src = musicID;
    audio.id = id;

    audio.loop = isLOOPED;
    audio.muted = isMUTED;
    audio.autoplay = canAUTOPLAY;
}

// use this function to play an audio once
function audio_PLAY(audioSOURCE) {
    let audio = document.createElement('audio');
    audio.src = audioSOURCE;
    audio.play();
    audio.addEventListener('ended', () => {
        audio.remove();
    })
}

// open and close menu
function menu_OPEN_CLOSE(menuID, openCLOSE) {
    if (openCLOSE === 'open') {
        document.getElementById(menuID).style.display = 'block';
    } else if (openCLOSE === 'close') {
        document.getElementById(menuID).style.display = 'none';
    }
}