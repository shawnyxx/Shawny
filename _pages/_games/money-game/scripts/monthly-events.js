// Referencing the html elements
const month_indicator_element = document.getElementById('month-indicator');


const month = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
};

function yearManager() {
    if (month_index < 12) {
        month_index++;
    } else {
        month_index = 1;
        year++;
        addAction('A new year has just started.', 'orange');
        doNotification('A new year has started', 'white', 'orange');
        doInterest();
        doDegree();
        doTaxes();
        updateStatsMenu();
    }
}

function monthIndicator() {
    const increment = (150 - 0) / (month_length / 10);
    let currentWidth = 0;

    const interval = setInterval(() => {
        month_indicator_element.style.width = (currentWidth += increment) + 'px';
        if (currentWidth >= 150) clearInterval(interval);
    }, 10);
}

function startMonth() {
    monthIndicator();
    setInterval(() => {
        monthIndicator();

        yearManager();
        doNotification('A new month has just started, you can see you latest financial report in your stats dashboard.', 'orange', 'orange');
        if (spammUpgrade) {
            addAction('Your spamm technique stopped working, the very smart tech people patched it.');
            document.getElementById('spammUpgradeButton').disabled = false;
            spammUpgrade = false;
        }
        if (job) {
            audioPlay('./audio/audio-files/money-sound.mp3');
        }
        getPaycheck();
        propertiesIncomeExpense();
        updateCrypto();
        updateCounter();
        updateStatsMenu();
        updateStudiesElement();
        generateProperties();
        if (monthly_profit > 0) {
            doNotification(`Last month profit: ${shortenMoneyDisplay(monthly_profit)}`, 'green', 'green');
        } else if (monthly_profit < 0) {
            doNotification(`Last month profit: ${shortenMoneyDisplay(monthly_profit)}`, 'red', 'green');
        }

        const moneyMachineBreakChance = Math.floor(Math.random() * (100 - 1) + 1);
        if (moneyMachineBreakChance <= 25 && money_per_tap > 0) {
            money_per_tap = 0;
            updateSalaryElement();
            doNotification('Your money machine broke down, you will need to buy a new one.', 'red', 'red');
            doMoneyMachineButton();
        }

        monthly_profit = 0;

        setStoredData("money game");



    }, month_length);
}
