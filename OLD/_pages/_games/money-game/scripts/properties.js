
// Generates the types of properties
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
        const expenses = property_types.price * Math.random() * (0.12 - 0.01) + 0.01;
        const incomes = (price / 12) / reimburse_in_years;
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

// List of the planet icons
const planetIcons = [
    "/_pages/_games/money-game/prologue/images/property-icons/icons8-mercury-planet-100.png",
    "/_pages/_games/money-game/prologue/images/property-icons/icons8-moon-100.png",
    "/_pages/_games/money-game/prologue/images/property-icons/icons8-planet-101.png",
    "/_pages/_games/money-game/prologue/images/property-icons/icons8-planet-100.png",
    "/_pages/_games/money-game/prologue/images/property-icons/icons8-venus-planet-100.png"
];

// Generates a random planet icon
function randomPlanetIcon() {
    const planetIcon = Math.floor(Math.random() * (4 - 0) - 0);
    return `url(${planetIcons[planetIcon]})`;
}

// Generates an adress for the planets properties
function randomPlanetLocation() {
    const planetName = Math.floor(Math.random() * (79 - 0) + 0);
    const planetDistance = Math.floor(Math.random() * (199999999 - 500) + 500);

    return (`${planet_locations[planetName]}, ${planetDistance} light years`);
}

// Generates an adress for the houses properties
function randomAdress() {
    const streetIndex = Math.floor(Math.random() * (49 - 0) + 0);
    const addressNumber = Math.floor(Math.random() * (99999 - 100) + 100);

    return (`${addressNumber}, ${street_names[streetIndex]}`);
}

// Generates an adress for the islands properties
function randomIslandLocation() {
    const islandLocationIndex = Math.floor(Math.random() * (33 - 0) + 0);
    const islandName = "Island";

    return (`${islandName}, ${island_locations[islandLocationIndex]}`);
}

// Generates the property listing in the housing market page
function generateProperties() {
    const currentProperties = Math.floor(Math.random() * (129 - 28) + 28);
    currently_generated_properties += currentProperties;

    if (currently_generated_properties < maximum_generated_properties) {
        for (let i = 0; i < currentProperties; i++) {
            doPropertyTypes();

            const keys = Object.keys(property_types);
            const property = keys[Math.floor(Math.random() * keys.length)];
            const name_of_property = property_types[property].name;
            const price_of_property = property_types[property].price;
            const property_adress = randomAdress();
            const island_location = randomIslandLocation();
            const planet_location = randomPlanetLocation();
            const property_label = () => {
                if (property === "Planet") {
                    return planet_location;
                } else if (property === "Island") {
                    return island_location;
                } else {
                    return property_adress;
                }
            };

            const propertyElement = document.createElement('div');
            propertyElement.style = `height: auto; padding: 5px; cursor: pointer; gap: 5px; border: 1px solid white; border-radius: 6px; display: flex;`;
            propertyElement.onclick = function () {
                if (bank_account_holdings >= price_of_property) {
                    createPopupWindow("Buy with bank", "Do you want to buy this property with your bank holdings?", "No", "Yes", undefined, function () {
                        monthly_profit -= price_of_property;
                        bank_account_holdings -= price_of_property;
                        updateBankHoldings();
                        total_property_value += price_of_property;
                        doNotification(`You just bought a ${name_of_property} for ${doMoneyNotation(price_of_property)}`);
                        bought_properties.push({ adress: property_label(), name: name_of_property, price: price_of_property });
                        updateManagePropertyWindow(name_of_property, price_of_property);
                        updateStatsMenu();
                        propertyElement.remove();
                    });
                    if (money >= price_of_property) {
                        createPopupWindow("Buy with money", "Do you want to buy this property with your cash money? Click no to see the other option", "No", "Yes", undefined, function () {
                            monthly_profit -= price_of_property;
                            money -= price_of_property;
                            total_property_value += price_of_property;
                            doNotification(`You just bought a ${name_of_property} for ${doMoneyNotation(price_of_property)}`);
                            bought_properties.push({ adress: property_label(), name: name_of_property, price: price_of_property });
                            updateManagePropertyWindow(name_of_property, price_of_property);
                            updateStatsMenu();
                            propertyElement.remove();
                        });
                    }
                } else {
                    createPopupWindow("Alert", "You don't have enough money to buy this property", "Ok");
                }

            }
            document.getElementById('property-list').appendChild(propertyElement);

            const leftContainer = document.createElement('div');
            propertyElement.appendChild(leftContainer);

            const propertyPicture = document.createElement('div');
            propertyPicture.style = `height: 100px; width: 100px; background-repeat: no-repeat; background-position: center; background-size: 50%; border: 1px solid white;`
            if (property === "Planet") {
                propertyPicture.style.backgroundImage = randomPlanetIcon();
            } else if (property === "Island") {
                propertyPicture.style.backgroundImage = `url(/_pages/_games/money-game/prologue/images/property-icons/icons8-island-100.png)`
            } else if (property === "Apartement" || property === "Condo") {
                propertyPicture.style.backgroundImage = `url(/_pages/_games/money-game/prologue/images/property-icons/icons8-apartement-100.png)`;
            } else if (property === "House") {
                propertyPicture.style.backgroundImage = `url(/_pages/_games/money-game/prologue/images/property-icons/icons8-house-100.png)`;
            } else if (property === "Castle") {
                propertyPicture.style.backgroundImage = `url(/_pages/_games/money-game/prologue/images/property-icons/icons8-castle-100.png)`;
            } else if (property === "Mansion") {
                propertyPicture.style.backgroundImage = `url(/_pages/_games/money-game/prologue/images/property-icons/icons8-mansion-100.png)`;
            }
            leftContainer.appendChild(propertyPicture);

            const middleContainer = document.createElement('div');
            propertyElement.appendChild(middleContainer);

            const propertyAdress = document.createElement('div');
            propertyAdress.style = `font-size: 18px; font-weight: bold; font-weight: bold; color: white;`;
            propertyAdress.textContent = property_label();

            middleContainer.appendChild(propertyAdress);

            const propertyPrice = document.createElement('div');
            propertyPrice.style = `font-size: 16px; font-weight: bold; color: green;`;
            propertyPrice.textContent = `${doMoneyNotation(price_of_property)}`;
            middleContainer.appendChild(propertyPrice);

            const propertyType = document.createElement('div');
            propertyType.style = `font-size: 16px; font-weight: bold; color: white;`;
            propertyType.textContent = `${name_of_property}`;
            middleContainer.appendChild(propertyType);

            const rightContainer = document.createElement('div');
            rightContainer.style = ``;

        }
        if (!housing_market_message_has_played) {
            housing_market_message_has_played = true;
        } else {
            doNotification("Hey there, new properties are available to buy, come check them out now before it's too late.");
        }
    }
}