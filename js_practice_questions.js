//Section 1

//what types are these? Write your answer in a comment beside it.

1;          //number 
"cat";      //string
true;       //boolean
[];         //object -- in JS, it's 'a list-like object' (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
{};         //object
1.1;        //number
undefined;  //undefined

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat";      //true
true;       //true
NaN;        //false
[];         //true
{};         //true
undefined;  //false
"";         //false
0;          //false


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
var number = 0;

//3.2 Assign a variable that is a string
var string = "string";

//3.3 Assign a variable that is a boolean
var boolean = false;

//3.4 Assign a variable that is an object
var anObject = {};
var anotherObject = new Object();

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
var counter = 0;

if ( counter > 0 ) {
  console.log( "hello" );
}
else {
  console.log( "bye" );
}

//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable
var firstElement = animals[0];

//5.2. Assign the last element to a variable
var lastElement = animals[animals.length - 1];

//5.3. Assign the length of an array to a variable
var arrayLength = animals.length;

//5.4. Add an item to the end of the array
animals.push("dormouse");

//5.5. Add an item to the start of the array
animals.unshift("porcupine");

//5.6. Assign the index of hedgehog to a variable
var indexOfHedgehog = animals.indexOf("hedgehog");


//Section 6

//6.1 Create an array of 5 vegetables
var vegList = ["artichoke", "water chestnut", "fennel", "endive", "asparagus"];

//6.2 Loop over the array and write to the console using a "while"
var counter = 0;
while ( counter < vegList.length ) {
  console.log( "vegetable " + (counter + 1) + ": " + vegList[counter] );
  counter++;
}

//6.3 Loop again using a "for" with a counter
for (var counter = 0; counter < vegList.length; counter++ ) {
  console.log( "vegetable " + (counter + 1) + ": " + vegList[counter] );
}

//6.4 Loop again using a "for in"
for ( var vegetable of vegList ) {
  console.log( vegetable );
}

//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

//7.1 Calculate the total cash in accounts
var arrayOfAmounts = [];
for (var i = 0; i < accounts.length; i++ ) {
  arrayOfAmounts.push(accounts[i].amount);
}
console.log(arrayOfAmounts);

var totalAll = function() {
  var total = 0;
  for (var i = 0; i < arrayOfAmounts.length; i++ ) {
    total += arrayOfAmounts[i];
  }
  return total;
}

//7.2 Find the amount of money in the account with the largest balance
var largestAmount = function() {
  return Math.max.apply(this, arrayOfAmounts);
}
// ?don't totally get what 'this' keyword is/does; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

//7.3 Find the name of the account with the smallest balance
var smallestAmount = function() {
  return Math.min.apply(this, arrayOfAmounts);
}

var smallestAccountName = function() {
  for (var i = 0; i < accounts.length; i++ ) {
      if ( accounts[i].amount === smallestAmount() ) {
        return accounts[i].name;
      }
    }
}

//7.4 Calculate the average bank account value
var averageAmount = function() {
  var mean = totalAll() / arrayOfAmounts.length;
  var meanRounded = Math.round(mean * 100) / 100;
  return meanRounded;
}

//7.5 Find the value of marcs bank account
var marcsValue = function() {
  for (var i = 0; i < accounts.length; i++ ) {
    if (accounts[i].name === "marc" ) {
      return accounts[i].amount;
    }  
  }
}

//7.6 Find the holder of the largest bank account
var largestHolder = function() {
  for (var i = 0; i < accounts.length; i++ ) {
    if ( accounts[i].amount === largestAmount() ) {
      return accounts[i].name;
    }
  }
}

//7.7 Calculate the total cash in business accounts
var businessTotal = function() {
  var total = 0;
  for (var i = 0; i < accounts.length; i++ ) {
    if ( accounts[i].type === "business" ) {
      total += accounts[i].amount;
    }
  }
  return total;
}

//7.8 Find the largest personal account owner
var arrayOfPersonalAmounts = [];
for (var i = 0; i < accounts.length; i++ ) {
  if ( accounts[i].type === "personal" ) {
    arrayOfPersonalAmounts.push(accounts[i].amount);
  }
}

var largestPersonalAmount = function() {
  return Math.max.apply(this, arrayOfPersonalAmounts);
}

var largestPersonalOwner = function() {
  for (var i = 0; i < accounts.length; i++ ) {
    if ( accounts[i].amount === largestPersonalAmount() ) {
      return accounts[i].name;
    }
  }
}

//Section 8
//Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method
var myPerson = {
  name: "Betty",
  heightInCm: 170,
  favouriteFood: "lobster",
  eatMethod: eat()
}

function eat() {
  return "I am eating.";
}
// ?"I'm eating" here returns 'I\'m eating', and neither escape ('I\'m eating') nor double quotes ("I'm eating") seems to solve this?

