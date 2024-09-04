let cryptoGains = [];

let cryptoAccountOpened = false;
let cryptoAccountWasClosed = false;

let gain = "";

let crypto_percentage = 0;

let crypto_going_up_or_down;

const minimum_crypto_percentage = -40;
const maximum_crypto_percentage = 75;

const gainsList = document.getElementById('crypto-gains-menu-list');
gainsList.innerHTML = '';

function openCryptoAccount() {
    if (!cryptoAccountOpened) {
        cryptoAccountOpened = true;
        doNotification('Crypto Market LTD: Congradulation, You just opened a Crypto Account', 'white', 'green');
        addAction('Opened a Crypto Account');
        let gain_announce_1 = document.createElement('div');
        gain_announce_1.classList.add('action');
        gain_announce_1.textContent = 'Message from Crypto Market Ltd: We are happy to have you on board.';
        gainsList.prepend(gain_announce_1)
        document.getElementById('cryptoAccountButton').textContent = 'Close Crypto Account';
    } else if (cryptoAccountOpened) {
        cryptoAccountOpened = false;
        addAction('You successfuly closed your crypto account.');
        let gain_announce_2 = document.createElement('div');
        gain_announce_2.classList.add('action');
        gain_announce_2.textContent = 'Message from Crypto Market Ltd: We are sorry to see you leave.';
        gainsList.prepend(gain_announce_2)
        document.getElementById('cryptoAccountButton').textContent = '💹 Open Crypto Account (Free)';
    }
}


function updateCrypto() {
    if (money < 100000000 && cryptoAccountOpened) {
        if (money >= 0) {


            crypto_percentage = Math.random() * (maximum_crypto_percentage - minimum_crypto_percentage) + minimum_crypto_percentage;

            if (crypto_percentage > 1) {
                crypto_going_up_or_down = 'up';
                let gain = `Crypto Gains: Increased by ${crypto_percentage.toFixed(0)}%`;
                addAction(`Crypto Account: Funds increased by ${crypto_percentage.toFixed(0)}%`);
                doNotification(`Crytpo +$${shortenMoneyDisplay(money * (crypto_percentage / 100))}`, 'green', 'green');

                monthly_profit += (money * crypto_percentage / 100);
                money += (money * crypto_percentage / 100);

                const increasing_gain = document.createElement('div');
                increasing_gain.classList.add('action');
                increasing_gain.style.color = 'Green';
                increasing_gain.textContent = gain;
                gainsList.prepend(increasing_gain);

                updateCounter();
                updateStats();
            } else if (crypto_percentage < -1) {
                crypto_going_up_or_down = 'down';
                let gain = `Crypto Gains: Decreased by ${crypto_percentage.toFixed(0)}%`;
                addAction(`Crypto Account: Funds decreased by ${crypto_percentage.toFixed(0)}%`);
                doNotification(`Crytpo -$${shortenMoneyDisplay(money * (crypto_percentage / 100))}`, 'red', 'green');

                monthly_profit += (money * crypto_percentage / 100);
                money += (money * crypto_percentage / 100);

                const decreasing_gain = document.createElement('div');
                decreasing_gain.classList.add('action');
                decreasing_gain.style.color = 'Red';
                decreasing_gain.textContent = gain;
                gainsList.prepend(decreasing_gain);

                updateCounter();
                updateStats();
            } else if (crypto_percentage > -1 && crypto_percentage < 1) {
                crypto_going_up_or_down = 'none';
                let gain = `Crypto Gains: Market Stagnating`;
                addAction(`Crypto Account: Funds are stagnating`);
                doNotification('Crypto Stagnating', 'gray', 'green');

                const stagnating_gain = document.createElement('div');
                stagnating_gain.classList.add('action');
                stagnating_gain.style.color = 'Grey';
                stagnating_gain.textContent = gain;
                gainsList.prepend(stagnating_gain);

                updateCounter();
                updateStats();
            }




        } else {
            addAction("There is a problem with your bank balance, your Crypto wallet could not be fetch.");
            cryptoGains.push("Null Error");
        }

    } else if (money > 100000000 && cryptoAccountOpened) {
        if (!cryptoAccountWasClosed) {
            cryptoAccountOpened = false;
            cryptoAccountWasClosed = true;
            document.getElementById('cryptoAccountButton').disabled = true;
            document.getElementById('cryptoAccountButton').innerHTML = 'Crypto Account Closed';
            document.getElementById('cryptoAccountButton').style.color = 'red';
            gainsList.prepend('Your crypto account has been closed by Crypto Market LTD. Reason: You are too rich');
            doNotification('Your Crypto Account was closed by Crypto Market LTD because your are too rich', 'red');
            addAction('Crypto Market LTD closed your crypto account');
        }
    }
}




function viewCryptoGains() {
    document.getElementById('crypto-gains-bttn').disabled = true;
    document.getElementById('crypto-gains-menu').style.display = 'block';
    closePropertyMenu()
    closeUpgradeMenu()
    closeStats()
}


function closeCryptoGains() {
    document.getElementById('crypto-gains-menu').style.display = 'none'
    document.getElementById('crypto-gains-bttn').disabled = false;
}
