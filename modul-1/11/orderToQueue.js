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

  processQueue() {
    if (this.queue.length === 0) {
      return
    }

    this.queue.shift()
    const randomInterval = Math.floor(Math.random() * 10 + 1) * 1000

    console.log(`Queue ${(4 - this.queue.length) + 1} Done in ${randomInterval / 1000} seconds ...`)
    return new Promise((resolve) => {
      setTimeout(() => {
        this.processQueue();
        resolve()
      }, randomInterval)
    })
  }
}

const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.processQueue()


