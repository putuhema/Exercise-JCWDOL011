const pushUnique = (value, array) => {
  if (!array.includes(value)) {
    array.push(value)
  }
}

let uniq = []
pushUnique(2, uniq)
pushUnique(3, uniq)
pushUnique(3, uniq)
pushUnique(4, uniq)
pushUnique(4, uniq)
pushUnique(5, uniq)
console.log(uniq) // [2, 3, 4, 5]
