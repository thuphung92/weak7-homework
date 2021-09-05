//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function dish(person)
{
    for(let k in person)
    {
        if (Array.isArray(person[k]))
        {
            console.log(person[k])
        }
    //console.log(person.k)
    }
}

dish(person3)



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(_name, age){
    this.name = _name;
    this.age = age;

    // Use an arrow to create the printInfo method
    this.printInfo = () => console.log(`${_name}: ${age} years old`);

    this.addAge = () => age +=1;
    
}

let user1 = new Person('Quinn',25)
user1.printInfo()
console.log(user1.addAge())
console.log(user1.addAge())
console.log(user1.addAge())

let user2 = new Person('Dennis', 33)
user2.printInfo()
console.log(user2.addAge())
console.log(user2.addAge())
console.log(user2.addAge())


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


const stringLength = (str) => {
    return str.split(' ').length
}

function slowCount (str) {
    return new Promise((resolve) => {setTimeout(resolve(stringLength(str)),2000)})
}

async function checkString(str) {
    const len = await slowCount(str);
    if(len>10){return console.log('Big word')}
    {return console.log('Small Number')}
}
 
console.log(checkString('this is a test. wanna make this string a big word'))
console.log(checkString('this is another test.'))


// ============= CODEWARS 1 ============//
/*
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"

*/

function solution(a, b){
    if(a.split('').length < b.split('').length){
      return a+b+a
    }else{return b+a+b}
  }

// ============= CODEWARS 2 ============//
/*
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

*/

function cockroachSpeed(s) {
    return Math.floor(s*(10**5)/3600);
  }