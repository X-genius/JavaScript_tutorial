//Pass By Value : Pass by values is based on the primitive data type as well as it is independent each other.
//primitive datatype : It store only single value Example : String, Number, Boolean, undefined, null, BigInt

var a = 20; //Initialize the value

var b = a; 

console.log("Value of a : "  + a);
console.log("Value of b : " + b);

b = 30;
console.log("Value of b which you giving with new value : " + b); //Expect Answer is 30 reason is that it is not dependent to a

//Pass by reference : Pass by reference is based on the non - primitive data type as well as it dependent to each other.
//Non-primitive datatype : It store multiple value like : array , objects etc.

var objectOne = {
    age : 21,
    name : "Aman Baghel",
    Course : "B.Tech",
    pswd : "baghelAman@@@@123"
};

var objectTwo = objectOne;

console.log("Object One : " + objectOne);
console.log("Object Two : " + objectTwo);

objectTwo.pswd = "amanAAAAAA@1234";
console.log("Expected Answer is that only change in objectTwo object but In pass by reference it is dependent to each other so resultant answer is differ");

console.log("When Change in objectTwo and impact on objectOne : " + objectOne);
console.log("When Change in objectTwo and impact on objectTwo : " + objectTwo);

