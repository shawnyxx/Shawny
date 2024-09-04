
const manage_property_window = document.getElementById(
  "manage-property-window"
);

const property_list = document.getElementById("property-window-content");

function closeManagePropertyWindow() {
  manage_property_window.style.display = "none";
}

function openManagePropertyWindow() {
  manage_property_window.style.display = "block";
}

function updateManagePropertyWindow() {
  property_list.innerHTML = "";

  for (let i = 0; i < bought_properties.length; i++) {
    const property = bought_properties[i];
    const propertyName = property.name;
    const propertyValue = property.price;
    const propertyAdress = randomAdress();

    const propertyElement = document.createElement("div");
    propertyElement.id = "property-element";
    propertyElement.style.cssText = `
      width: 100%;
      height: 50px;
      overflow: hidden;
      right: 0;
      top: 0;

    `;

    const houseTypeContainer = document.createElement("div");
    houseTypeContainer.id = "house-type-container";
    houseTypeContainer.style.cssText = `
      paddingLeft: 15px;
      textAlign: left;    
    `;
    houseTypeContainer.textContent = `${propertyName} on ${propertyAdress}`;

    const houseControlButtons = document.createElement("div");
    houseControlButtons.id = "house-control-buttons";

    const sellPropertyButton = document.createElement("button");
    sellPropertyButton.id = "sell-house-button";

    sellPropertyButton.onclick = function () {
      doNotification(
        `You sold your ${propertyName} for $${shortenMoneyDisplay(
          propertyValue
        )}`
      );
      money += propertyValue;
      total_net_worth += propertyValue;
      bought_properties.splice(0, 1);
      total_property_value -= propertyValue;
      updateStatsMenu();
      propertyElement.remove();
    };

    sellPropertyButton.innerText = `Sell for $${shortenMoneyDisplay(
      propertyValue
    )}`;

    property_list.append(propertyElement);
    propertyElement.append(houseTypeContainer);
    propertyElement.append(houseControlButtons);
    houseControlButtons.append(sellPropertyButton);
  }
}

