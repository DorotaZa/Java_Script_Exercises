//Color change box
let button = document.querySelector("button");
let box = document.getElementById("changeMe");

button.onclick = function changeColor() {
  if (box.style.background === "red") {
    box.style.background = "blue";
  } else {
    box.style.background = "red";
  }
};

//Leap year challenge
function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 == 0) {
      if (year % 400 === 0) {
        return "It's a leap year.";
      } else {
        return "It's not a leap year.";
      }
    } else {
      return "It's a leap year.";
    }
  } else {
    return "It's not a leap year.";
  }
}

console.log(isLeap(2000));
console.log(isLeap(2002));
console.log(isLeap(1997));
console.log(isLeap(2300));
console.log(isLeap(2400));

//FIZZBUZZ challenge
var output = [];
var num = 1;

function fizzBuzz() {
  while (num <= 100) {
    if (num % 3 === 0 && num % 5 === 0) {
      output.push("FizzBuzz");
    } else if (num % 3 === 0) {
      output.push("Fizz");
    } else if (num % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(num);
    }
    num++;
  }
  console.log(output);
}
//function checked in the console by calling out

//Random selector
names = ["Jonathan", "Michael", "Angela", "Patrick", "Luna"];
function whoIsPaying(names) {
  var numOfPeople = names.length;
  var randomPosition = Math.floor(Math.random() * numOfPeople);
  var randomPerson = names[randomPosition];

  return randomPerson + " is paying";
}
//function checked in the console by calling out

//99 bottles song
var numOfBottles = 99;
function printTheSong() {
  while (numOfBottles >= 0) {
    if (numOfBottles === 0) {
      console.log("No more bottles of beer on the wall.");
      numOfBottles--;
    } else {
      console.log(numOfBottles + " bottles of beer on the wall.");
      console.log(numOfBottles + " bottles of beer,");
      console.log("Take one down, pass it around,");
      numOfBottles--;
    }
  }
}

//Fibonacci Sequence
function fibonacciGenerator(n) {
  var output = [];
  //first two values in output array are predefiened; have to check that conditions below
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    //checking if output length ==== n
    for (i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}
