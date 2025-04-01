import { HotChocolate } from './hot-chocolate'

export class HotChocolateWithCream extends HotChocolate {
  price() {
    return 1.45 + 0.15
  }
}
