
const degree_window_element = document.getElementById('degree-window');

let degree_length = null;

function startSchool() {
    createPopupWindow("Success", "Whomp whomp", "no");
}

// // Example to access the list and log the education levels with their details
// education_levels.forEach(level => {
//     console.log(`Name: ${level.name}`);
//     console.log(`Length: ${level.length} years`);
//     console.log(`Average Salary: $${level.salary}`);
//     console.log(`Areas of Study:`);
//     level.areas_of_study.forEach(area => {
//         console.log(`  - ${area.name}: $${area.salary}`);
//     });
//     console.log('--------------------------');
// });

function openDegreeWindow() {
    degree_window_element.style.display = 'flex';
}

function closeDegreeWindow() {
    degree_window_element.style.display = 'none';
}