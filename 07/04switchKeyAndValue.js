const switchValToKey = (arr) => {
  let res = {}
  arr.forEach(obj => {
    for (let key in obj) {
      res = { ...res, [obj[key]]: key }
    }
  })

  return res
}


console.log(switchValToKey([{ name: 'David', age: 20 }]))
