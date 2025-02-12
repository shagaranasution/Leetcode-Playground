class Solution {
  func maxProfit(_ prices: [Int]) -> Int {
    var minPrice: Int = prices[0]
    var maxProfit: Int = 0

    for price in prices {
      if price < minPrice {
        minPrice = price
      }

      maxProfit = max(maxProfit, price - minPrice)
    }  

    return maxProfit
  }
}