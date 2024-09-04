let can_click = true;

function createPopupWindow(window_ALERT, window_CONTENT, window_BUTTON_CANCEL, window_BUTTON_CONFIRM, function_NAME, callback, isInput) {
    // Creating elements
    const window_background = document.createElement('div');
    const popup_window = document.createElement('div');
    const window_title = document.createElement('div');
    const window_content = document.createElement('div');
    const button_container = document.createElement('div');
    const cancel_button = document.createElement('button');
    const confirm_button = document.createElement('button');
    const input = document.createElement('input');

    can_click = false;

    // Styles for the popup background
    window_background.style.cssText = `
        position: absolute;
        z-index: 1000;
        background-color: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        width: 100%;
        height: 100%;
    `;
    document.body.appendChild(window_background);

    // Styles for the popup window
    popup_window.style.cssText = `
        padding: 15px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: 200px;
        background-color: black;
        border: 1px solid white;
        border-radius: 6px;
        color: white;
        text-align: center;
        cursor: move;
    `;
    window_background.appendChild(popup_window);

    // Title
    window_title.style.cssText = `
        width: 100%;
        height: auto;
        color: red;
        text-align: center;
    `;
    window_title.textContent = window_ALERT;
    popup_window.appendChild(window_title);

    // Content
    window_content.style.cssText = `
        width: 100%;
        height: 50%;
        margin-top: 20px;
    `;
    window_content.textContent = window_CONTENT;
    popup_window.appendChild(window_content);

    // Input field (optional)
    if (isInput) {
        input.type = 'text';
        popup_window.appendChild(input);
    }

    // Button container
    button_container.style.cssText = `
        position: absolute;
        display: flex;
        justify-content: center;
        bottom: -15px;
        left: 0;
        width: 100%;
        height: auto;
        margin-top: 20px;
    `;
    popup_window.appendChild(button_container);

    // Cancel button
    if (window_BUTTON_CANCEL !== undefined) {
        cancel_button.style.cssText = `
            margin: 5px;
            padding: 5px;
            cursor: pointer;
            min-width: 50px;
            background-color: black;
            color: white;
            border: 2px solid white;
            border-radius: 4px;
        `;
        cancel_button.textContent = window_BUTTON_CANCEL;
        cancel_button.onclick = function () {
            window_background.remove();
            can_click = true;
        };
        button_container.appendChild(cancel_button);
    }

    // Confirm button
    confirm_button.style = `
        margin: 5px;
        padding: 5px;
        cursor: pointer;
        min-width: 50px;
        background-color: black;
        color: white;
        border: 2px solid white;
        border-radius: 4px;
    `;
    confirm_button.textContent = window_BUTTON_CONFIRM;

    if (window_BUTTON_CONFIRM !== undefined) {
        confirm_button.onclick = function () {
            let value = null;

            // Check if the function exists
            if (typeof window[function_NAME] === 'function') {
                window[function_NAME](); // Call the function dynamically if it exists
            }

            // Handle input validation if the input is enabled
            if (isInput) {
                value = parseFloat(input.value);
                if (isNaN(value) || value <= 0) {
                    createPopupWindow('Alert', 'Invalid input. Please enter a valid number.', 'Ok', undefined, undefined);
                }
            }

            // Call the callback with the value (input or no input)
            if (typeof callback === 'function') {
                callback(value);
            }

            window_background.remove();  // Close the popup window
            can_click = true;
        };
        button_container.appendChild(confirm_button);
    }


    // Draggable logic
    let isDragging = false;
    let startX, startY, initialX, initialY;

    popup_window.addEventListener('mousedown', (event) => {
        isDragging = true;
        startX = event.clientX;
        startY = event.clientY;
        initialX = popup_window.offsetLeft;
        initialY = popup_window.offsetTop;
    });

    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            const newX = initialX + event.clientX - startX;
            const newY = initialY + event.clientY - startY;
            popup_window.style.top = `${newY}px`;
            popup_window.style.left = `${newX}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}
