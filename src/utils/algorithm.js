function calculateOptimalPrice(currentPrice, competitorPrice, salesLastMonth, inventory) {

    // Ensure the prices are numbers, no need for replace if they are already numbers
    const compPrice = typeof competitorPrice === 'string' ? parseFloat(competitorPrice.replace(/[^0-9.-]+/g, "")) : competitorPrice;
    const currPrice = typeof currentPrice === 'string' ? parseFloat(currentPrice.replace(/[^0-9.-]+/g, "")) : currentPrice;


    let optimalPrice;
    if (compPrice < currPrice) {
        optimalPrice = compPrice - 1000;
    } else {
        optimalPrice = compPrice + 1400;
    }

    return optimalPrice;
};


export default calculateOptimalPrice;
