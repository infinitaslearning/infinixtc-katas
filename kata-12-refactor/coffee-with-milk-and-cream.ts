import { Coffee } from './coffee'

export class CoffeeWithMilkAndCream extends Coffee {
  price() {
    return super.price() + 0.25
  }
}
