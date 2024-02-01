const friends = ['shafiul', 'nadim', 'hasan', 'junu'];
const friendsSorted = friends.sort();
console.log(friendsSorted);

const numbers =  [1,3,5,7,9];
const numbers_asc = [...numbers].sort(function(a, b){return a - b})
const numbers_dsc = [...numbers].sort(function(a, b){return b - a})
console.log(numbers_asc);
console.log(numbers_dsc);