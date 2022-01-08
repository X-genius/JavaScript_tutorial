//HigherOrder Function : It is a function which is return a function that is called Higher Order Function

//Create an example of Interview Process

let candidate = (name) => {
    
    if(name === 'Aman Baghel')
    { 
       return function(topic)
       {
           console.log(`Hi My name is ${name} I'm a ${topic} developer`);
       }
    }

    else if(name === 'Kuldeep Rawat')
    {
        return function(topic)
        {
            console.log(`Hi My name is ${name} I'm a ${topic} developer`);
        }
    }

    else if(name === 'Aniket Ranjan')
    {
        return function(topic)
        {
            console.log(`Hi My name is ${name} I'm a ${topic} developer`);
        }
    }

    else
    {
        return function()
        {
            console.log(`No one in queue`);
        }
    }
}

candidate("Aman Baghel")("JavaScript");