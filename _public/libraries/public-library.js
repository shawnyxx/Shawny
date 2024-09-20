
// create audio elements
function audioImport(musicID, id, isLOOPED, isMUTED, canAUTOPLAY) {
    let audio = document.createElement('audio');
    audio.src = musicID;
    audio.id = id;

    audio.loop = isLOOPED;
    audio.muted = isMUTED;
    audio.autoplay = canAUTOPLAY;
}

// creates and then play an audio once
function audioPlay(audioSOURCE) {
    let audio = document.createElement('audio');
    audio.src = audioSOURCE;
    audio.play();
    audio.addEventListener('ended', () => {
        audio.remove();
    })
}

// show/hide html element(s)
function showhideTag(tagName, displayStyle = 'block') {
    var elements = document.getElementsByTagName(tagName);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = displayStyle;
    }
}

function reload() {
    location.reload();
}

function consoleLog(mess) {
    console.log(mess);
}
