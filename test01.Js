// เรียกว่า single line Comment


//คำสั่งสำหรับ Dev.ในการ Debug ค่าใดๆออกมา
//ถ้าค่านั้นเป็น String ต้องใส่ " " '' หรือ `` ครอบค่าไว้
//string
console.log("AAA${1+1}(true)");
console.log('BBB${1+1}');
console.log(`CCC${1+1}$(ture)`);
//number
console.log(123);       //integer
console.log(123.456);   //float
console.log(true);      //boolean
console.log(null);      //null
//array ข้อมูลหลายๆข้อมูลที่Indexกำกับเริ่มที่0
console.log([1,2,3,4,5]);
console.log(["A","B","C","D","E"]);
console.log([1,"A",true,null]);
//object ข้อมูลหลายๆข้อมูลโครงสร้างมีKey:Value
console.log((
    {name:"AAA", 
    age:25 ,
    Food :["Pizza","Burger","Pasta"], 
    Married:true ,
    Address:{
        city:"Bangkok",
        country:"Thailand"
    }
}
)
);
//undefined
let x  //ตัวแปร
console.log(x)//undefined