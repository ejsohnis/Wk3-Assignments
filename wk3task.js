let ages = [3, 9, 23, 64, 2, 8, 28, 93] ;
console.log(ages[ages.length - 1]- ages[0]) ;
ages.push(8) ;
console.log(ages[ages.length - 1]- ages[0]) ;
let count = 0;
for (let i=0; i < ages.length; i++)  {
    count += ages[i] ;
}
count = count / ages.length ;
console.log(count);