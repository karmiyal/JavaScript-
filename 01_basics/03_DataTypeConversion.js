let score = null;
//if score=undefined
//if score=mixture of alphaNumeric Value then("33abc")
//score=true
//score=false
console .log(typeof (score));
console. log(typeof score);
 let ValueInNumber=Number(score);
 console.log(typeof ValueInNumber);
 console.log(ValueInNumber);//0
 //undefined
 //NaN
 //1
 //0
 /*
 "33"=33 simble converted in Number data type
 "33abc"= NaN   string is Converted into number then it Will show NaN(Not a number)
 true=>1
 flase=>0
 */
let isLoggedIn="";
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
//if isLoggedin ="" empty string the value will return "false";
//if isLoggedin="anyString" it will return "True"
//1=>true,"anyvalue"=>true
//0=>false,""=>false

let someNumber=33;
let stringnumber=String(someNumber);
console.log(typeof stringnumber);