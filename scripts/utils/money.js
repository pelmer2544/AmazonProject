// function that returns a price as a string with 2 decimals
export function formatCurrency(priceCents) {

    return (priceCents / 100).toFixed(2);
}

export default formatCurrency;