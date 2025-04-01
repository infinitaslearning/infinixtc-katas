import { Tea } from './tea'

export class TeaWithMilk extends Tea {
  price() {
    return super.price() + 0.1
  }
}
