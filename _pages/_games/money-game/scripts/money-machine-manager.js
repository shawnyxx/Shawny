// References to element IDs
const money_machine_button = document.getElementById('moneyMachineButton');

// Update the money machine button
function doMoneyMachineButton() {    
    if (money_per_tap > 0) {
        money_machine_button.textContent = `👆 Upgrade money machine (${doMoneyNotation(money_machine_price)})`;
    } else {
        money_machine_button.textContent = `💸 Buy Money Machine (${doMoneyNotation(money_machine_price)})`;
    }
}

function buyMoneyMachine() {
    if (money >= money_machine_price) {
        const moneyMachinePercentage = Math.floor(Math.random() * (120 - 12) + 12);
        money -= money_machine_price;
        money_per_tap += 1 * moneyMachinePercentage / 100;
        money_machine_price = money_machine_price * (Math.random() * (1.3 - 0.85) + 0.85);
        addAction(`You bought a money machine for ${shortenMoneyDisplay(money_machine_price)}, you will now make ${shortenMoneyDisplay(money_per_tap)} per taps`);
        doNotification(`You bought a money machine, you will now make ${shortenMoneyDisplay(money_per_tap)} per taps`);
        updateStatsMenu();
        doMoneyMachineButton();
        updateCounter();
    } else if (money < money_machine_price) {
        createPopupWindow("Alert", "You don't have enough money to buy this upgrade", "Ok");
    }
}
