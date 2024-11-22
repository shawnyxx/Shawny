const year = 2012;

const months = {
    1: { "name": "January", "days": 31 },
    2: { "name": "February", "days": year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28 },
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
}


function Clock() {
    interval = setInterval(() => {
        day++;
    }, 1000);

    for (let month in months) {
        for (let day = 1; day <= months[month].days; day++) {
            console.log(`${months[month].name} ${day}, ${year}`);
        }
    }
}

Clock();