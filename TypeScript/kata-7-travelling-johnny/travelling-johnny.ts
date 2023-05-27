import { isDateLessOrEqual, addDays, isDateEqual} from './dateFunctions'

export type Trip = [Date, Date]


const tripsToRelevantDays = (trips: Trip[], checkDate: Date) => {
  let result: Date[] = []
  let startWindow: Date = addDays(checkDate, - (180-1))

  trips.forEach(([startDate, endDate]: Trip) => {
    let pointer: Date = new Date(startDate)
    while (isDateLessOrEqual(pointer,endDate)) {
      if (isDateLessOrEqual(startWindow, pointer) && !result.some(d => isDateEqual(d, pointer))) result.push(pointer)
      pointer = addDays(pointer, 1)
    }
  })
  return result;
}

const schengenTime = (trips: Trip[], checkDate: Date): number => {
  let daysSpendInSchengenArr: Date[] = tripsToRelevantDays(trips, checkDate)
  const daysInSchengen = daysSpendInSchengenArr.length

  if (daysInSchengen > 90) return 90 - daysInSchengen

  let counter: number = 0
  let startWindow = addDays(checkDate, -179)
  let endWindow = checkDate
  if (!daysSpendInSchengenArr.some(d => isDateEqual(d, checkDate))) daysSpendInSchengenArr.push(checkDate)

  while (daysSpendInSchengenArr.length <= 90) {
    counter += 1
    startWindow = addDays(startWindow, 1)
    endWindow = addDays(endWindow, 1)
    if (!daysSpendInSchengenArr.some(d => isDateEqual(d, endWindow))) daysSpendInSchengenArr.push(endWindow)
    daysSpendInSchengenArr = daysSpendInSchengenArr.filter(d => isDateLessOrEqual(startWindow, d))
  }

  return counter

}

export default schengenTime
