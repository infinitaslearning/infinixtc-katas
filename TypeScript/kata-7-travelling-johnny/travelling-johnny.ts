import { isDateLessOrEqual, addDays, isDateEqual} from './dateFunctions'

export type Trip = [Date, Date]

const SCHENGEN_WINDOW = 180
const MAX_DAYS_IN_SCHENGEN = 90
const addDateToArr = (relevantDays: Date[], dayToAdd: Date) => { if (!relevantDays.some(d => isDateEqual(d, dayToAdd))) relevantDays.push(dayToAdd)}
const getDatesInWindow = (dates: Date[], referenceDate: Date) => dates.filter(d => isDateLessOrEqual(addDays(referenceDate, -(SCHENGEN_WINDOW - 1)), d))

const getDatesFromTrips = (trips: Trip[]) => {
  let result: Date[] = []
  trips.forEach(([startDateTrip, endDateTrip]: Trip) => {
    let datePointer: Date = new Date(startDateTrip)
    while (isDateLessOrEqual(datePointer,endDateTrip)) {
      addDateToArr(result, datePointer)
      datePointer = addDays(datePointer, 1)
    }
  })
  return result;
}

const schengenTime = (trips: Trip[], checkDate: Date): number => {
  let tripDates: Date[] = getDatesFromTrips(trips)
  let relevantDates: Date[] = getDatesInWindow(tripDates, checkDate)

  if (relevantDates.length > MAX_DAYS_IN_SCHENGEN) return MAX_DAYS_IN_SCHENGEN - relevantDates.length

  let counter = 0
  let datePointer = checkDate
  addDateToArr(relevantDates, datePointer)

  while (relevantDates.length <= MAX_DAYS_IN_SCHENGEN) {
    counter += 1

    datePointer = addDays(datePointer, 1)
    addDateToArr(relevantDates, datePointer)
    relevantDates = getDatesInWindow(relevantDates, datePointer)
  }

  return counter
}

export default schengenTime
