
const job_info_element = document.getElementById('job-info');


function getPaycheck() {
    monthly_profit += paycheck;

    if (job) {
        money += paycheck;

        if (paycheck !== 0) {
            addAction(`You just received a paycheck of: ${shortenMoneyDisplay(paycheck)}`, 'green');
            updateStatsMenu();
        }
        
        paycheck = 0;
    }

}

function updateJobButton() {
    if (job) {
        job_info_element.style.color = 'green';
        job_info_element.textContent = `You are working for ${doMoneyNotation(salary)} the hour`;
    } else if (!job) {
        job_info_element.style.color = 'gray';
        job_info_element.textContent = `You are not currently working`;
    }
}

function getJob() {
    if (!job) {
        job = true;
        updateJobButton();
        addAction('🧑‍🏭 You got a job');
        doNotification('You just got a job', 'white', 'brown');
        updateStatsMenu();
    } else {
        job = false;
        updateJobButton();
        addAction('🚶 You quit your job');
        doNotification('You just quit your job', 'white', 'brown');
    }
}

setInterval(function () {
    if (job) {
        paycheck += salary * work_multiplier;
        work_multiplier = Math.random() * (1.25 - 1) + 1;
    }
}, month_length / 4 / working_hours);

