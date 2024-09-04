
function createWindow(window_ALERT, window_CONTENT, window_BUTTON_CANCEL, window_BUTTON_CONFIRM) {
    const popup_window = document.createElement('div');
    popup_window.style.padding = '15px';
    popup_window.style.position = 'absolute';
    popup_window.style.top = '50%';
    popup_window.style.left = '50%';
    popup_window.style.transform = 'translate(-50%, -50%)';
    popup_window.style.width = '300px';
    popup_window.style.height = '200px';
    popup_window.style.backgroundColor = 'black';
    popup_window.style.border = '1px solid white';
    popup_window.style.borderRadius = '6px';
    popup_window.style.color = 'white';
    popup_window.style.textAlign = 'center';

    const window_title = document.createElement('div');
    window_title.style.width = '100%';
    window_title.style.height = 'auto';
    window_title.style.color = 'red';
    window_title.style.textAlign = 'center';
    window_title.textContent = window_ALERT;

    const window_content = document.createElement('div');
    window_content.style.width = '100%';
    window_content.style.height = '50%';
    window_content.style.marginTop = '20px';
    window_content.textContent = window_CONTENT;

    const button_container = document.createElement('div');
    button_container.style.position = 'absolute';
    button_container.style.bottom = '-15px';
    button_container.style.left = '0';
    button_container.style.width = '100%';
    button_container.style.height = 'auto';
    button_container.style.marginTop = '20px';

    const cancel_button = document.createElement('button');
    cancel_button.style.backgroundColor = 'black';
    cancel_button.style.transform = 'translateX(-2px)';
    cancel_button.style.width = '80px';

    cancel_button.textContent = window_BUTTON_CANCEL;
    cancel_button.onclick = function() {
        popup_window.remove();
    };

    const confirm_button = document.createElement('button');
    confirm_button.style.backgroundColor = 'black';
    confirm_button.style.width = '80px';

    confirm_button.style.transform = 'translateX(2px)';
    confirm_button.textContent = window_BUTTON_CONFIRM;
    confirm_button.onclick = function() {
        location.reload();
    };

    button_container.appendChild(cancel_button);
    button_container.appendChild(confirm_button);

    popup_window.appendChild(window_title);
    popup_window.appendChild(window_content);
    popup_window.appendChild(button_container);

    document.body.appendChild(popup_window);
}