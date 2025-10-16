//Call back function
//การส่งค่า function ซึ่งเรียกว่า argument ไปให้กับ parameter ของ function แล้วไปเรียกใช้ตัว function ที่ส่งไปให้

function funcA(a, b){
  console.log(a)
  console.log(b)
}

funcA(10, 20)

//--------------------------------------------//----------------------------------------//
function funcC(){
  console.log('MINATO')
}

function funcB(x, y){
  console.log(x)
  y() //call back function 
}

funcB(555, function(){ console.log('Mint') } )

funcB(999, () => console.log('Min') )

funcB(111, funcC)