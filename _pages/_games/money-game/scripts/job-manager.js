


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

function getJob() {
    if (!job) {
        job = true;
        addAction('🧑‍🏭 You got a job');
        doNotification('You just got a job', 'white', 'brown');
        updateStatsMenu();
    } else {
        job = false;
        addAction('🚶 You quit your job');
        doNotification('You just quit your job', 'white', 'brown');
    }
}


setInterval(function () {
    if (job) {
        paycheck += money_per_tap;
        var timeMult = Math.floor(Math.random() * (100 - 30) + 30);
    }
}, timeMult);

