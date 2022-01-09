//Call : It is a method that is passes as an argument seperately.
//Apply : It is a method that is passes as an argument in array.


//------------------- Call -------------------------------

const person = {
    fullName : function(city , country)
    {
        console.log(this.firstName + " " + this.lastName + "," + city + "," + country);
    }
}

const personName = {
    firstName : "Aman",
    lastName : "Baghel"
}

person.fullName.call(personName , "Delhi" , "New Delhi");


//-------------------- Apply -------------------------------
const collegeNameList = {
    collegeFun : function(city , country)
    {
        console.log(this.college + ` is situated in ` + city + "," + country);
    }
}

const collegeName = {
    college : "Guru tegh bahadur institute of technology"
}

collegeNameList.collegeFun.apply(collegeName , ["Delhi" , "New Delhi"]);