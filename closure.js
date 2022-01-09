//Closure : Closure is the action that inner function can have access to the outer function variable, parameter as well as global variable.
//function along with its lexical scope bundle together forms a closure.

//------------------ Example : 1 ----------------------------

function x()
{
    var a = 10;

    function y()
    {
        console.log(a);
    }

    return y;
}

var z = x();
console.log(z);
z();


//-------------------- Example : 2 ----------------------------
function x()
{
    var a = 10;

    function y()
    {
        console.log(a);
    }
    a = 100;
    return y;
}

var z = x();
console.log(z);
z();

//output : function y , 100 : reason because it is not move garbage collector it refer/point the value which hold a.

//----------------------- Example : 3 ----------------------------------
function z()
{
 function x()
 {
    var a = 10;
    function y()
    {
      console.log(a);
    }
    y();
 }
 x();
}
z();

//--------------------- Interview Best Example -----------------------------------

function x()
{
    for(var i = 1; i <= 5; i++)
    {
        setTimeout(() => {
            console.log(i);
        }, i * 1000); //closure
    }

    console.log("Hi Aman!");
}
x();

//output is : HI Aman! and 5 times 6.
//How to resolve using let because it is block scope and another solution using IIFE and SetTimeout put in function.

