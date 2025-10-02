//for - in ใช้ 
let obj= {
  name: "mint",
  age : "22",
  city : ["Thai","london"],
  food: {
    favorite: "Pizza",
    dislike : "miminoo"
  }
};

console.log(obj.name);
console.log(obj.age);
console.log(obj.city);
console.log(obj.city[0]);
console.log(obj.city[1]);

obj.name = "woraprt"
obj.age = 21
obj.city[0] = "Thai"
obj.city[1] = "London"
console.log(obj.name);
console.log(obj.age);
console.log(obj.city[0]);
console.log(obj.city[1]);
console.log('............');

// การเข้าถึงทุกข้อมูลใน obj -> for-in
// for (let xxx in obj){
//   console.log(xxx + ":" + obj[xxx]);
// }
for (let xxx in obj) {
  console.log(xxx);
  console.log(obj[xxx])
}