// 3. on parameters, has return
function funcE( ){ //ทำได้แต่ไม่ควรทำ
  console.log('wow...') //ทำได้แต่ไม่ควรทำ
  return 100;
}

function funcF( ){
  let x = 100
  return x * 2;
}

funcE() //ทำได้ แต่ไม่ควรทำ เพราะมันมีค่าที่ return ส่งกลับมา
funcF() //ทำได้ แต่ไม่ควรทำ เพราะมันมีค่าที่ return ส่งกลับมา

console.log( funcE())
let xx = funcF
console.log( xx )