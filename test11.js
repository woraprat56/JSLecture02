//4.have parameters, has teturn
function funcG(a, b, c){ //parameter
  let result = a * b *c;
  return result / 3;
}

function funcH(fname, lname){
  return '${fname} ${lname}'
}

console.log(funcG(10, 20, 30)); //argument
console.log(funcH("john", "Doe"));

let fullName = funcH("jame", "smith")
console.log(fullName)