const compare = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}
const obj1 = { name: 'Jhon', age: 30 }
const obj2 = { name: 'Jhon', age: 30 }

console.log(compare(obj1, obj2)) // true
