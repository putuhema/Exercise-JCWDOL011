const intersection = (obj1, obj2) => {
  let res = {}
  for (let o in obj1) {
    if (Object.hasOwn(obj2, o) && obj1[o] === obj2[o]) {
      res = { ...res, [o]: obj2[o] }
    }
  }

  return res
}

console.log(intersection({ a: 1, b: 3, c: 5 }, { a: 1, c: 5, d: 2 })) // {a: 1, c: 5}
console.log(intersection({ a: 1, b: 3 }, { a: 1, c: 3 })) // {a: 1}
