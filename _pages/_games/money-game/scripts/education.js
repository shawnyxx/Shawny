
const degree_window_element = document.getElementById('degree-window');

function openDegreeWindow() {
    degree_window_element.style.display = 'flex';
}

function closeDegreeWindow() {
    degree_window_element.style.display = 'none';
}

function getDegree(degreeindex, studyindex) {
    for (let i = 0; i < education_levels.length; i++) {  // Initialize `i` with 0
        if (education_levels[i].name.includes(education_levels[degreeindex].name)) {    // Check if the array includes the name
            const degree_name = education_levels[degreeindex].name;
            const degree_length = education_levels[degreeindex].length;
            let degree_type = null;
            if (studyindex < education_levels[i].areas_of_study.length) {
                degree_type = education_levels[degreeindex].areas_of_study[studyindex].name;
            } else {
                console.log("Requested degree is not listed.")
            }
            education_levels[degreeindex].obtained = true;

            // 0 is the name of the degree, 1 is the length of the degree, and 2 is the type of degree, 3 is the degreeindex, and 4 is the area of study index
            current_degree = [degree_name, degree_length, degree_type, degreeindex, studyindex];

            studying = true;
            doNotification(`You just started your first year of ${degree_length} years in ${degree_name}`);

        }
    }
}

function doDegree() {
    if (studying) {
        const degree_index = current_degree[3]
        const area_of_study_index = current_degree[4];
        if (current_degree[1] >= degree_years) {
            degree_years += 1;
            doNotification(`You have completed one year of your ${current_degree[2]} degree. You have ${current_degree[1] - degree_years} year left`, "pink", "pink");
        } else if (current_degree[1] === degree_years) {
            doNotification(`You have completed your ${current_degree[2]} degree`, "pink", "pink");
            obtained_degrees.push[current_degree[0], current_degree[2]];
            salary += (degree_index.areas_of_study[area_of_study_index].salary) / 12 / 30 / working_hours;
            console.log(current_degree);
            current_degree = null;
            studying = false;
        }

    } else {
        console.log("You are not studying");
    }
}

doDegree();