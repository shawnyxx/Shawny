let debugButtonClickCount = 0;
let debug_mode_triggered = false;


function handleDebugButtonClick() {
    debugButtonClickCount++
    if (debugButtonClickCount >= 5) {
        if (!debug_mode_triggered) {
            addAction('Debug mode toggled. You better not make a mess.');
        }
        debug_mode_triggered = true;
        openDebugMenu()
        document.getElementById('debug-button').style.opacity = 100;
    }
}


function openDebugMenu() {
    document.getElementById('debug-menu').style.display = 'block';
}


function closeDebugMenu() {
    document.getElementById('debug-menu').style.display = 'none';
}


function setMoney() {
    const moneyInput = document.getElementById('moneyInput').value;
    money = parseFloat(moneyInput);
    updateCounter();
    addAction(`Money set to $${money.toLocaleString('en-US', { minimumFractionDigits: 2 })} via debug menu`);
    closeDebugMenu();
}
