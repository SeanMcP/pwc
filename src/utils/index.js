export function getMonthAndDate(date) {
    const parsed = new Date(date)
    return parsed ? [parsed.getMonth(), parsed.getDate()] : []
}
