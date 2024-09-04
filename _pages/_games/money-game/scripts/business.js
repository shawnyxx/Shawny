// References to html elements
const business_window_element = document.getElementById('business-window');


function openBusinessWindow() {
    business_window_element.style.display = 'block';
    business_window_element.classList.add('open');
    business_window_element.style.scale = '1';
    business_window_element.classList.remove('close');
}

function closeBusinessWindow() {
    business_window_element.classList.add('close');
    business_window_element.classList.remove('open');
}