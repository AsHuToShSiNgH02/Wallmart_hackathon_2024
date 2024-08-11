const calculateOptimalPrice = (currentPrice, competitorPrice, salesLastMonth) => {
    let compPrice = parseInt(competitorPrice);
    let optimalPrice = currentPrice;
    console.log('in utils');
    console.log(`optimal price ${optimalPrice}`);
    console.log(`competitor Price ${competitorPrice}`)
    console.log(`currentPrice ${currentPrice}`);
    if (compPrice < currentPrice) {
        optimalPrice = compPrice - (0.05 * compPrice);
        console.log(`inside block optimalPrice ${optimalPrice}`);
    }

    return optimalPrice;
};

export default calculateOptimalPrice;
