
// Money variable
let money = 0;

// Money machine related variables
let money_per_tap = 1;
let money_machine_price = 500;

// Job related variables
let job = false;
let paycheck = 0;
let timeMult = Math.floor(Math.random() * (100 - 30) + 30);
let salary = 0;
let working_hours = 40;

// Time related variables
let year = 0;
let month_index = 1;
let month_length = 1000;

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
let properties_finances;
let total_property_value = 0;

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
let studying = false;
let current_degree = null;
let degree_years = 0;
let obtained_degrees = [];