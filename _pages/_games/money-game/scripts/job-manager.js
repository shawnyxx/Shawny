var job = false;
var paycheck = 0;
var timeMult = Math.floor(Math.random() * (100 - 30) + 30);

let salary = 0;


function getPaycheck() {
    monthly_profit += paycheck;

    if (job) {
        money += paycheck;

        if (paycheck !== 0) {
            addAction(`You just received a paycheck of: $${shortenMoneyDisplay(paycheck)}`, 'orange');
            updateNetWorth();
        }


        paycheck = 0;
    }

}

function getJob() {
    if (!job) {
        job = true;
        addAction('🧑‍🏭 You got a job');
        doNotification('You just got a job', 'white', 'brown');
        updateSalary();
        document.getElementById('jobBttn').textContent = '🚶 Quit your job';
    } else {
        job = false;
        addAction('🚶 You quit your job');
        doNotification('You just quit your job', 'white', 'brown');
        document.getElementById('jobBttn').textContent = '💼 Get a job';
    }
}


setInterval(function () {
    if (job) {
        paycheck += moneyPerTap;
        var timeMult = Math.floor(Math.random() * (100 - 30) + 30);
    }
}, timeMult);

