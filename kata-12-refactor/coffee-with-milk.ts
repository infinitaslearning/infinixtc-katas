import { Coffee } from './coffee'

export class CoffeeWithMilk extends Coffee {
  price() {
    return super.price() + 0.1
  }
}
