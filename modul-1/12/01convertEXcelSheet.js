const convertExcelSheet = (str) => {
    str = str.toLowerCase()
    const base = 'abcdefghijklmnopqrstuvwxyz'
    let res = 0
    for (let i = 0; i < str.length; i++) {
        const letter = str[str.length - 1 - i]
        res += (base.indexOf(letter) + 1) * Math.pow(26, i)
    }

    return res
}

console.log(convertExcelSheet("AB"))
console.log(convertExcelSheet("DE"))