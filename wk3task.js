let ages = [3, 9, 23, 64, 2, 8, 28, 93] ;
console.log(ages[ages.length - 1]- ages[0]) ;
//I subtracted the first element from the last element
ages.push(8) ;
//I added a new element to the array
console.log(ages[ages.length - 1]- ages[0]) ;
//I again subtracted the first element from the last element
let count = 0;
for (let i=0; i < ages.length; i++)  {
    count += ages[i] ;
    //I added all elements together
}
count = count / ages.length ;
//I divided the sum of elements by the number of elements to find average
console.log(count);
//I print the result

let names =['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'] ;
let a = 0 ;
// a counts the letters and then divide by the number of names to find average
let b = "" ;
//store the name itself and then each name is separated by space
for (let i = 0; i < names.length; i++) {
    a = a + names[i].length ;
} a = a / names.length ;
    console.log(a) ;
    //a is the average of the letters in the array
for (let j =0; j < names.length; j++) {
    b = b +  names[j] + " ";
}
    console.log(b) ;
   // all the names are printed by a separated space 

   //question3 - I will access the last element: number of elements minus one:
   //nameArray[nameArray.length - 1]

   // Question 4 - First element of array = Array[0]

   let nameLengths=[] ;
   for (let i = 0; i < names.length; i++) {
        nameLengths.push(names[i].length) ;
        //I add the length of each name to the nameLengths array 
   } console.log(nameLengths) ;

let c = 0;
   for(let i=0; i < nameLengths.length; i++) {
    c= c + nameLengths[i] ;
   // c calculates all the length of the elemnets in the array 
   } console.log(c) ;