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
            stored_interest_rate: null,
            stored_crypto_graph_data: null,
            stored_crypto_graph_labels: null
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
                stored_interest_rate: interest_rate,
                stored_crypto_graph_data: crypto_graph_data,
                stored_crypto_graph_labels: crypto_graph_labels
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

            // Load the money
            money = parsedData.stored_money;

            // Load the property
            total_property_value = parsedData.stored_totalPropertiesValue;
            bought_properties = parsedData.stored_boughtProperties;

            // Load the money per taps
            money_per_tap = parsedData.stored_moneyPerTap;
            money_machine_price = parsedData.stored_moneyMachinePrice;

            // Load the time
            year = parsedData.stored_year;
            month_index = parsedData.stored_monthIndex;

            // Load the crypto account
            cryptoAccountOpened = parsedData.stored_cryptoAccount;
            crypto_graph_data = [...parsedData.stored_crypto_graph_data];
            crypto_graph_labels = [...parsedData.stored_crypto_graph_labels];
            cryptoChart.data.labels = crypto_graph_labels;
            cryptoChart.data.datasets[0].data = crypto_graph_data;
            cryptoChart.update();

            // Load the interest text element
            interest = parsedData.stored_interest;
            interest_rate = parsedData.stored_interest_rate;
            
            // Give visual to the user
            updateLoadedData("money game");
            doNotification('Welcome back', undefined, undefined);
            addAction(`Loaded progress from last save: ${shortenMoneyDisplay(parsedData.stored_money)}, ${parsedData.stored_boughtProperties.length} properties and a salary of ${shortenMoneyDisplay(parsedData.stored_moneyPerTap)} per tap.`, 'orange');
        } else {
            // Print no stored data in the console when no data is found
            console.log("No stored data for money game");
        }
    } else if (database === "settings") {
        if (storedSettings) {
            const parsedSettings = JSON.parse(storedSettings);
            buttonEnabled = parsedSettings.buttons;
            console.log(parsedSettings)
        } else {
            console.log("No stored settings");
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
