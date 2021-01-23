function maxStockProft(pricesArr) {
    //takes in array of prices as parametr
    //return the max possible profit of the day
    let maxProfit = -1,
        buyPrice = 0,
        sellPrice = 0;

    let changeBuyPrice = true;

    for(let i = 0; i < pricesArr.length; i++) {
        if(changeBuyPrice) buyPrice = pricesArr[i];
        sellPrice = pricesArr[i + 1];

        if(sellPrice < buyPrice) {
            changeBuyPrice = true;
        } else {
            let tempProfit = sellPrice - buyPrice;
            if(tempProfit > maxProfit) maxProfit = tempProfit;
            changeBuyPrice = false;
        }
    }
    return maxProfit;
}