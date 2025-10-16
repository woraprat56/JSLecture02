//defaull parameter

function funcA(xx, yy, zz = 100){
  console.log(xx, yy, zz)
}

function funcB(a =555, b = 0, c= 111, d = 222){
  console.log(a + b + c + d)
}

funcA(10, 20, 30)
funcA(11, 22)

funcB()
funcB(10, 20)