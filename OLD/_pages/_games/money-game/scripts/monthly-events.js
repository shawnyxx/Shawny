// Referencing the html elements
const day_indicator = document.getElementById('day');
const month_indicator = document.getElementById('month-indicator');
const max_width = month_indicator.style.maxWidth;

function timeManager() {
    // Every seconds
    setInterval(() => {
        // Every month (30/31 days)
        if (day >= days_in_month[month_index]) {
            day = 0;
            month_index++;

            doNotification('A new month has just started, you can see you latest financial report in your stats dashboard.', 'orange', 'orange');
            if (spammUpgrade) {
                addAction('Your spamm technique stopped working, the very smart tech people patched it.');
                document.getElementById('spammUpgradeButton').disabled = false;
                spammUpgrade = false;
            }

            // Play paycheck sound
            if (job) {
                audioPlay('./audio/audio-files/money-sound.mp3');
            }

            // UI updates
            getPaycheck();
            propertiesIncomeExpense();
            updateCrypto();
            updateCounter();
            updateStatsMenu();
            updateStudiesElement("update degree progress");
            generateProperties();
            if (monthly_profit > 0) {
                doNotification(`Last month profit: ${shortenMoneyDisplay(monthly_profit)}`, 'green', 'green');
            } else if (monthly_profit < 0) {
                doNotification(`Last month profit: ${shortenMoneyDisplay(monthly_profit)}`, 'red', 'green');
            }

            const moneyMachineBreakChance = Math.floor(Math.random() * (100 - 1) + 1);
            if (moneyMachineBreakChance <= 25 && money_per_tap > 0) {
                money_per_tap = 0;
                updateSalaryElement();
                doNotification('Your money machine broke down, you will need to buy a new one.', 'red', 'red');
                doMoneyMachineButton();
            }

            monthly_profit = 0;

            setStoredData("money game");
        }

        // Every year (12 months)
        if (month_index > 12) {
            // Reset the month index
            month_index = 1;

            // Add a year
            year++;

            // Increment the year date
            year_date++;

            // UI updates
            addAction('A new year has just started.', 'orange');
            doNotification('A new year has started', 'white', 'orange');
            doInterest();
            doDegree();
            doTaxes();
            updateStatsMenu();
        }

        // Add a day
        day++;

        updateEducationMenu();

        // Save the game
        setStoredData("money game");

        // UI updates
        day_indicator.textContent = `${year_date}/${month_index + 1}/${day}`;

        // Update the month indicator
        month_indicator.style.width = `${(day / days_in_month[month_index]) * 15}%`;
    }, 1000); // 1 second
}
