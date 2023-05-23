type Trip = [Date, Date]

const daysBetween = (startDate: Date, endDate: Date): number => {
  const oneDay = 1000 * 60 * 60 * 24
  const diff = endDate.getTime() - startDate.getTime()
  return Math.round(diff / oneDay)
}

const calculateDaysInTrip = ([startDate, endDate]: Trip): number => {
  return daysBetween(startDate, endDate) + 1
}

const isRelevantTrip = ([, endDate]: Trip, checkDate: Date): boolean => daysBetween(endDate, checkDate) < 180

const schengenTime = (trips: Trip[], checkDate: Date): number => {
  const relevantTrips = trips.filter((trip) => isRelevantTrip(trip, checkDate))

  if (relevantTrips.length == 1) {
    return 90 - calculateDaysInTrip(relevantTrips[0])
  }
  return 90
}

export default schengenTime
