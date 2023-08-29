class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(value) {
    this.queue.push(value)
  }

  dequeue() {
    return this.queue.shift()
  }

  getElements() {
    return this.queue
  }

  processQueueRecursive() {
    if (this.queue.length === 0) {
      return
    }

    const order = this.dequeue()
    const randomInterval = Math.floor(Math.random() * 10 + 1) * 1000

    console.log(`Processing Order: ${order}. Waiting for ${randomInterval / 1000} seconds ...`)
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Order ${order} processed.`)
        this.processQueue();
        resolve()
      }, randomInterval)
    })

  }

  async processQueue() {
    while (this.queue.length > 0) {
      const order = this.dequeue()
      const randomInterval = Math.floor(Math.random() * 10 + 1) * 1000

      console.log(`Processing Order: ${order}. Waiting for ${randomInterval / 1000} seconds ...`)
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Order ${order} processed.`)
          this.processQueue();
          resolve()
        }, randomInterval)
      })
    }
  }
}


module.exports = Queue 
