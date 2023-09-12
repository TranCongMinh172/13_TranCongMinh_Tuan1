var bill = 250
var tip = (bill > 50 && bill < 300) ? bill * 0.15 : bill * 0.2
console.log(tip)

var tongBill = bill + tip
console.log('hoa don %s co so tien tip %s tong bill la %s : ', bill, tip, tongBill)