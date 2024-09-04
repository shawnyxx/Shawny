let min_taxe_rate = 10;
let max_taxe_rate = 25;

let taxesRate = 0;
let taxesAmount = money * (taxesRate / 100);

function shortenMoneyDisplay(amount) {
    if (amount >= 1000000000000000) {
        return (amount / 1000000000000000).toFixed(1) + 'Q';
    } else if (amount >= 1000000000000) {
        return (amount / 1000000000000).toFixed(1) + 'T';
    } else if (amount >= 1000000000) {
        return (amount / 1000000000).toFixed(1) + 'B';
    } else if (amount >= 1000000) {
        return (amount / 1000000).toFixed(1) + 'M';
    } else if (amount >= 1000) {
        return (amount / 1000).toFixed(1) + 'k';
    } else if (amount <= -1000000000000000) {
        return (amount / 1000000000000000).toFixed(1) + 'Q';
    } else if (amount <= -1000000000000) {
        return (amount / 1000000000000).toFixed(1) + 'T';
    } else if (amount <= -1000000000) {
        return (amount / 1000000000).toFixed(1) + 'B';
    } else if (amount <= -1000000) {
        return (amount / 1000000).toFixed(1) + 'M';
    } else if (amount <= -1000) {
        return (amount / 1000).toFixed(1) + 'k';
    } else if (amount <= -1000000000000000) {
        return (amount / 1000000000000000).toFixed(1) + 'Q';
    } else if (amount <= -1000000000000) {
        return (amount / 1000000000000).toFixed(1) + 'T';
    } else if (amount <= -1000000000) {
        return (amount / 1000000000).toFixed(1) + 'B';
    } else if (amount <= -1000000) {
        return (amount / 1000000).toFixed(1) + 'M';
    } else if (amount <= -1000) {
        return (amount / 1000).toFixed(1) + 'k';
    } else {
        return doMoneyNotation(amount.toFixed(2));
    }
}

function doTaxes() {
    taxesRate = Math.random(max_taxe_rate - min_taxe_rate) + min_taxe_rate;
    taxesAmount = money * (taxesRate / 100);
    if (money > 20000) {
        money -= taxesAmount;
        monthly_profit -= taxesAmount;
        addAction(`You payed $${shortenMoneyDisplay(taxesAmount)} in taxes (${taxesRate.toFixed(0)}%)`);
    }
}