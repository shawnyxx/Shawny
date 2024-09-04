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

let monthLength = 30000;

let year = 0;
let monthIndex = 1;

function yearManager() {
    if (monthIndex < 12) {
        monthIndex++;
    } else {
        monthIndex = 1;
        year++;
    }
}


setInterval(() => {

    doNotification('A new month has just started, you can see you latest financial report in your stats dashboard.', 'orange', 'orange');

    let interestRate = Math.random() * (1.3 - 0.003) + 0.003;
    let interest = interestRate / 100;

    monthly_profit += interest;
    addAction(`Interest Rate: $${shortenMoneyDisplay(interest)} (${interestRate.toFixed(0)}%)`);

    if (spammUpgrade) {
        addAction('Your spamm technique stopped working, the very smart tech people patched it.');
        document.getElementById('spammUpgradeButton').disabled = false;
        spammUpgrade = false;
    }


    doTaxes();
    getPaycheck();
    updateCrypto();
    propertiesIncomeExpense();
    doPropertyFinances();
    yearManager();
    updateCounter();
    updateStats();
    updateFinancialReport();

    if (monthly_profit > 0) {
        addAction(`Last month's profit: $${shortenMoneyDisplay(monthly_profit)}`, 'Green');
    } else if (monthly_profit < 0) {
        addAction(`Last month's profit: $${shortenMoneyDisplay(monthly_profit)}`, 'Red');
    }

    monthly_profit = 0;

}, monthLength);


updateStats();