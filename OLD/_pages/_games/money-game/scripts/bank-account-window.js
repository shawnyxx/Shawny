const holding_element = document.getElementById('holdings');
const bank_account_window = document.getElementById('bank-account-window');
const open_bank_account_button = document.getElementById('open-bank-account-bttn');
const view_bank_account_window_bttn = document.getElementById('view-bank-account-window-bttn');

function openBankAccount() {
    // Sets the flag to true to tell that the bank account window is open
    bank_account_opened = true;

    // Update the bank_account_data array
    bank_account_data[0] = bank_account_opened; // Update bank_account_opened in the array

    // Disable the "Open Bank Account" button and enable the "View Bank Account" button
    open_bank_account_button.disabled = true;
    view_bank_account_window_bttn.disabled = false;

    // Show a notification to the player
    doNotification("You just opened a bank account. All the funds in your account will be secure", undefined, "green");

    // Update the holdings
    updateBankHoldings();

    // Store the updated data (this assumes setStoredData is a function that stores game data)
    setStoredData("money game");
}

function updateBankHoldings() {
    holding_element.textContent = doMoneyNotation(bank_account_holdings);
    updateCounter();
}

function depositMoney() {
    createPopupWindow(
        "Deposit Money", 
        "How much would you like to deposit?", 
        "Cancel", 
        "Ok",
        undefined,
        function(value) { 
            if (value > 0 && value <= money) {
                money -= value;
                bank_account_holdings += value;
                bank_account_data[1] = bank_account_holdings;
                audioPlay("/_pages/_games/money-game/audio/audio-files/bank-sound.mp3");
                updateBankHoldings();  // Update the bank display
                doNotification(`Deposited ${value}`, undefined, "green"); // Show success notification
                setStoredData("money game");
            } else {
                createPopupWindow('Alert', 'Invalid amount. You cannot deposit more than you have.', 'Ok', undefined, undefined);
            }
        }, 
        true
    );
}

function withdrawMoney() {
    createPopupWindow(
        "Withdraw Money", 
        "How much would you like to withdraw?", 
        "Cancel", 
        "Ok",
        undefined,
        function(value) { 
            if (value > 0 && value <= bank_account_holdings) {
                money += value;
                bank_account_holdings -= value;
                bank_account_data[1] = bank_account_holdings;
                audioPlay("/_pages/_games/money-game/audio/audio-files/bank-sound.mp3");
                updateBankHoldings();  // Update the bank display
                doNotification(`Withdrew ${value}`, undefined, "green"); // Show success notification
                setStoredData("money game");
            } else {
                createPopupWindow('Alert', 'Invalid amount. You cannot deposit more than you have.', 'Ok', undefined, undefined);
            }
        }, 
        true
    );
}

function updateBankAccountElements() {
    if (bank_account_data[0] === true) {
        open_bank_account_button.disabled = true
        view_bank_account_window_bttn.disabled = false;
    } else {
        open_bank_account_button.disabled = false;
        view_bank_account_window_bttn.disabled = true;
    }
}

function viewBankAccountWindow() {
    bank_account_window.style.display = 'block';
    bank_account_window.classList.add('open');
    bank_account_window.style.scale = '1';
    bank_account_window.classList.remove('close');
}

function closeBankAccountWindow() {
    bank_account_window.classList.add('close');
    bank_account_window.classList.remove('open');
}