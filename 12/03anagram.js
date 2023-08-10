const isAnagram = (s, t) => {
    const sortedS = s.split('').sort().join('')
    const sortedT = t.split('').sort().join('')

    return sortedS === sortedT
}

console.log(isAnagram("car", "rat"))
console.log(isAnagram("anagram", "nagaram"))