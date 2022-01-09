//Callback function : Function that passes as an argument that is called callback function.

function personOne( name , newName , personTwo )
{
    console.log(`Hi ${name}, How are you buddy ?`);
    personTwo(newName);
}

function personTwo(newName)
{
    console.log(`I'm fine bro and How are you ${newName}`);
}

personOne("Aman" , "Rohit" , personTwo);