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
  const daysSpendInSchengenArr: Date[] = tripsToRelevantDays(trips, checkDate)
  const daysInSchengen = daysSpendInSchengenArr.length

  return 90 - daysInSchengen
}

export default schengenTime
