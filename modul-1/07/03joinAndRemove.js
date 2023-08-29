const joinAndRemove = (arr1, arr2) => {
  const combine = [...arr1, ...arr2]
  const keys = new Set()

  const result = []
  combine.forEach((item) => {
    const key = item.name
    if (!keys.has(key)) {
      keys.add(key)
      result.push(item)
    }
  })
  return result
}

joinAndRemove(
  [
    { name: 'student 1', email: 'student1@gmail.com' },
    { name: 'student 2', email: 'student2@gmail.com' }
  ],
  [
    { name: 'student 1', email: 'student1@gmail.com' },
    { name: 'student 3', email: 'student3@gmail.com' }
  ]
)
