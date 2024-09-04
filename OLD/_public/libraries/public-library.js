
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
    audio.currentTime = 0;
    audio.play();
    audio.addEventListener('ended', () => {
        audio.remove();
    });
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


// Type writer effect
function typewriter(textToWrite) {
    let text = "";
    let index = 0;
    const normalSpeed = 100; // Normal speed of typing
    const commaPause = 500; // Pause duration after a comma
    if (textToWrite !== undefined) {
        text = textToWrite;
    }

    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        let delay = text.charAt(index) === ',' ? commaPause : normalSpeed; // Pause if character is a comma
        index++;
        setTimeout(typewriter, delay);
    }
}

// Show screamer
function showscreamer(src, time) {
    const screamer = document.createElement('img');
    screamer.src = src;
    screamer.style.cssText = `
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        position: absolute;
        zIndex: 10;
    `;
    document.body.appendChild(screamer);
    setTimeout(() => {
        screamer.remove();
    }, time);
}

// To make emojis look how you want
document.querySelectorAll('*').forEach(element => {
    if (element.textContent.match(/[\u{1F600}-\u{1F64F}]/u)) { // Matches the range of emoji characters
        element.classList.add('emoji');
    }
});

document.querySelectorAll('.draggable').forEach(draggable => {
    // Ensure the draggable element has position style set
    if (window.getComputedStyle(draggable).position === 'static') {
        draggable.style.position = 'relative';
    }

    draggable.addEventListener('mousedown', (event) => {
        const initialX = event.clientX - draggable.offsetLeft;
        const initialY = event.clientY - draggable.offsetTop;

        const onMouseMove = (event) => {
            draggable.style.left = `${event.clientX - initialX}px`;
            draggable.style.top = `${event.clientY - initialY}px`;
        };

        document.addEventListener('mousemove', onMouseMove);

        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', onMouseMove);
        }, { once: true });
    });
});


document.querySelectorAll('.draggable-mobile').forEach(draggable => {
    draggable.addEventListener('mousedown', startDrag);
    draggable.addEventListener('touchstart', startDrag);

    function startDrag(e) {
        // Prevent default touch behavior
        e.preventDefault();
        
        // Allow click on button but still support drag
        if (e.target.tagName === 'BUTTON') {
            if (e.type === 'mousedown') {
                return; // Only prevent mouse down events
            } else if (e.type === 'touchstart') {
                let touchTimeout = setTimeout(() => {
                    e.target.dispatchEvent(new MouseEvent('mousedown'));
                    clearTimeout(touchTimeout);
                }, 200);
                
                return;
            }
        }

        const isTouchEvent = e.type === 'touchstart';
        const initialX = isTouchEvent ? e.touches[0].clientX : e.clientX;
        const initialY = isTouchEvent ? e.touches[0].clientY : e.clientY;
        const offsetX = initialX - draggable.offsetLeft;
        const offsetY = initialY - draggable.offsetTop;

        function onMove(e) {
            const clientX = isTouchEvent ? e.touches[0].clientX : e.clientX;
            const clientY = isTouchEvent ? e.touches[0].clientY : e.clientY;
            draggable.style.left = `${clientX - offsetX}px`;
            draggable.style.top = `${clientY - offsetY}px`;
        }

        function endDrag() {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', endDrag);
            document.removeEventListener('touchmove', onMove);
            document.removeEventListener('touchend', endDrag);
        }

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchmove', onMove);
        document.addEventListener('touchend', endDrag);
    }
});





