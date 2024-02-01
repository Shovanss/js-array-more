const friends = ['shafiul', 'nadim', 'hasan', 'junu'];
console.log(friends);
const reversed = friends.reverse();
console.log(reversed);

const rev_friends = [];
for(const friend of friends){
    console.log(friend);
    rev_friends.push(friend);
   
}
console.log(rev_friends);
const reversed_numbers = [];
for(let i = 0;i < friends.length; i++){
const friend = friends[i];
reversed_numbers.unshift(friend);
}
console.log(reversed_numbers);

// reverse side
for(let i = friends.length -1; i >= 0; i--){
    const friend = friends[i];
    console.log(friend);
}