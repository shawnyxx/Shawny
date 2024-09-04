// Disclaimer!! If you don't understand these functions, do not touch them, they are advanced algorithms made to save memory and reduce load on the server...

// Turn money into a more american number
function doMoneyNotation(value) {
    if (value !== null) {
        if (value < 10000000000000000) {
            return '$' + value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else {
            return '∞';
        }
    }
}

// Turn money notation into an even more american number
function shortenMoneyDisplay(amount) {
    const absAmount = Math.abs(amount);
    const units = [
        { value: 1e15, suffix: 'Q' },
        { value: 1e12, suffix: 'T' },
        { value: 1e9, suffix: 'B' },
        { value: 1e6, suffix: 'M' },
        { value: 1e3, suffix: 'k' },
    ];

    for (const unit of units) {
        if (absAmount >= unit.value) {
            return (amount / unit.value).toFixed(1) + unit.suffix;
        }
    }
    return doMoneyNotation(amount);
}
