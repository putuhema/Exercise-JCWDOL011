const isCurrentDateWeekend = (date) => {
    const currentDate = new Date(date)
    if (currentDate.getDay() === 5 || currentDate.getDay() === 6) {
        console.log(`${date} is weekeend`)
    } else {
        console.log(`${date} not weekeend`)
    }
}

isCurrentDateWeekend("2023-08-10")