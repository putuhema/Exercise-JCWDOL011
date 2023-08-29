const getDaysInMonth = (month, year) =>
    new Date(year, month, 0).getDate()


console.log(getDaysInMonth(1, 2022))