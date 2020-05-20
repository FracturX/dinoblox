import { ProductInfo, BuyProductInfo, PriceRange } from '../models/Products.ts'
import { headers } from '../models/Auth.ts'
import { isNumber } from "https://deno.land/std/node/util.ts";
export default async function buy(token: string, item : number | ProductInfo | BuyProductInfo, price : number | PriceRange) {
  if (typeof item == 'number') {
    return;
  }
  const robux: number = item.PriceInRobux || 0;
  const id: number = item.ProductId;

  if (price) {
    if (typeof price === 'number') {
      if (robux !== price) {
        throw new Error('Price requirement not met. Requested price: ' + price + ' Actual price: ' + robux)
      }
    } else if (typeof price === 'object') {
      var high = price.high
      var low = price.low
      if (high) {
        if (robux > high) {
          throw new Error('Price requirement not met. Requested price: <=' + high + ' Actual price: ' + robux)
        }
      }
      if (low) {
        if (robux < low) {
          throw new Error('Price requirement not met. Requested price: >=' + low + ' Actual price: ' + robux)
        }
      }
    }

    
  }


}