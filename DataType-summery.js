//Primitive(call by Value) "7types"
/*
1:String=>"The String type is the set of all ordered sequences of zero or more 16-bit
 unsigned integer values (“elements”) up to a maximum length of 2**53 - 1 elements"
2:Number
3:Boolean
4:null=>"The Null type has exactly one value, called null."
5:undefined=>"The Undefined type has exactly one value, called undefined.
 Any variable that has not been assigned a value has the value undefined."
6:Symbole
7:BigInt
 */
const name="Babita"; //string
const age=22; //Number
const isPassword=false; //Boolean
const outsideTemp=null; //Null
let userEmail; //undefined
const id=Symbol("123"); //symbol
const anotherId =Symbol("123");
console.log(id===anotherId);
const bigNumber=268787467647637687684763n
console.log(typeof bigNumber);//bigint

//Non-premitive(Call By Reference)
/* 
1:Array
2:Object
3:Function
*/

const heros =["Akshay Kumar","Sarukh khan", "Petter pakker"] //Array
console.log(heros[0]); 
console.log(typeof heros);  //object

let myobj = {
    //key:value pairs    //object 
    name:"Babita",
    age:22,

}
console.log(typeof myobj);//object

let f=function(){
console.log("Hello");
}
console.log(typeof f); //function