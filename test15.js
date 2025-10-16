//Arrow function

const aa = () => {
  console.log(111);
}
//ถ้าคำสั่งมีคำสั่งเดียวสามารถเขียนได้แบบนี้
const aaa = () => console.log(111)

const bb = () => {
  return 222
}
//ถ้าคำสั่งเดียวนั้นเป็น return
const bbb = () => 222 * 10

const cc = (xx) => {
  console.log(xx)
}

//parameter มีตัวเดียว ไม่จำเป็นต้องใส่ () ,มีมากกว่า 1 ต้องใส่
const ccc = xx => console.log(xx)

const dd = (yy) => {
  return yy * 10
}
//
const ddd = yy => yy * 10