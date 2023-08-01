// 1. Exercise 1
function calculateArray(arr) {
    const score = {
        highest: arr[0].score,
        lowest: arr[0].score,
        average: 0
    }
    const age = {
        highest: arr[0].age,
        lowest: arr[0].age,
        average: 0
    }

    let totalScore = 0
    let totalAge = 0
    for (let student of arr) {
        if (student.score > score.highest || student.age > age.highest) {
            score.highest = student.score
            age.highest = student.age
        }

        if (student.score < score.lowest || student.age < age.lowest) {
            score.lowest = student.score
            age.lowest = student.age
        }

        totalScore += student.score
        totalAge += student.age

    }

    score.average = totalScore / arr.length
    age.average = totalAge / arr.length

    return { score, age }
}

const students = [
    {
        name: "Putu Mahendra",
        email: "putuhendramahednra@gmail.com",
        age: 23,
        score: 80
    }, {
        name: "Zeus",
        email: "zeus@gmail.com",
        age: 32,
        score: 90
    }, {
        name: "Rudeus",
        email: "rudeus@gmail.com",
        age: 20,
        score: 77
    }, {
        name: "Sylphie",
        email: "sylphie@gmail.com",
        age: 24,
        score: 85
    }
]

console.log(calculateArray(students))


// 2. Exercise 2
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}


class Transaction {
    #total
    #products;
    constructor() {
        this.#total = 0
        this.#products = {
            data: [],
            qty: 0
        }
    }

    add(product) {
        this.#products.data.push(product)
        this.#products.qty += 1
        this.#total += 1
    }

    showTotal() {
        return this.#total
    }

    checkout() {
        return this.#products
    }
}

const indomie = new Product("Indomie", 4_000)
const aqua = new Product("aqua", 5_000)

const t = new Transaction()
t.add(indomie)
t.add(aqua)
const totalTransaction = t.showTotal()
const checkout = t.checkout()

console.log({ totalTransaction, checkout })