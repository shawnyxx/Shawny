// Initialize elements
const degree_window_element = document.getElementById('degree-window');
const isEnrolledElement = document.getElementById('studies');
const high_school_button = document.getElementById('highschool-card');
const degree_list = document.getElementById('degree-list');
const choose_degree_list = document.getElementById('choose-degree');

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

function getDegree(degreeindex, studyindex) {
    if (!studying) {
        // Validate degreeindex before accessing the array
        if (degreeindex < 0 || degreeindex >= education_levels.length) {
            console.log("Invalid degree index.");
            return;
        }

        if (degreeindex === 0) {
            // Sets the high school button flag to disable the button
            high_school_button_disabled = true;
            updateEducationMenu();
        }

        const degree = education_levels[degreeindex];

        // Validate studyindex before accessing the array
        if (studyindex < 0 || studyindex >= degree.areas_of_study.length) {
            console.log("Invalid study index.");
            return;
        }

        // If already studying, notify the user
        if (studying) {
            doNotification("You are already enrolled in another degree.");
            return;
        }

        const degree_name = degree.name;
        const degree_length = degree.length;
        const degree_type = degree.areas_of_study[studyindex].name;

        // 0 is the name of the degree, 1 is the length of the degree, and 2 is the type of degree, 3 is the degreeindex, and 4 is the area of study index
        current_degree = [degree_name, degree_length, degree_type, degreeindex, studyindex];

        // Initialize degree_years if not already initialized
        degree_years = 0;

        isEnrolledElement.textContent = `You are currently studying in ${degree_name} in ${degree_type}, you have ${degree_length - degree_years} years left.`;

        // Sets the studying flag to true
        studying = true;

        // Show a notification to the user
        doNotification(`You just started your first year of ${degree_length} years in ${degree_name}`);
    } else {
        createPopupWindow("Alert", "You are already enrolled in another degree.", "Ok");
    }
}

function updateStudiesElement() {
    if (current_degree !== null) {
        // Calculate years left
        const years_left = current_degree[1] - degree_years;
        const months_left = 12 - month_index;

        // Update the text content based on the years left
        if (years_left === 0) {
            isEnrolledElement.textContent = `You are currently studying in ${current_degree[0]} in ${current_degree[2]}, you have ${months_left} months left.`;
        } else if (months_left === 0) {
            isEnrolledElement.textContent = `You are currently studying in ${current_degree[0]} in ${current_degree[2]}, you have ${years_left} years left.`;
        } else if (months_left > 0) {
            isEnrolledElement.textContent = `You are currently studying in ${current_degree[0]} in ${current_degree[2]}, you have ${years_left} years and ${months_left} months left.`;
        }
    }
}

function doDegree() {
    if (studying) {
        // Variables
        const degree_index = current_degree[3];
        const area_of_study_index = current_degree[4];
        const degree_length = current_degree[1];

        // Logic to determine if the user has completed the degree
        if (degree_years < degree_length) {
            // Increment the degree years
            degree_years++;

            updateStudiesElement();

            // Show a notification to the user
            doNotification(`You have started your ${degree_years}th year of your ${current_degree[0]} degree`, "pink", "pink");

        } else if (degree_years === degree_length) {
            // Add the degree to the obtained degrees array BEFORE resetting current_degree
            obtained_degrees.push([current_degree[0], current_degree[2]]);

            // Calculate the salary
            salary += (education_levels[degree_index].areas_of_study[area_of_study_index].salary) / 12 / 4 / working_hours;

            // Show a notification to the user
            doNotification(`You have completed your ${current_degree[2]} degree`, "pink", "pink");

            // Reset the current degree
            current_degree = null;

            // Reset the studying flag
            studying = false;

            updateStudiesElement();

            return;
        }
    }
}



function updateEducationMenu() {
    if (obtained_degrees.length > 0) {
        obtained_degrees[0][0] === "High School" ? high_school_button_disabled = true : high_school_button_disabled = false;
    }
    high_school_button_disabled ? high_school_button.disabled = true : high_school_button.disabled = false;
}



function showDegreeList(type) {
    choose_degree_list.style.display = 'none';
    degree_list.style.display = 'flex';

    degree_list.innerHTML = ''; // Clear previous list

    // Disable buttons that are already in the disabled list
    disabled_degree_buttons_id.forEach(element => {
        const button = document.getElementById(element);
        if (button) {
            button.disabled = true;
        }
        setStoredData("money game");
    });

    if (type === "College") {
        for (let i = 0; i < education_levels[1].areas_of_study.length; i++) {
            const study_field = education_levels[1].areas_of_study[i];
            const degree = document.createElement('button');
            degree.id = `college_degree_button_${i}`; // Unique ID for college
            degree.style = `
                padding: 5px;
                border: 1px solid white;
                border-radius: 6px;
                width: 75%;
            `;
            degree.textContent = `College Major in ${study_field.name} - Salary: ${doMoneyNotation(study_field.salary)} per year`;
            degree_list.appendChild(degree);

            // Disable button if it's already in the disabled array
            if (disabled_degree_buttons_id.includes(degree.id)) {
                degree.disabled = true;
            }

            degree.onclick = function () {
                if (studying) {
                    createPopupWindow("Alert", "You are already enrolled in another degree.", "Ok");
                    return;
                } else {
                    disabled_degree_buttons_id.push(degree.id); // Push the button ID to the disabled array
                    degree.disabled = true;
                    console.log(`You applied for a degree in ${education_levels[1].name} major in ${study_field.name}`);
                    getDegree(1, i); // Pass index 1 for College
                }
            }
        }
    } else if (type === "University") {
        for (let i = 2; i < education_levels.length; i++) { // Start from index 2 to skip college
            for (let j = 0; j < education_levels[i].areas_of_study.length; j++) {
                const study_field = education_levels[i].areas_of_study[j];
                const degree = document.createElement('button');
                degree.id = `university_degree_button_${i}_${j}`; // Unique ID for university
                degree.style = `
                    padding: 5px;
                    border: 1px solid white;
                    border-radius: 6px;
                    width: 75%;
                `;
                degree.textContent = `${education_levels[i].name} in ${study_field.name} - Salary: ${doMoneyNotation(study_field.salary)} per year`;
                degree_list.appendChild(degree);

                // Disable button if it's already in the disabled array
                if (disabled_degree_buttons_id.includes(degree.id)) {
                    degree.disabled = true;
                }

                degree.onclick = function () {
                    if (studying) {
                        createPopupWindow("Alert", "You are already enrolled in another degree.", "Ok");
                        return;
                    } else {
                        disabled_degree_buttons_id.push(degree.id); // Push the button ID to the disabled array
                        degree.disabled = true;
                        console.log(`You applied for a degree in ${education_levels[i].name} major in ${study_field.name}`);
                        getDegree(i, j); // Pass correct index for University
                    }

                }
            }
        }
    } else {
        // Do nothing
        return;
    }
}

function closeDegreeList() {
    degree_list.style.display = 'none';
    choose_degree_list.style.display = 'flex';
}

function seeObtainedDegrees() {
    // Variables
    let degrees = null;

    // Logic to determinee if the user has completed the degree
    if (obtained_degrees.length > 0) {
        degrees = `Your degrees:\n${obtained_degrees}`;
    } else {
        degrees = "You have no degrees"
    }

    // Show a popup window with the obtained degrees
    createPopupWindow('Your obtained degrees', degrees, 'no');
}

doDegree();