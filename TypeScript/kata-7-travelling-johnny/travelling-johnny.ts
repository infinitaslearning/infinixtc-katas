import { isDateLessOrEqual, addDays, isDateEqual} from './dateFunctions'

export type Trip = [Date, Date]

const SCHENGEN_WINDOW = 180
const MAX_DAYS_IN_SCHENGEN = 90
const addDateToArr = (relevantDays: Date[], dayToAdd: Date) => { if (!relevantDays.some(d => isDateEqual(d, dayToAdd))) relevantDays.push(dayToAdd)}

const getRelevantDaysFromTrips = (trips: Trip[], checkDate: Date) => {
  let result: Date[] = []
  let startWindow: Date = addDays(checkDate, - (SCHENGEN_WINDOW-1))

  trips.forEach(([startDate, endDate]: Trip) => {
    let pointer: Date = new Date(startDate)
    while (isDateLessOrEqual(pointer,endDate)) {
      if (isDateLessOrEqual(startWindow, pointer)) addDateToArr(result, pointer)
      pointer = addDays(pointer, 1)
    }
  })
  return result;
}

const schengenTime = (trips: Trip[], checkDate: Date): number => {
  let schengenDaysInWindow: Date[] = getRelevantDaysFromTrips(trips, checkDate)

  if (schengenDaysInWindow.length > MAX_DAYS_IN_SCHENGEN) return MAX_DAYS_IN_SCHENGEN - schengenDaysInWindow.length

  let counter = 0
  let datePointer = checkDate
  addDateToArr(schengenDaysInWindow, datePointer)

  while (schengenDaysInWindow.length <= MAX_DAYS_IN_SCHENGEN) {
    counter += 1
    datePointer = addDays(datePointer, 1)
    addDateToArr(schengenDaysInWindow, datePointer)
    schengenDaysInWindow = schengenDaysInWindow.filter(d => isDateLessOrEqual(addDays(datePointer, -(SCHENGEN_WINDOW - 1)), d))
  }

  return counter
}

export default schengenTime
