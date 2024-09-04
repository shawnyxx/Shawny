function initButtons() {
    createRefreshButton();
    createBackButton();
}

function disableButtons() {
    document.getElementById("refreshButton").remove();
    document.getElementById("backButton").remove();
}

function createRefreshButton() {
    let button_click_count = 0;
    let clickTimer;
    let isDragging = false;
    const refreshbutton = document.createElement('button');
    refreshbutton.style = `
        background-color: transparent; 
        border: none; 
        font-size: 35px;
        background-image: url(/_files/images/icons/refresh.png);
        background-position: center;
        background-size: cover;
        cursor: grab;
        position: absolute; 
        background-size: cover;
        width: 35px;
        height: 35px;
        z-index: 999999999;
        top: 25px; 
        left: 75px;
        transition: ease 0.25s;
    `;
    refreshbutton.classList.add('draggable-mobile');
    refreshbutton.addEventListener('mouseover', () => {
        refreshbutton.style.transform = 'scale(1.2)';
    });
    refreshbutton.addEventListener('mouseout', () => {
        refreshbutton.style.transform = 'scale(1)';
    });

    refreshbutton.addEventListener('mousedown', startDrag);
    refreshbutton.addEventListener('touchstart', startDrag, { passive: false });

    function startDrag(e) {
        e.preventDefault();
        isDragging = false;

        const isTouchEvent = e.type === 'touchstart';
        const initialX = isTouchEvent ? e.touches[0].clientX : e.clientX;
        const initialY = isTouchEvent ? e.touches[0].clientY : e.clientY;
        const offsetX = initialX - refreshbutton.offsetLeft;
        const offsetY = initialY - refreshbutton.offsetTop;

        function onMove(e) {
            isDragging = true;
            const clientX = isTouchEvent ? e.touches[0].clientX : e.clientX;
            const clientY = isTouchEvent ? e.touches[0].clientY : e.clientY;
            refreshbutton.style.left = `${clientX - offsetX}px`;
            refreshbutton.style.top = `${clientY - offsetY}px`;
        }

        function endDrag() {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', endDrag);
            document.removeEventListener('touchmove', onMove);
            document.removeEventListener('touchend', endDrag);

            if (!isDragging) {
                handleClick();
            }
        }

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchmove', onMove);
        document.addEventListener('touchend', endDrag);
    }

    function handleClick() {
        if (button_click_count >= 1) {
            location.reload();
            button_click_count = 0;
            clearTimeout(clickTimer);
        } else {
            button_click_count++;
            clearTimeout(clickTimer);
            clickTimer = setTimeout(() => button_click_count = 0, 500);
        }
    }

    document.body.appendChild(refreshbutton);
}

function createBackButton() {
    let button_click_count = 0;
    let clickTimer;
    let isDragging = false;
    const backbutton = document.createElement('button');
    backbutton.style = `
        background-color: transparent; 
        border: none;
        background-image: url(/_files/images/icons/back.png);
        background-position: center;
        background-size: cover;
        cursor: grab;
        font-size: 35px; 
        position: absolute; 
        background-size: cover;
        width: 35px;
        height: 35px;
        z-index: 999999999;
        transition: transform 0.1s ease-out;
        top: 25px; 
        left: 25px;
        transition: ease 0.25s;
    `;
    backbutton.classList.add('draggable-mobile');
    backbutton.addEventListener('mouseover', () => {
        backbutton.style.transform = 'scale(1.2)';
    });
    backbutton.addEventListener('mouseout', () => {
        backbutton.style.transform = 'scale(1)';
    });

    backbutton.addEventListener('mousedown', startDrag);
    backbutton.addEventListener('touchstart', startDrag, { passive: false });

    function startDrag(e) {
        e.preventDefault();
        isDragging = false;

        const isTouchEvent = e.type === 'touchstart';
        const initialX = isTouchEvent ? e.touches[0].clientX : e.clientX;
        const initialY = isTouchEvent ? e.touches[0].clientY : e.clientY;
        const offsetX = initialX - backbutton.offsetLeft;
        const offsetY = initialY - backbutton.offsetTop;

        function onMove(e) {
            isDragging = true;
            const clientX = isTouchEvent ? e.touches[0].clientX : e.clientX;
            const clientY = isTouchEvent ? e.touches[0].clientY : e.clientY;
            backbutton.style.left = `${clientX - offsetX}px`;
            backbutton.style.top = `${clientY - offsetY}px`;
        }

        function endDrag() {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', endDrag);
            document.removeEventListener('touchmove', onMove);
            document.removeEventListener('touchend', endDrag);

            if (!isDragging) {
                handleClick();
            }
        }

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchmove', onMove);
        document.addEventListener('touchend', endDrag);
    }

    function handleClick() {
        if (button_click_count >= 1) {
            history.back();
            button_click_count = 0;
            clearTimeout(clickTimer);
        } else {
            button_click_count++;
            clearTimeout(clickTimer);
            clickTimer = setTimeout(() => button_click_count = 0, 500);
        }
    }

    document.body.appendChild(backbutton);
}

initButtons();