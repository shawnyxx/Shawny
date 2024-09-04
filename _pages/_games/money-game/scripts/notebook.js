// Referencing the html elements
const notebook_window = document.getElementById('notebook-window');
const notebook_text = document.getElementById('notebook');


function viewNotebook() {
    notebook_window.style.display = 'block';
    notebook_window.classList.add('open');
    notebook_window.style.scale = '1';
    notebook_window.classList.remove('close');
}

function closeNotebook() {
    notebook_window.classList.add('close');
    notebook_window.classList.remove('open');
    doNotification("Your notes were saved.");
    setStoredData("money game");
}

notebook_text.addEventListener('input', function() {
    if (notebook_text.value.length > 0) {
        notes = notebook_text.value;
    }
});

function updateNotes() {
    notebook_text.value = notes;
}