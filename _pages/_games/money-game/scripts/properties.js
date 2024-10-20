
function doPropertyFinances() {
    properties_finances = {
        incomes: (Math.random() * (60 - 20) + 40) / 100,
        expenses: (Math.random() * (40 - 10) + 10) / 100
    };
}



function doPropertyTypes() {
    property_types = {
        "Apartement": {
            name: "🏢 Apartement",
            description: "Buy an apartement or pay rent monthly. (Cannot be rented)",
            price: Math.random() * (500000 - 50000) + 50000,
        },
        "Condo": {
            name: "🏬 Condo",
            description: "Buy a luxury condo and enjoy the top view of the city from the confort of your couch.",
            price: Math.random() * (1000000 - 100000) + 100000

        },
        "House": {
            name: "🏠 House",
            description: "Buy a house and enjoy the peace and quiet of the suburbs.",
            price: Math.random() * (30000000 - 400000) + 400000
        },
        "Castle": {
            name: "🏰 Castle",
            description: "Buy a castle and live like a king.",
            price: Math.random() * (800000000 - 29000000) + 29000000
        },
        "Mansion": {
            name: "🏡 Mansion",
            description: "Buy a mansion and live like a millionaire.",
            price: Math.random() * (4000000000 - 500000000) + 500000000
        },
        "Island": {
            name: "🏝️ Private Island",
            description: "Have your very own private Island somewhere in the see.",
            price: Math.random() * (85000000000, 20000000000)
        },
        "Planet": {
            name: "🌎 Planet",
            planet_name: "My planet",
            description: "Buy a planet and name it whatever you want. It is going to be part of the Nasa data.",
            price: 1000000000000
        }
    };
}

// Function to set the properties incomes and expenses
function propertiesIncomeExpense() {
    const total_profit = bought_properties.reduce((acc, property) => {
        const price = property.price;
        const expenses = price * properties_finances.expenses;
        const incomes = price * properties_finances.incomes;
        profit = incomes - expenses;
        monthly_profit += profit;
        money += profit;
        shortenMoneyDisplay(profit);
        return acc + profit;
    }, 0);
    if (profit > 0) {
        addAction(`Incomes from properties: ${shortenMoneyDisplay(total_profit)}`);
    }
}

// Function to buy a property
function buyProperty(property_name) {
    const property_type = property_types[property_name];
    const property_price = property_type.price;

    if (money >= parseInt(property_price)) {
        monthly_profit -= property_price;
        money -= property_price;
        total_property_value += property_price;
        doNotification(`You just bought a ${property_type.name} for ${doMoneyNotation(property_price)}`);
        bought_properties.push({ name: property_type.name, price: property_price });
        updateManagePropertyWindow(property_type.name, property_price);
        updateBoughtPropertiesElement();
    } else {
        createPopupWindow("Alert", "You don't have enough money to buy this property", "Ok");
    }
}
