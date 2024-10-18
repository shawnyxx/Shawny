// The list for all the data in the game
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
            stored_crypto_graph_labels: null,
            stored_hasjob: null
        }
    }
];

// Constants variables related to the local storage method
const storedData = localStorage.getItem('storedData');
const storedSettings = localStorage.getItem('storedSettings');

function setStoredData(database) {
    if (database === "money game") {
        if (money !== 0 && game_started) {
            data[1].money_game = {
                // Stores the player money
                stored_money: money,

                // Stores info about the properties
                stored_totalPropertiesValue: total_property_value,
                stored_boughtProperties: bought_properties,

                // Stores the money per taps amount and manages the money machine
                stored_moneyPerTap: money_per_tap,
                stored_moneyMachinePrice: money_machine_price,

                // Stores time related values
                stored_year: year,
                stored_monthIndex: month_index,

                // Stores weither the player has an opened crypto account or not
                stored_cryptoAccount: cryptoAccountOpened,

                // Stores the interest related values
                stored_interest: interest,
                stored_interest_rate: interest_rate,

                // Stores the crypto graph data and labels
                stored_crypto_graph_data: crypto_graph_data,
                stored_crypto_graph_labels: crypto_graph_labels,

                // Stores the boolean job weither the player has a job or not
                stored_hasjob: job
            };
            localStorage.setItem('storedData', JSON.stringify(data[1].money_game));
        }
    }
    if (database === "settings") {
        data[0].settings = {
            // Stores the player button settings
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

            // Load the job
            job = parsedData.stored_hasjob;
            
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

            // Loads the button settings
            buttonEnabled = parsedSettings.buttons;
        } else {
            console.log("No stored settings");
        }
    }
}

function updateLoadedData(database) {
    if (database === "money game") {
        // Updates the in-game counter
        updateCounter();

        // Updates the manage properties window
        updateManagePropertyWindow();

        // Updates the money-machine button
        doMoneyMachineButton();

        // Updates the stats menu
        updateStatsMenu();

        // Updates the crypto related elements
        updateCrypto();
    } else if (database === "settings") {
        updateSettings();
    }
}

function clearStoredData(database) {
    if (database === "money game") {
        // Clears the money
        money = 0;

        // Clears the properties related variables
        total_property_value = 0;
        bought_properties = [];

        // Clears the money-machine/money-per-tap values
        money_per_tap = 0;
        money_machine_price = 0;

        // Clears the time related values
        year = 0;
        month_index = 0;

        // Clears the crypto account data
        cryptoAccountOpened = false;
        crypto_graph_data = [];
        crypto_graph_label = [];

        // Clears the job bool
        job = false;

        // Clears the interest data
        interest = 0.02;
        interest_rate = 1.9;
        
        localStorage.removeItem('storedData');

        // Reloads the page
        location.reload();
    } else if (database === "settings") {
        // Clears the storedData
        localStorage.removeItem('storedSettings');
        
        // Reloads the page
        location.reload();
    }
}

function suicideMoneyGame() {
    // Function used to reset data when suiciding
    clearStoredData("money game");
}
