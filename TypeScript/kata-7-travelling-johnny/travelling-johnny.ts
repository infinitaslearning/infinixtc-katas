type Trip = [Date, Date]

const calculateDaysInTrip = ([startDate, endDate]: Trip): number => {
  const oneDay = 1000 * 60 * 60 * 24
  const diff = endDate.getTime() - startDate.getTime()
  return Math.round(diff / oneDay) + 1
}

const schengenTime = (trips: Trip[], checkDate: Date): number => {
  if (trips.length == 1) {
    return 90 - calculateDaysInTrip(trips[0])
  }
  return 90
}

export default schengenTime
