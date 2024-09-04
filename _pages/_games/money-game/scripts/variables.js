
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
let month_index = 1;
let month_length = 30000;

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
let studying = false; // Are you studying
let current_degree = null; // Current type of your degree
let degree_years = 0; // Current year of the degree
let obtained_degrees = []; // List of all your obtained degrees
let high_school_button_disabled = false; // Is the high school button disabled?
let university_degrees_generated = false; // Has the degree list been generated?
let college_degrees_generated = false; // Has the degree list been generated?
let disabled_degree_buttons_id = [];

// Bank account
let bank_account_opened = false;
let bank_account_holdings = 0;
let bank_account_interest = 0.04;
let bank_account_data = [bank_account_opened, bank_account_holdings, bank_account_interest];

// Notes
let notes = "";


function resetVariables() {
    money = 0;
    money_per_tap = 0; //salary of the money machine
    money_machine_price = 500;
    job = false;
    paycheck = 0;
    timeMult = Math.floor(Math.random() * (100 - 30) + 30);
    salary = 1;
    working_hours = 40;
    year = 0;
    month_index = 1;
    month_length = 30000;
    total_net_worth = 0;
    monthly_profit = 0;
    profit = 0;
    interest = 0.02;
    interest_rate = 1.9;
    taps_per_seconds = 0;
    autoclicker_ban = false;
    game_started = false;
    bought_properties = [];
    property_types = {};
    total_property_value = 0;
    cryptoAccountOpened = false;
    cryptoGains = [];
    gain = "";
    crypto_percentage = 0;
    crypto_going_up_or_down;
    crypto_graph_labels = [];
    crypto_graph_data = [];
    spammUpgradePrice = 1000;
    housing_market_message_has_played = false;
    maximum_generated_properties = 500;
    currently_generated_properties = 0;
    studying = false;
    current_degree = null;
    degree_years = 0;
    obtained_degrees = [];
    high_school_button_disabled = false;
    university_degrees_generated = false;
    college_degrees_generated = false;
    disabled_degree_buttons_id = [];
    bank_account_opened = false;
    bank_account_holdings = 0;
    bank_account_interest = 0.04;
    bank_account_data = [bank_account_opened, bank_account_holdings, bank_account_interest]; 
    notes = "";
}