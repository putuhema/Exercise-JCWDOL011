class Employee {
  name;
  workingHour;
  salary;
  constructor(name) {
    this.name = name
    this.workingHour = 0
    this.salary = 0
  }

  getName() {
    return this.name
  }

  addWorkingHour(hour) {
    this.workingHour += hour
  }
}

class FullTimeEmployee extends Employee {
  constructor(name) {
    super(name)
  }

  calculateSalary() {
    if (this.workingHour > 6) {
      this.salary = this.workingHour * 75_000
    } else {
      this.salary = this.workingHour * 100_000
    }

    return this.salary
  }
}


class ParttimeEmployee extends Employee {
  constructor(name) {
    super(name)
  }

  calculateSalary() {
    if (this.workingHour > 6) {
      this.salary = this.workingHour * 30_000
    } else {
      this.salary = this.workingHour * 50_000
    }

    return this.salary
  }
}


const jhon = new FullTimeEmployee('jhon')
const marry = new ParttimeEmployee('marry')

jhon.addWorkingHour(7)
marry.addWorkingHour(4)
const JhonSalary = jhon.calculateSalary()
const MarrySalary = marry.calculateSalary()

console.log(`${jhon.getName()} salary is RP.${JhonSalary}`)
console.log(`${marry.getName()} salary is RP.${MarrySalary}`)

