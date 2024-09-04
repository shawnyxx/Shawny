const starrySkyOverlay = document.querySelector(".starry-sky-overlay");
const playText = document.getElementById("playText");
const numberOfStars = 200;
const numberOfCircles = 10;
const bouncingCircles = [];
let menuInitialized = false;

// Create stars
Array.from({ length: numberOfStars }).forEach(() => {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 3;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * window.innerHeight}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;
    starrySkyOverlay.appendChild(star);
});

// Initialize menu
const initializeMenu = () => {
    if (!menuInitialized) {
        starrySkyOverlay.remove();
        playText.remove();
        audioPlay("audio/Lullabi By XavTheCave.mp3");
        doNotification("Welcome on Shawny, a website where you can find some of my personal projects and learn more about me.");
        setTimeout(() => {
            doNotification("To know more about our studio project's, please check out our website: https://ecxogames.ca", "gold", "gold");
        }, 2000);
        menuInitialized = true;
        createPopupWindow("New version", "Shawny Version 0.0.1.2 is out. This version includes new design with new soundtracks featuring good artist. If you wish to know more about our development journey, please visit our website at: https://ecxogames.ca. We are cooking some content for this year.", "Ok")
    }
};

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') initializeMenu();
});
document.addEventListener('click', () => {
    initializeMenu();
});

const background = document.querySelector('.background');
const createBouncingCircle = () => {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.top = `${Math.random() * 100}vh`;
    circle.style.left = `${Math.random() * 100}vw`;
    const speedX = (Math.random() * 2 - 1) * 2;
    const speedY = (Math.random() * 2 - 1) * 2;
    bouncingCircles.push({ element: circle, speedX, speedY });
    background.appendChild(circle);
};

const animateCircles = () => {
    bouncingCircles.forEach(circleData => {
        const { element, speedX, speedY } = circleData;
        const rect = element.getBoundingClientRect();
        let newX = rect.left + speedX;
        let newY = rect.top + speedY;
        if (newX <= 0 || newX + rect.width >= window.innerWidth) {
            circleData.speedX = -speedX;
        }
        if (newY <= 0 || newY + rect.height >= window.innerHeight) {
            circleData.speedY = -speedY;
        }
        element.style.left = `${newX}px`;
        element.style.top = `${newY}px`;
    });
    requestAnimationFrame(animateCircles);
};

// Add circles
Array.from({ length: numberOfCircles }).forEach(createBouncingCircle);

// Start animation
animateCircles();

let settingsOpen = false; // Renamed the variable to avoid conflict
function openCloseSettings() {
    const settingsWindow = document.getElementById('settings-window');
    if (settingsWindow.style.display === 'none' || !settingsWindow.style.display) {
        settingsWindow.style.display = 'flex';
        settingsOpen = true;
    } else {
        settingsWindow.style.display = 'none';
        settingsOpen = false;
    }
}

function resetData() {
    localStorage.clear();
    createPopupWindow("Alert", "The data was cleared successfuly", "Close");
}