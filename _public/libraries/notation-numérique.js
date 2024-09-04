
function doPercentage(value) {
    return value / 100;
}

function doMoneyNotation(value) {
    return value.toLocaleString('en-US', { maximumFractionDigits: 2 });
}
