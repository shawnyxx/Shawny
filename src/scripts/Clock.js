// Simple clock made for Money Game
// By Shawnyxx

const months = {
    1: { "name": "January", "days": 31 },
    2: { "name": "February", "days": 28 },
    3: { "name": "March", "days": 31 },
    4: { "name": "April", "days": 30 },
    5: { "name": "May", "days": 31 },
    6: { "name": "June", "days": 30 },
    7: { "name": "July", "days": 31 },
    8: { "name": "August", "days": 31 },
    9: { "name": "September", "days": 30 },
    10: { "name": "October", "days": 31 },
    11: { "name": "November", "days": 30 },
    12: { "name": "December", "days": 31 }
};

let year = new Date().getFullYear();

function Clock() {
    let currentMonth = 1;
    let currentDay = 1;

    const interval = setInterval(() => {
        console.log(`${months[currentMonth].name} ${currentDay}, ${year}`);
        currentDay++;
        if (currentDay > months[currentMonth].days) {
            currentDay = 1;
            currentMonth++;
            if (currentMonth > 12) {
                currentMonth = 1;
                year++;
                months[2].days = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
            }
        }
    }, 1000);
}

export default Clock;