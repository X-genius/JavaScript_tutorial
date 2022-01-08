//Hoisting : Hoisting is a javascript technique where all variable and function are declared at top.

//Example : when x is show undefined reason is that it is show in global memory to undefined
// getName();
// console.log(x);

// var x = 7;

// function getName(){
//     console.log("Hi Genius");
// }

// ---------------------------- Practice --------------------------------------------

//-------ques 1---------

console.log('bar:', bar)
bar = 15
var foo = 1
console.log(foo, bar)
var bar

//output : 
//'bar:' undefined 
//1 , 15

//---------ques 2----------

function foo() {
    var bar = "I'm a bar variable";

function bar() {
      return "I'm a bar function";
    }
    return bar();
  }
console.log(foo())

//output :
//bar is not a function -> preference to variable

//---------ques 3-----------

console.log(foo());
  
  function foo() {
    var bar = function() {
      return 3;
    }
    return bar();
    var bar = function() {
      return 8;
    }
  }

//output : 
//3

//-----------ques 4-----------
var foo = 5
  
  function baz() {
    foo = 10;
    return;
  
    function foo() {}
  }
  baz()
  console.log(foo)

//output 
//5
