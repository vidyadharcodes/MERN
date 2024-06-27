// for loop 
let n = 5;
for( let i = n ; i >= 1 ; i--){
    let str="*";
    let space = ' ';
    console.log(space.repeat((n-i))+str.repeat(i));
    }
// console.log(i);

// this would return an error coz let cant access outside the scope