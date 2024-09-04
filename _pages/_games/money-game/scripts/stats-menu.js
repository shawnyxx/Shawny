
let tax_rate = [];

let tax_amount = [];


function viewStats() {
    document.getElementById('browser').style.display = 'block'
    document.querySelectorAll('[id="stats-menu"]').forEach(element => {
        element.style.display = 'block';
    });
    document.getElementById('stats-bttn').disabled = true;
    closePropertyMenu()
    closeCryptoGains()
    closeUpgradeMenu()
}


function closeStats() {
    document.querySelectorAll('[id="stats-menu"]').forEach(element => {
        element.style.display = 'none';
    });
    document.getElementById('stats-bttn').disabled = false;
}


function updateStats() {
    const time = document.getElementById('time-of-year');
    const age = document.getElementById('age');
    const your_money = document.getElementById('current-money');


    time.textContent = `Current month: ${month[monthIndex]}`;
    age.textContent = `You have existed for: ${year} year(s) and ${monthIndex - 1} months.`;
}

function updateProfile() {
    let total_properties = document.getElementById('total-properties');
    total_properties.textContent = `Total Properties: (${bought_properties.length}) Total value: $${shortenMoneyDisplay(total_property_value)}`;
}

function updateNetWorth() {
    let net_worth = document.getElementById('net-worth');

    total_net_worth = money + total_property_value;

    net_worth.style.color = 'Green';
    net_worth.textContent = `$${doMoneyNotation(total_net_worth)}`;
}

function updateFinancialReport() {
    let last_month_profit = document.getElementById('last-month-profit');

    if (monthly_profit > 0) {
        last_month_profit.style.color = 'green';
    } else if (monthly_profit < 0) {
        last_month_profit.style.color = 'red';
    }

    last_month_profit.textContent = `$${doMoneyNotation(monthly_profit)}`;
}

function updateSalary() {
    let salary = document.getElementById('salary');

    salary.style.color = 'green'
    salary.textContent = `$${shortenMoneyDisplay(moneyPerTap)} per tap`;
}