import { Beverage } from './beverage'

export class HotChocolate implements Beverage {
  price() {
    return 1.45
  }
}
