// Expression Function
//1. Name function Expression
let aa = function showHi(){
  console.log('Hi...')
}

const bb = function showHey(){
  console.log('Hey..')
}

//2.Anonymous function Expression
let cc = function showHi(xx) {
  console.log("wow...", xx)
}

let dd = function showHey() {
  // console.log("woo..")
  return 'Woo..'
}
//let เปลื่ยนค่าได้
//const เปลื่ยนค่าไม่ได้
//การใช้งาน function ที่เก็บในตัวแปร จะต้องใช้งานผ่านตัวแปร 
//โดยเขียนเหมือนกับการเรียกใช้ function

aa()
bb()
cc('sombat')
console.log(dd() )
dd = 555
console.log(dd)