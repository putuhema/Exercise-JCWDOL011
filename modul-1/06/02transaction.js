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
