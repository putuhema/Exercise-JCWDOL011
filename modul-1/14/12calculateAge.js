const calculateAge = (date) => {
    const today = new Date()
    const [cYear, cMonth, cDay] = [today.getFullYear(), today.getMonth(), today.getDay()]
    const [bYear, bMonth, bDay] = [date.getFullYear(), date.getMonth(), date.getDay()]

    let age = cYear - bYear

    if (cMonth < bMonth || (cMonth === bMonth && cDay < bDay)) {
        age--
    }

    return age
}


console.log(calculateAge(new Date("1999-11-17")))