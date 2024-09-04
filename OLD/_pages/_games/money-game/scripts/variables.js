
// Money variable
let money = 0;

// Money machine related variables
let money_per_tap = 0; //salary of the money machine
let money_machine_price = 500;

// Job related variables
let job = false;
let paycheck = 0;
let work_multiplier = 1;
let salary = 1;
let working_hours = 40;

// Time related variables
let year = 0;
let month_index = 0;
let month_length = 30000;
let day = 1;
let year_date = 2012;

// Money infos
let total_net_worth = 0;
let monthly_profit = 0;
let profit = 0;

// Interest modifiers
let interest = 0.02;
let interest_rate = 1.9;

// Anti-autoclicker settings
let taps_per_seconds = 0;
let autoclicker_ban = false;

// Has the game started?
let game_started = false;

// Property related variables
let bought_properties = [];
let property_types = {};
let total_property_value = 0;
let reimburse_in_years = 5;

// Crypto related variables
let cryptoAccountOpened = false;
let cryptoGains = [];
let gain = "";
let crypto_percentage = 0;
let crypto_going_up_or_down;
let crypto_graph_labels = [];
let crypto_graph_data = [];

// Spamm upgrade related variables
let spammUpgradePrice = 1000;

// Housing market
let housing_market_message_has_played = false;
let maximum_generated_properties = 500;
let currently_generated_properties = 0;

// Education
let isStudying = false; // Are you studying
let degree_data = []; // Information about the degree you are studying
let disabled_degree_buttons_id = []; // List of disabled degree buttons
let obtained_degrees = []; // List of obtained degrees

// Bank account
let bank_account_opened = false;
let bank_account_holdings = 0;
let bank_account_interest = 0.04;
let bank_account_data = [bank_account_opened, bank_account_holdings, bank_account_interest];

// Notes
let notes = "";


function resetVariables() {        
    // Money variable
    money = 0;

    // Money machine related variables
    money_per_tap = 0; //salary of the money machine
    money_machine_price = 500;

    // Job related variables
    job = false;
    paycheck = 0;
    work_multiplier = 1;
    salary = 1;
    working_hours = 40;

    // Time related variables
    year = 0;
    month_index = 1;
    month_length = 30000;
    day = 1;
    year_date = 2012;

    // Money infos
    total_net_worth = 0;
    monthly_profit = 0;
    profit = 0;

    // Interest modifiers
    interest = 0.02;
    interest_rate = 1.9;

    // Anti-autoclicker settings
    taps_per_seconds = 0;
    autoclicker_ban = false;

    // Has the game started?
    game_started = false;

    // Property related variables
    bought_properties = [];
    property_types = {};
    total_property_value = 0;
    reimburse_in_years = 5;

    // Crypto related variables
    cryptoAccountOpened = false;
    cryptoGains = [];
    gain = "";
    crypto_percentage = 0;
    crypto_going_up_or_down;
    crypto_graph_labels = [];
    crypto_graph_data = [];

    // Spamm upgrade related variables
    spammUpgradePrice = 1000;

    // Housing market
    housing_market_message_has_played = false;
    maximum_generated_properties = 500;
    currently_generated_properties = 0;

    // Education
    isStudying = false;
    degree_data = [];
    disabled_degree_buttons_id = [];
    obtained_degrees = [];

    // Bank account
    bank_account_opened = false;
    bank_account_holdings = 0;
    bank_account_interest = 0.04;
    bank_account_data = [bank_account_opened, bank_account_holdings, bank_account_interest];

    // Notes
    notes = "";
}