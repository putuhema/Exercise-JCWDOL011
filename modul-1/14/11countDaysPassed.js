const countDaysPassed = (date) => {
    const startOfYear = new Date(date.getFullYear(), 0, 1)
    return Math.floor((date - startOfYear) / (24 * 60 * 60 * 1000))
}

console.log(countDaysPassed(new Date()))