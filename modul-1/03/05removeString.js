let ss = "Hello world"
let searchString = "ell"

let resultSS = ss.split(searchString).join('')
console.log(`remove "${searchString}" from "${ss}" -> ${resultSS}`)
