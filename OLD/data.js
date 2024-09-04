// The list for all the data in the game
let data = [
    {
        settings: {
            buttons: null
        }
    },
    {
        money_game: {
            // Money variable
            stored_money: null,

            // Money machine related variables
            stored_money_per_tap: null,
            stored_money_machine_price: null,

            // Job related variables
            stored_job: null,
            stored_paycheck: null,
            stored_work_multiplier: null,
            stored_salary: null,
            stored_working_hours: null,

            // Time related variables
            stored_year: null,
            stored_month_index: null,
            stored_month_length: null,
            stored_day: null,
            stored_year_date: null,

            // Money infos
            stored_total_net_worth: null,
            stored_monthly_profit: null,
            stored_profit: null,

            // Interest modifiers
            stored_interest: null,
            stored_interest_rate: null,

            // Anti-autoclicker settings
            stored_taps_per_seconds: null,
            stored_autoclicker_ban: null,

            // Has the game started?
            stored_game_started: null,

            // Property related variables
            stored_bought_properties: null,
            stored_property_types: null,
            stored_total_property_value: null,
            stored_reimburse_in_years: null,

            // Crypto related variables
            stored_cryptoAccountOpened: null,
            stored_cryptoGains: null,
            stored_gain: null,
            stored_crypto_percentage: null,
            stored_crypto_going_up_or_down: null,
            stored_crypto_graph_labels: null,
            stored_crypto_graph_data: null,

            // Spamm upgrade related variables
            stored_spammUpgradePrice: null,

            // Housing market
            stored_housing_market_message_has_played: null,
            stored_maximum_generated_properties: null,
            stored_currently_generated_properties: null,

            // Education
            stored_studying: null,
            stored_current_degree: null,
            stored_degree_years: null,
            stored_obtained_degrees: null,
            stored_high_school_button_disabled: null,
            stored_university_degrees_generated: null,
            stored_college_degrees_generated: null,
            stored_disabled_degree_buttons_id: null,

            // Bank account
            stored_bank_account_opened: null,
            stored_bank_account_holdings: null,
            stored_bank_account_interest: null,
            stored_bank_account_data: null,

            // Notes
            stored_notes: null,
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
                // Money variable
                stored_money: money,

                // Money machine related variables
                stored_money_per_tap: money_per_tap,
                stored_money_machine_price: money_machine_price,

                // Job related variables
                stored_job: job,
                stored_paycheck: paycheck,
                stored_work_multiplier: work_multiplier,
                stored_salary: salary,
                stored_working_hours: working_hours,

                // Time related variables
                stored_year: year,
                stored_month_index: month_index,
                stored_month_length: month_length,
                stored_day: day,
                stored_year_date: year_date,

                // Money infos
                stored_total_net_worth: total_net_worth,
                stored_monthly_profit: monthly_profit,
                stored_profit: profit,

                // Interest modifiers
                stored_interest: interest,
                stored_interest_rate: interest_rate,

                // Anti-autoclicker settings
                stored_taps_per_seconds: taps_per_seconds,
                stored_autoclicker_ban: autoclicker_ban,

                // Has the game started?
                stored_game_started: game_started,

                // Property related variables
                stored_bought_properties: bought_properties,
                stored_property_types: property_types,
                stored_total_property_value: total_property_value,
                stored_reimburse_in_years: reimburse_in_years,

                // Crypto related variables
                stored_cryptoAccountOpened: cryptoAccountOpened,
                stored_cryptoGains: cryptoGains,
                stored_gain: gain,
                stored_crypto_percentage: crypto_percentage,
                stored_crypto_going_up_or_down: crypto_going_up_or_down,
                stored_crypto_graph_labels: crypto_graph_labels,
                stored_crypto_graph_data: crypto_graph_data,

                // Spamm upgrade related variables
                stored_spammUpgradePrice: spammUpgradePrice,

                // Housing market
                stored_housing_market_message_has_played: housing_market_message_has_played,
                stored_maximum_generated_properties: maximum_generated_properties,
                stored_currently_generated_properties: currently_generated_properties,

                // Education
                stored_isStudying: isStudying,
                stored_degree_data: degree_data,
                stored_disabled_degree_buttons_id: disabled_degree_buttons_id,
                stored_obtained_degrees: obtained_degrees,

                // Bank account
                stored_bank_account_opened: bank_account_opened,
                stored_bank_account_holdings: bank_account_holdings,
                stored_bank_account_interest: bank_account_interest,
                stored_bank_account_data: bank_account_data,

                // Notes
                stored_notes: notes,
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

            // Load the stored data
            money = parsedData.stored_money;

            // Money machine related variables
            money_per_tap = parsedData.stored_money_per_tap;
            money_machine_price = parsedData.stored_money_machine_price;

            // Job related variables
            job = parsedData.stored_job;
            paycheck = parsedData.stored_paycheck;
            work_multiplier = parsedData.stored_work_multiplier;
            salary = parsedData.stored_salary;
            working_hours = parsedData.stored_working_hours;

            // Time related variables
            year = parsedData.stored_year;
            month_index = parsedData.stored_month_index;
            month_length = parsedData.stored_month_length;
            day = parsedData.stored_day;
            year_date = parsedData.stored_year_date;

            // Money infos
            total_net_worth = parsedData.stored_total_net_worth;
            monthly_profit = parsedData.stored_monthly_profit;
            profit = parsedData.stored_profit;
            interest = parsedData.stored_interest;
            interest_rate = parsedData.stored_interest_rate;

            // Anti-autoclicker settings
            taps_per_seconds = parsedData.stored_taps_per_seconds;
            autoclicker_ban = parsedData.stored_autoclicker_ban;

            // Has the game started?
            game_started = parsedData.stored_game_started;

            // Property related variables
            bought_properties = parsedData.stored_bought_properties;
            property_types = parsedData.stored_property_types;
            total_property_value = parsedData.stored_total_property_value;
            reimburse_in_years = parsedData.stored_reimburse_in_years;

            // Crypto related variables
            cryptoAccountOpened = parsedData.stored_cryptoAccountOpened;
            cryptoGains = parsedData.stored_cryptoGains;
            gain = parsedData.stored_gain;
            crypto_percentage = parsedData.stored_crypto_percentage;
            crypto_going_up_or_down = parsedData.stored_crypto_going_up_or_down;
            crypto_graph_labels = parsedData.stored_crypto_graph_labels;
            crypto_graph_data = parsedData.stored_crypto_graph_data;

            // Spamm upgrade related variables
            spammUpgradePrice = parsedData.stored_spammUpgradePrice;

            // Housing market
            housing_market_message_has_played = parsedData.stored_housing_market_message_has_played;
            maximum_generated_properties = parsedData.stored_maximum_generated_properties;
            currently_generated_properties = parsedData.stored_currently_generated_properties;

            // Education
            isStudying = parsedData.stored_isStudying;
            degree_data = parsedData.stored_degree_data;
            disabled_degree_buttons_id = parsedData.stored_disabled_degree_buttons_id;
            obtained_degrees = parsedData.stored_obtained_degrees;

            // Bank account
            bank_account_opened = parsedData.stored_bank_account_opened;
            bank_account_holdings = parsedData.stored_bank_account_holdings;
            bank_account_interest = parsedData.stored_bank_account_interest;
            bank_account_data = parsedData.stored_bank_account_data;

            // Notes
            notes = parsedData.stored_notes;

            
            // Give visual to the user
            updateLoadedData("money game");
            doNotification('Welcome back', undefined, undefined);
            addAction(`Loaded progress from last save: ${shortenMoneyDisplay(parsedData.stored_money)}, ${parsedData.stored_bought_properties.length} properties and a salary of ${doMoneyNotation(parsedData.stored_salary)} the hour .`, 'orange');
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

        // Updates the bank account menu
        updateBankAccountElements();
        updateBankHoldings();

        // Updates the stats menu
        updateStatsMenu();

        // Updates the crypto related elements
        updateCrypto();

        // Update the notebook
        updateNotes();

        // Updates the education menu
        updateEducationMenu();
        
    } else if (database === "settings") {
        updateSettings();
    }
}

function clearStoredData(database) {
    if (database === "money game") {
        // Resets the variables
        resetVariables();
        
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
