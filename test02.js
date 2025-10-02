// Globel คือ ใช้ที่ไหนก็ได้
// local คือ ใช้เฉพาะภายใน code blook {.....} นั้นๆ เท่านั้น

//  Varilabel ตัวแปร
var data1 = 111; //เปลื่ยนค่าได้เป็น Globel
var data2 = 222; //เปลื่ยนค่าได้เป็น Local
const data1 =333;  //เปลื่ยนค่าได้เป็น Varilabel

console.log(data1);
console.log(data2);
console.log(data3);

console.log("...........");

{
  var data4 = 444;
  let data5 = 555;
  const data6 = 666;
  console.log(data1);
  console.log(data2);
  console.log(data3);
  console.log(data4);
  console.log(data5);
  console.log(data6);
}

console.log(".........");
console.log(data1);
console.log(data2);
console.log(data3);
console.log(data4);
// console.log(data5); 
// console.log(data6);
