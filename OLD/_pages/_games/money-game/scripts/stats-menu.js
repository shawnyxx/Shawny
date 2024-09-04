// For any function that updates the elements on the stats menu, use update + NameOfElement + Element + ()
// For example, for a function  that updates the the net worth info on the stats menu, use updateNetWorthElement()

// References to elements IDs
const time_element = document.getElementById("time-of-year");
const age_element = document.getElementById("age");
const net_worth_element = document.getElementById("net-worth");
const salary_element = document.getElementById("salary");
const tax_element = document.getElementById('last-taxes');
const interest_text = document.getElementById('interest');
const total_property_element = document.getElementById("total-properties");
const monthly_profit_element = document.getElementById("last-month-profit");

// Update the time counter
function updateTimeElement() {
  time_element.textContent = `Current month: ${months[month_index]}`;
  age_element.textContent = `You have existed for: ${year} year(s) and ${month_index} months.`;
}

// Update the net worth element
function updateNetWorthElement() {
  total_net_worth = money + total_property_value + bank_account_holdings;
  net_worth_element.style.color = "Green";
  net_worth_element.textContent = `${doMoneyNotation(total_net_worth)}`;
}

// Update the monthly profit element
function updateMonthlyProfitElement() {
  if (monthly_profit > 0) {
    monthly_profit_element.style.color = "green";
  } else if (monthly_profit < 0) {
    monthly_profit_element.style.color = "red";
  }
  monthly_profit_element.textContent = `${doMoneyNotation(monthly_profit)}`;
}

// Update the the salary element
function updateSalaryElement() {
  if (money_per_tap > 0) {
    salary_element.style.color = "red";
    salary_element.textContent = `🏴‍☠️ ${shortenMoneyDisplay(money_per_tap + salary)} 🏴‍☠️`;
  } else {
    salary_element.style.color = "green";
    salary_element.textContent = `${doMoneyNotation(salary)}`;
  }
}

// Update the bought properties element
function updateBoughtPropertiesElement() {
  total_property_element.textContent = `🏡 Total Properties: (${bought_properties.length}) Total value: ${shortenMoneyDisplay(total_property_value)}`;
}

// Update the taxes element
function updateTaxElement() {
  tax_element.innerText = `${doMoneyNotation(taxes)}`;
}

// Update the interest element
function updateInterestElement() {
  interest_text.innerText = `${doMoneyNotation(interest)}`;
}

// Update the studies element
function updateStudiesElement(action) {
  if (action == undefined) {
    return;
  } else if (action == "update degree progress") {
    const studies_element = document.getElementById('studies');

    if (isStudying) {
      studies_element.textContent = `Studying ${degree_data.name} in ${degree_data.field} (${degree_data.length} years and ${12 - month_index} months left)`;
    } else {
      studies_element.textContent = "Not studying";
    }
  }
}

// Update the stats menu with updated information
function updateStatsMenu() {
  updateTimeElement();
  updateNetWorthElement()
  updateMonthlyProfitElement();
  updateSalaryElement();
  updateBoughtPropertiesElement();
  updateTaxElement();
  updateInterestElement();
}