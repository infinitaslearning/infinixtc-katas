import { CoffeeWithMilk } from './coffee-with-milk'

export class CoffeeWithMilkAndCream extends CoffeeWithMilk {
  price() {
    return super.price() + 0.25
  }
}
