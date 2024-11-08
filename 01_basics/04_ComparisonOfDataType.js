// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2 != 1);

console.log("2">1);//true
console.log("02">1);//true

console.log(null>0);//comparisons convert null to a number 0>0 return false
console.log(null==0);//equality check is null==0 which is return false
console.log(null>=0);//0>=0 return true

console.log(undefined==0);//false
console.log(undefined>=0);//false
console.log(undefined<=0);//false

//(===)=>StrictCheck not only check the value but also check the datatype
console.log("2"==2)//true
console.log("2"===2)//false