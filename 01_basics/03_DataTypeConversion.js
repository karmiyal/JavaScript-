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
            /*****************************Operations********************************/
let value =3;
let negvalue= -value;
// console.log(negvalue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);
                                    /*Adding String*/
let str1="Babita"
let str2=" karmiyal"
let str3= str1+ str2;
console.log(str3);

                                    /*Adding String with Number*/
console.log("1"+3);//13
console.log(1+"3");//13
console.log("1"+2+3);//123
console.log(1+2+"3")//33

/* Inappropriate way that we should never follow */
console.log(+true)//1
console.log(+"")//0
let num1,num2,num3;
num1=num2=num3=2+2;

let gameCounter =100;
gameCounter++;
console.log(gameCounter);//101

//Note prefix and postfix operator