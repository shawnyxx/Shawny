let data = [
    {
        settings: {
            buttons: null
        }
    },
    {
        money_game: {
            stored_money: null,
            stored_totalPropertiesValue: null,
            stored_boughtProperties: null,
            stored_moneyPerTap: null,
            stored_moneyMachinePrice: null,
            stored_year: null,
            stored_monthIndex: null,
            stored_cryptoAccount: null,
            stored_interest: null,
            stored_interest_rate: null
        }
    }
];

let settings = data[0].settings;
const storedData = localStorage.getItem('storedData');
const storedSettings = localStorage.getItem('storedSettings');

function setStoredData(database) {
    if (database === "money game") {
        if (money !== 0 && game_started) {
            data[1].money_game = {
                stored_money: money,
                stored_totalPropertiesValue: total_property_value,
                stored_boughtProperties: bought_properties,
                stored_moneyPerTap: money_per_tap,
                stored_moneyMachinePrice: money_machine_price,
                stored_year: year,
                stored_monthIndex: month_index,
                stored_cryptoAccount: cryptoAccountOpened,
                stored_interest: interest,
                stored_interest_rate: interest_rate
            };
            localStorage.setItem('storedData', JSON.stringify(data[1].money_game));
        }
    }
    if (database === "settings") {
        data[0].settings = {
            buttons: buttonEnabled
        };
        localStorage.setItem('storedSettings', JSON.stringify(data[0].settings));
    }
}

function getStoredData(database) {
    if (database === "money game") {
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            money = parsedData.stored_money;
            total_property_value = parsedData.stored_totalPropertiesValue;
            bought_properties = parsedData.stored_boughtProperties;
            money_per_tap = parsedData.stored_moneyPerTap;
            money_machine_price = parsedData.stored_moneyMachinePrice;
            year = parsedData.stored_year;
            month_index = parsedData.stored_monthIndex;
            cryptoAccountOpened = parsedData.stored_cryptoAccount;
            interest = parsedData.stored_interest;
            interest_rate = parsedData.stored_interest_rate;
            updateLoadedData("money game");
            doNotification('Welcome back', undefined, undefined);
            addAction(`Loaded progress from last save: ${shortenMoneyDisplay(parsedData.stored_money)}, ${parsedData.stored_boughtProperties.length} properties and a salary of ${shortenMoneyDisplay(parsedData.stored_moneyPerTap)} per tap.`, 'orange');
        } else {
            console.log("No stored data");
        }
    } else if (database === "settings") {
        if (storedSettings) {
            const parsedSettings = JSON.parse(storedSettings);
            buttonEnabled = parsedSettings.buttons;
            console.log(parsedSettings)
        }
    }
}

function updateLoadedData(database) {
    if (database === "money game") {
        updateCounter();
        updateManagePropertyWindow();
        doMoneyMachineButton();
        updateStatsMenu();
        updateCrypto();
    } else if (database === "settings") {
        updateSettings();
    }
}

function clearStoredData(database) {
    if (database === "money game") {
        money = 0;
        total_property_value = 0;
        bought_properties = [];
        money_per_tap = 0;
        money_machine_price = 0;
        year = 0;
        month_index = 0;
        cryptoAccountOpened = false;
        interest = 0.02;
        interest_rate = 1.9;
        localStorage.removeItem('storedData');
        location.reload();
    } else if (database === "settings") {
        localStorage.removeItem('storedSettings');
        location.reload();
    }
}

function suicideMoneyGame() {
    clearStoredData("money game");
}
