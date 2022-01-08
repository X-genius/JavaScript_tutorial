//IIFE : Immediate Invoked Function : Immediate invoked function is defined as the function which can execute as soon as it is defined.
//It is also known as Self-executing function.

//------------Simple function : --------------------
function getName(name)
{
    console.log("Hi " + name);
}
getName("Anuj Kumar");

//------------Immediate invoked function :----------------

(function(name){
   console.log("Hi " + name);
})("Aman Baghel");

//--------------- All time favourite question of IIFE : -------------

for (var i = 1; i <= 5; i++) {
    (function (step) { //Function is crossed immediate call happen
        setTimeout(function() {
            console.log('I reached step ' + step);
        }, 1000 * i);
    })(i);
}

//Output
// I reached step 1
// I reached step 2
// I reached step 3
// I reached step 4
// I reached step 5
