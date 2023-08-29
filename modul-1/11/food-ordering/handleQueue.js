const Queue = require("./queue")

const queue = new Queue()
queue.enqueue('Pizza')
queue.enqueue('Burger')
queue.enqueue('Coca-Cola')
queue.enqueue('Ice Cream')

queue.processQueue()