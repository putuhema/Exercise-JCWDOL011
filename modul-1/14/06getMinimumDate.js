const getMinimumDate = (dates) => {
    let minDate = new Date(dates[0])

    for (let i = 0; i < dates.length; i++) {
        const currentDate = new Date(dates[i])

        if (currentDate < minDate) {
            minDate = currentDate
        }
    }
    return minDate
}


console.log(getMinimumDate(["2023-08-10", "2022-08-05", "2023-07-11"]))