let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length - 1] - ages[0]);
//I subtracted the first element from the last element
ages.push(8);
//I added a new element to the array
console.log(ages[ages.length - 1] - ages[0]);
//I again subtracted the first element from the last element
let count = 0;
for (let i = 0; i < ages.length; i++) {
    count += ages[i];
    //I added all elements together
}
count = count / ages.length;
//I divided the sum of elements by the number of elements to find average
console.log(count);
//I print the result



let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let a = 0;
// a counts the letters and then divide by the number of names to find average
let b = "";
//store the name itself and then each name is separated by space
for (let i = 0; i < names.length; i++) {
    a = a + names[i].length;
} a = a / names.length;
console.log(a);
//a is the average of the letters in the array
for (let j = 0; j < names.length; j++) {
    b = b + names[j] + " ";
}
console.log(b);
// all the names are printed by a separated space 



//question3 - I will access the last element: number of elements minus one:
//nameArray[nameArray.length - 1]

// answer to question 4 - First element of array = Array[0]

//answer to question 5

let nameLengths = [];
//creation of a new array that it's called nameLengths
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
    //I add the length of each name to the nameLengths array 
} console.log(nameLengths);


//answer to question 6

let c = 0;
for (let i = 0; i < nameLengths.length; i++) {
    c = c + nameLengths[i];
    // c calculates the sum of all the length of the elemnets in the array 
}
console.log(c);


//answer to question 7

// function wordRepeat(w, n) {
//     //in this function 
//     // w - is the word 
//     // n - is # of times word repeats itself
//     const finalWord = w.repeat(n);
//     //final word is empty box and the word.repeat is the value is the content in the box
//     return finalWord;
// }

function wordRepeat(w, n) {
    //in this function 
    // w - is the word 
    // n - is # of times word repeats itself
    let finalWord = "";
    for (let i = 0; i < n; i++) {
        finalWord = finalWord + w;
        //final word is empty box and the w word is the value is the content in the box
    }
    return finalWord;
}

console.log(wordRepeat("Hello", 3));


//answer to question 8

function fullName(firstName, lastName) {
    //fullName is the name of the function that combine
    //first and last name and it returns (come out) a full name
    let fn = "";
    //fn is an internal variable that store the fullName
    fn = firstName + " " + lastName;
    return fn;
    //the value stored in fn is returned 
    //meanning the output is the fullname
}

let w = fullName("Janifer", "Lopez");
//when we call the function- we need to pace real name
console.log(w);


//answer to question 9


function sumNumbers(number) {
    // i created a function that includes numbers
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum = sum + number[i]
        //sum is the addition of numbers inside the function
        if (sum > 100)
        //if the sum is greater than 100 
        //the output is true
        {
            return true;
        }

    }
    return false;
    //if the sum is smaller than 100 
    //the output is false
}
let number = [25, 35, 10, 5, 10];
//creation of array of numbers
let s = sumNumbers(number);
//s sum the numbers in the array
console.log(s);
//printing of the sum of numbers


//answer to question 10

function average(number) {
    // i created a function that includes numbers
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum = sum + number[i]
        //sum is the addition of numbers inside the function

    }
    sum = sum / number.length;
    //finding the average
    return sum;

}
let Array = [25, 35, 30, 35, 100];
//creation of array of numbers
let av = average(Array);
//s sum the numbers in the array
console.log(av);
//printing of the sum of numbers


//answer to question 11

function avarageOfArrays(num1, num2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < num1.length; i++) {
        sum1 = sum1 + num1[i]
        //sum of numbers of first array
    }
    sum1 = sum1 / num1.length;
    //average of numbers in the first array

    for (let j = 0; j < num2.length; j++) {
        sum2 = sum2 + num2[j];
        //sum of numbers in the second array
    }
    sum2 = sum2 / num2.length;
    //average of numbers in the second array
    if (sum1 > sum2) {
        return true;
        //if average of numbers in the first array is 
        //greater than second array, return is true,
        //meaning the output is true.
    }
    else {
        return false;
    }
}
let num1 = [35, 65, 86, 18, 120];
let num2 = [15, 70, 42, 30, 18];
let average1 = avarageOfArrays(num1, num2);
console.log(average1);


//answer to question 12

function willBuyDrink(isHotOutside, moneyInPocket) {
    //Creation of a function that is called willBuyDrink
    //and includes inside isHotOutside and moneyInpocket

    if (isHotOutside && moneyInPocket > 10.50) {
        //if it's hot outside and he has money that is
        //greater than 10.50, the output is true, and 
        //he can buy a drink, if not, the output is false
        return true;
    }
    else {
        return false;

    }

}
let will = willBuyDrink(true, 15);
console.log(will);


//answer to question 13

function willGoToSwim(carRunning, poolOpen, feelingWell) {
    if (carRunning && poolOpen && feelingWell) {
        //if my car is running well and the pool is open, 
        //and if i'm feeling well, so I will go to swim
        //and the output is true, I wrote it because it's fun!!
        return true;
    }
    else {
        return false;
    }
}
let swim = willGoToSwim(true, true, true);
console.log(swim);