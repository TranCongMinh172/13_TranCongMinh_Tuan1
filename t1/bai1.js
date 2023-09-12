    // TranCongMinh_20121801

    /*Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

*/
    //Bai1
    var weightsMark = 78
    var heightMark = 1.69
    var weightJohn = 92
    var heightJohn = 1.95

    BMIMark = weightsMark / (Math.pow(heightMark, 2))
    BMIJohn = weightJohn / (Math.pow(heightJohn, 2))

    var rs = BMIMark > BMIJohn
    if (rs == true) {
        console.log('chi so BMI cua Mark lon hon cua John')
    } else if (rs == false) {
        console.log('chi so BMI cua John lon hon cua Mark')
    }

    var rs = BMIMark > BMIJohn
    if (rs == true) {
        console.log('chi so BMI cua Mark %s lon hon cua John %s', BMIMark, BMIJohn)
    } else if (rs == false) {
        console.log('chi so BMI cua Mark %s lon hon cua John %s', BMIJohn, BMIMark)
    }