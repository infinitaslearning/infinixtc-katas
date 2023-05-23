const calculateDaysInTrip = (startDate: Date, endDate: Date): number => {
  const oneDay = 1000 * 60 * 60 * 24
  const diff = endDate.getTime() - startDate.getTime()
  return Math.round(diff / oneDay) + 1
}

const schengenTime = (dates: [Date, Date][], checkDate: Date): number => {
  if (dates.length == 1) {
    return 90 - calculateDaysInTrip(dates[0][0], dates[0][1])
  }
  return 90
}

export default schengenTime
