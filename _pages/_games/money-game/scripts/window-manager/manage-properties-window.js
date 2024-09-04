const manage_property_window = document.getElementById('manage-property-window');

const property_list = document.getElementById('property-window-content');

function closeManagePropertyWindow() {
  manage_property_window.style.display = 'none';
}

function openManagePropertyWindow() {
  manage_property_window.style.display = 'block';
}



function updateManagePropertyWindow(propertyName, propertyValue) {

  const property_element = document.createElement('div');
  property_element.id = 'property-element';
  property_element.style.width = '100%';
  property_element.style.height = '50px';
  property_element.style.right = '0';
  property_element.style.top = '0';

  const house_type_container = document.createElement('div');
  house_type_container.id = 'house-type-container';
  house_type_container.style.paddingLeft = '15px';
  house_type_container.style.textAlign = 'left';
  house_type_container.innerText = propertyName;

  const house_control_buttons = document.createElement('div');
  house_control_buttons.id = 'house-control-buttons';

  const sell_property_button = document.createElement('button');
  sell_property_button.id = 'sell-house-button';
  sell_property_button.onclick = function () {

    doNotification(`You sold your ${propertyName} for $${shortenMoneyDisplay(propertyValue)}`);

    money += propertyValue;

    bought_properties.splice(bought_properties.indexOf(propertyName), 1);

    total_property_value -= propertyValue;

    updateProfile();

    property_element.remove();

    console.log(`Selling ${propertyName} for $${shortenMoneyDisplay(propertyValue)}`);

  }

  sell_property_button.innerText = `Sell for $${shortenMoneyDisplay(propertyValue)}`;


  property_list.append(property_element);

  property_element.append(house_type_container);

  property_element.append(house_control_buttons);
  house_control_buttons.append(sell_property_button);
}




const draggTrigger = document.getElementById('dragg');
const draggableDiv = document.getElementById('manage-property-window');
let isDragging = false;
let startX, startY, initialX, initialY;

draggTrigger.addEventListener('mousedown', (event) => {
  isDragging = true;
  startX = event.clientX;
  startY = event.clientY;
  initialX = draggableDiv.offsetLeft;
  initialY = draggableDiv.offsetTop;
});

document.addEventListener('mousemove', (event) => {
  if (isDragging) {
    const newX = initialX + event.clientX - startX;
    const newY = initialY + event.clientY - startY;
    draggableDiv.style.top = `${newY}px`;
    draggableDiv.style.left = `${newX}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
