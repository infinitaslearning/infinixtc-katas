import { isDateLessOrEqual, addDays, isDateEqual} from './dateFunctions'

export type Trip = [Date, Date]


const tripsToRelevantDays = (trips: Trip[], checkDate: Date) => {
  let result: Date[] = []
  let startWindow: Date = addDays(checkDate, - (180-1))

  trips.forEach(([startDate, endDate]: Trip) => {
    let pointer: Date = new Date(startDate)
    while (isDateLessOrEqual(pointer,endDate)) {
      if (isDateLessOrEqual(startWindow, pointer)) result.push(pointer)
      pointer = addDays(pointer, 1)
    }
  })
  return result;
}

const schengenTime = (trips: Trip[], checkDate: Date): number => {
  const relevantDaysSpendInSchengen: Date[] = tripsToRelevantDays(trips, checkDate)
  return 90 - relevantDaysSpendInSchengen.length
}

export default schengenTime
