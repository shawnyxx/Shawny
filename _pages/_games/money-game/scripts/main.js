const money_counter = document.getElementsByClassName('counter');

// Start the game
function startGame() {
    game_started = true;
    start_menu_music.pause();
    soundtrackShuffling();
    getStoredData("money game");
    doCryptoButton();
    doPropertyTypes();
    doMoneyMachineButton();
    generateProperties();
    updateJobButton();
    updateEducationMenu();
    startMonth();
    updateStudiesElement();
    document.getElementById('menu').remove();
}

function commingSoon() { createPopupWindow("Coming Soon", "This feature is currently in development", "Ok", undefined, undefined); }


document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        buttonSound();
    });
});

function tapScreen() {
    if (game_started && can_click) {
        money += salary + money_per_tap;
        monthly_profit += salary + money_per_tap;
        taps_per_seconds += 1;
        updateCounter();
        setStoredData("money game");
        moneySound();
    }
}

function updateCounter() {
    if (game_started) {
        for (i = 0; i < money_counter.length; i++) {
            money_counter[i].textContent = `Money: ${doMoneyNotation(money)}`;
        }
        localStorage.setItem('money', parseFloat(money));
        updateStatsMenu();
    }
}

function suicide() {
    createPopupWindow('Alert', 'Are you sure you want to commit suicide?', 'No', 'Yes', 'suicideMoneyGame');
}

setInterval(() => {
    if (taps_per_seconds > 20 && !autoclicker_ban) {
        autoclicker_ban = true;
        createPopupWindow('Alert', 'It seems like you are using an autoclicker. Next time you use it, the page will reload. A solution would be to buy the spamm upgrade from the upgrade menu.', 'Ok', undefined, undefined);
    } else if (taps_per_seconds > 20 && autoclicker_ban == true) {
        createPopupWindow('Whomp Whomp', 'It seems like you have used an autoclicker once again. The page will now reload.', undefined, 'Ok', 'clearStoredData');
    }
    taps_per_seconds = 0;
}, 1000);

function addAction(actionText, textColor) {
    let actionElement = document.createElement('div');

    actionElement.classList.add('action');
    if (textColor) {
        actionElement.style.color = textColor;
    } else {
        actionElement.style.color = 'white';
    }
    actionElement.textContent = actionText;

    document.getElementById('actions').prepend(actionElement);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeBrowser();
    }
});

let spacePressed = false;

document.addEventListener('keydown', function(event) {
    if (event.key === ' ' && !spacePressed) {
        spacePressed = true;
        tapScreen();
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === ' ') {
        spacePressed = false;
    }
});

setInterval(function () {
    const eventChance = Math.floor(Math.random() * (100 - 0) + 0);
    if (eventChance === 0.001) {
        money = 0;
        properties = [];
        cryptoAccountOpened = false;
        addAction("You lost your memory, you don't remember anything, not even your bank account number.");
    } else if (eventChance === 0.005) {
        const stolenAmount = money * (Math.random() * (75 - 0) - 0) / 100;
        money -= stolenAmount;
        addAction('Someone hacked into your bank and robbed ' + percentage + '% of your money ($' + stolenAmount.toFixed(2) + '), the bank couldn\'t do anything. Sorry!');
    } else if (eventChance <= 0.002) {
        if (confirm('You died of an unknown reason. Do you want to restart?')) {
            suicide();
        }
    }
}, Math.random() * 120000 + 30000);

// All event listeners
document.addEventListener('click', tapScreen);
