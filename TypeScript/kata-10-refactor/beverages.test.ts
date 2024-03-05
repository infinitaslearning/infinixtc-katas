import { Coffee } from './coffee'
import { CoffeeWithMilk } from './coffee-with-milk'
import { CoffeeWithMilkAndCream } from './coffee-with-milk-and-cream'
import { HotChocolate } from './hot-chocolate'
import { HotChocolateWithCream } from './hot-chocolate-with-cream'
import { Tea } from './tea'
import { TeaWithMilk } from './tea-with-milk'

describe('Beverages', () => {
  it('computes coffee price', () => {
    const coffee = new Coffee()
    expect(coffee.price()).toBeCloseTo(1.2, 3)
  })

  it('computes tea price', () => {
    const tea = new Tea()
    expect(tea.price()).toBeCloseTo(1.1, 3)
  })

  it('computes hot chocolate price', () => {
    const hotChocolate = new HotChocolate()
    expect(hotChocolate.price()).toBeCloseTo(1.45, 3)
  })

  it('computes tea with milk price', () => {
    const teaWithMilk = new TeaWithMilk()
    expect(teaWithMilk.price()).toBeCloseTo(1.2, 3)
  })

  it('computes coffee with milk price', () => {
    const coffeeWithMilk = new CoffeeWithMilk()
    expect(coffeeWithMilk.price()).toBeCloseTo(1.3, 3)
  })

  it('computes coffee with milk and cream price', () => {
    const coffeeWithMilkAndCream = new CoffeeWithMilkAndCream()
    expect(coffeeWithMilkAndCream.price()).toBeCloseTo(1.45, 3)
  })

  it('computes hot chocolate with cream price', () => {
    const hotChocolateWithCream = new HotChocolateWithCream()
    expect(hotChocolateWithCream.price()).toBeCloseTo(1.6, 3)
  })
})
