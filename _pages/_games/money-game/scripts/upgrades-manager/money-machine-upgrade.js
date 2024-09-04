let moneyMachinePrice = 500;
let moneyMachinePercentage = 0;

const money_machine_button = document.getElementById('moneyMachineButton');

function doMoneyMachineButton(price) {
    money_machine_button.textContent = `💸 Buy Money Machine ($${doMoneyNotation(price)})`;
}

function buyMoneyMachine() {
    if (moneyMachinePrice > 15000000) {
        money_machine_button.innerText = 'No more upgrades available.';
        money_machine_button.disabled = true;
    } else if (money >= moneyMachinePrice) {
        addAction(`You bought a money machine for $${shortenMoneyDisplay(moneyMachinePrice)}, you will now make $${shortenMoneyDisplay(moneyPerTap)} per taps`);
        doNotification(`You bought a money machine, will now make $${shortenMoneyDisplay(moneyPerTap)} per taps`)
        money -= moneyMachinePrice;
        moneyMachinePercentage = Math.random() * (100 - 25) + 25;
        moneyPerTap = moneyPerTap + moneyPerTap * doPercentage(moneyMachinePercentage);
        moneyMachinePrice = moneyMachinePrice * 1.6;
        doMoneyMachineButton(moneyMachinePrice);
        updateSalary();
        updateCounter();
    } else if (money < moneyMachinePrice) {
        alert("You don't have enough money to buy this upgrade.");
    }
}

doMoneyMachineButton(500);