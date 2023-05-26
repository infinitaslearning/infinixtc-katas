export const isDateEqual = (date1: Date, date2: Date): boolean => date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear()

export const isDateLessOrEqual = (date1: Date, date2: Date): boolean => isDateEqual(date1, date2) || date1.getTime() < date2.getTime()

export const addDays = (date: Date, days: number) => {
  let result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}