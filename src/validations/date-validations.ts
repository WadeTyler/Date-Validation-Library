export function isDateInFuture(date: Date) {
  return date > new Date();
}

export function isDateInPast(date: Date) {
  return date < new Date();
}

export function isDateToday(date: Date) {
  const currDate = new Date();

  // Validate Date, month, and year
  return date.getDate() === currDate.getDate() && date.getMonth() === currDate.getMonth() && date.getUTCFullYear() === date.getUTCFullYear();
}