// for-in ใช้กับ Array
  //index 0   1   2   3   4 
let arr= [10, 20, 30, 40, 50];

// การใช้งาน Array ในการเข้าถึงแต่ละข้อมูล
console.log(arr[1]) //ได้ 20
console.log(arr[4]) //ได้ 50
console.log(arr)
arr[3] = 444
console.log(arr)

// การเข้าถึงทุกข้อมูลใน Array --> for-of
for(let yyy of arr){
  console.log(yyy * 10)
}