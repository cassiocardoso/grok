/**
 * Given an array of prices, return the maximum possible profit of the day
 *
 * Complexity: O(n)
 */

function maxStockProfit(prices) {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;
  let changeBuyPrice = true;
  
  for (let i = 0; i < prices.length; i++) {
    if (changeBuyPrice) {
      buyPrice = prices[i]; 
    }
    
    sellPrice = prices[i + 1];
    
    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      // Calculate a temporary profit value
      let tempProfit = sellPrice - buyPrice;
      
      // Update the maxProfit value if tempProfit is bigger than the current maxProfit
      maxProfit = tempProfit > maxProfit ? tempProfit : maxProfit;
      
      changeBuyPrice = false;
    }
  }
  
  return maxProfit;
}

console.log(maxStockProfit([32, 36, 33, 28, 29, 45, 35, 41]));