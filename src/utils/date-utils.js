export function getSpecialDateFromDayAndMonth(day, month) {
    if (!day && !month) return null
    let date = new Date()
    date.setMonth(month)
    date.setDate(day)
    return date.toLocaleDateString()
}
