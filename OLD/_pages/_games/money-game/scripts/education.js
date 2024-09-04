// Initialize elements
const degree_window_element = document.getElementById('degree-window');
const degree_element = document.getElementById('studies');
const high_school_button = document.getElementById('highschool-card');
const degree_list = document.getElementById('degree-list');
const choose_degree_list = document.getElementById('choose-degree');

const HIGH_SCHOOL = "High School";
const COLLEGE = "Community College";
const UNIVERSITY = "University";

function openDegreeWindow() {
    degree_window_element.style.display = 'block';
    degree_window_element.classList.add('open');
    degree_window_element.style.scale = '1';
    degree_window_element.classList.remove('close');
}

function closeDegreeWindow() {
    degree_window_element.classList.add('close');
    degree_window_element.classList.remove('open');
}

function getDegree(degree, index) {
    if (degree == HIGH_SCHOOL) {
        degree_data = education['High School'][index];
    } else if (degree == COLLEGE) {
        degree_data = education['Community College'][index];
    } else if (degree == UNIVERSITY) {
        degree_data = education['University'][index];
    }

    isStudying = true;
    updateDegree();
    updateEducationMenu();
    closeDegreeWindow();
}

function updateDegree() {
    if (isStudying) {
        console.log('You are studying');
    }
}


function updateEducationMenu() {
    if (isStudying) {
        degree_element.textContent = `Studying ${degree_data.name} in ${degree_data.field} (${degree_data.length} years left)`;
    } else {
        degree_element.textContent = "Not studying";
    }
}


function showDegreeList(type) {
    choose_degree_list.style.display = 'none';
    degree_list.style.display = 'flex';

    if (type == COLLEGE) {
        for (let i = 0; i < education['Community College'].length; i++) {
            let degree = education['Community College'][i];
            let field = education['Community College'][i].name;

            const degree_button = document.createElement('button');
            degree_button.id = `college_button_${i}`;

            degree_button.textContent = `${field} - salary: ${doSalary(degree.salary)}`;
            
            degree_button.onclick = function () {
                getDegree(COLLEGE, i);
                disabled_degree_buttons_id.push(degree_button.id);
            }

            degree_list.appendChild(degree_button);
            
            if (disabled_degree_buttons_id.length > 0) {
                for (let i = 0; i < disabled_degree_buttons_id.length; i++) {
                    let button = document.getElementById(`college_button_${i}`);
                    button.disabled = true;
                }
            }
        }
    } else if (type == UNIVERSITY) {
        for (let i = 0; i < education['University'].length; i++) {
            let degree = education['University'][i];
            let field = education['University'][i].name;

            const degree_button = document.createElement('button');
            degree_button.id = `university_button_${i}`;

            degree_button.textContent = `${field} - salary: ${doSalary(degree.salary)}`;

            degree_button.onclick = function () {
                getDegree(UNIVERSITY, i);
                disabled_degree_buttons_id.push(degree_button.id);
            }
            
            degree_list.appendChild(degree_button);
            
            if (disabled_degree_buttons_id.length > 0) {
                for (let i = 0; i < disabled_degree_buttons_id.length; i++) {
                    let button = document.getElementById(`university_button_${i}`);
                    button.disabled = true;
                }
            }
        }
    }
}

function closeDegreeList() {
    choose_degree_list.style.display = 'flex';
    degree_list.innerHTML = '';
    degree_list.style.display = 'none';
}

function seeObtainedDegrees() {

}