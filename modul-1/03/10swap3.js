let a = 9
let b = 1
let c = 2

let sort = ''

if (a > b) {
  if (a > c) {
    if (b > c) {
      sort = `${c}, ${b}, ${a}`
    } else {
      sort = `${b}, ${c}, ${a}`
    }
  } else {
    sort = `${b}, ${a}, ${c}`
  }
} else {
  if (b > c) {
    if (a > c) {
      sort = `${c}, ${a}, ${b}`
    } else {
      sort = `${a}, ${c}, ${b}`
    }
  } else {
    sort = `${a}, ${b}, ${c}`
  }
}

console.log(`${a}, ${b}, ${c} -> ${sort}`)
