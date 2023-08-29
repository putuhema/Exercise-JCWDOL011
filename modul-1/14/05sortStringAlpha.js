const sortString = (str) => {
    const strArr = str.split('')
    for (let i = 0; i < strArr.length; i++) {
        for (let j = i; j < strArr.length; j++) {
            if (strArr[j] < strArr[i]) {
                [strArr[i], strArr[j]] = [strArr[j], strArr[i]]
            }
        }
    }

    return strArr.join('')
}


console.log(sortString("bcamandiri"))