//§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

var arrDolphins = [96, 108, 89]
var arrKoalas = [88, 91, 110]

var avgArrDolphins = arrDolphins.reduce((a, b) => a + b, 0) / arrDolphins.length
var avgArrKoalas = arrKoalas.reduce((a, b) => a + b, 0) / arrKoalas.length
    //2.1
console.log('diem trung binh cua doi Dolphins la %s', avgArrDolphins)
console.log('diem trung binh cua doi Koalas la %s', avgArrKoalas)
    //2.2
if (avgArrDolphins > avgArrKoalas) {
    console.log('avg cua doi  Dolphins lon hon avg doi Koalas')
} else if (avgArrDolphins < avgArrKoalas) {
    console.log('avg cua doi Koalas lon hon avg cua doi dolphins')
} else {
    console.log('avg cua hai doi bang nhau')
}
//2,3
if (avgArrDolphins > avgArrKoalas && avgArrDolphins >= 100) {
    console.log('avg cua doi  Dolphins thang')
} else if (avgArrDolphins < avgArrKoalas && avgArrKoalas >= 100) {
    console.log('avg cua doi Koalas thang')
} else if (avgArrDolphins == avgArrKoalas) {
    console.log('avg cua hai doi bang nhau')
}

//2.4
if (avgArrDolphins > avgArrKoalas && avgArrDolphins >= 100) {
    console.log('avg cua doi  Dolphins thang')
} else if (avgArrDolphins < avgArrKoalas && avgArrKoalas >= 100) {
    console.log('avg cua doi Koalas thang')
} else if (avgArrDolphins == avgArrKoalas && avgArrDolphins >= 100 && avgArrKoalas >= 100) {
    console.log('avg cua hai doi bang nhau')
} else {
    console.log('khong tren 100')
}