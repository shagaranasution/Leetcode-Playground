function maxProfit(prices: number[]): number {
  let minPrice: number = prices[0];
  let maxProfit: number = 0;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    }

    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
}
