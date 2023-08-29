function BMI(weight, height) {
  let heightInMeters = height / 100
  let bmi = weight / Math.pow(heightInMeters, 2)

  if (bmi < 18.5) {
    return 'less weight'
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'ideal'
  } else if (bmi >= 25 && bmi <= 29.9) {
    return 'overweight'
  } else if (bmi >= 30 && bim <= 39.9) {
    return 'very overweight'
  } else if (bmi > 39.9) {
    return 'obesity'
  }
}

console.log(BMI(65, 174))
