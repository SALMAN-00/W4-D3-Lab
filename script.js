characters = [
  {
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
  },
  {
    name: "Leia Organa",
    height: 160,
    gender: "female",
    mass: 56,
    eye_color: "blue",
  },
  {
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
  },
  {
    name: "Chewie",
    height: 222,
    gender: "male",
    mass: 190,
    eye_color: "black",
  },
  {
    name: "kevien",
    height: 106,
    gender: "male",
    mass: 32.2,
    eye_color: "red",
  },
];
console.log(`
_________________Find()_________________
`);
let firstBlue = characters.find(x => {
  return x.eye_color == "blue";
});

console.log(firstBlue.name);
console.log(`______________________________`);
let firstMass = characters.find(x => {
  return x.mass > 50;
});
console.log(firstMass.gender);

console.log(`
  _________________Filter()_________________
  `);

let heightLess = characters.filter(x => x.height < 200);

console.log(heightLess);
console.log(`______________________________`);

let allMale = characters.filter(x => x.gender == "male");

console.log(allMale);
console.log(`______________________________`);

console.log(`
_________________Map()_________________
`);

let allName = characters.map(x => x.name);
console.log(allName);
console.log(`______________________________`);
let allHeight = characters.map(x => x.height);
console.log(allHeight);
console.log(`______________________________`);

console.log(`
_________________Sort()_________________
`);
let massLTH = characters.sort((x, y) => x.mass - y.mass);

console.log(massLTH);

console.log(`______________________________`);

let heightHTL = characters.sort((x, y) => y.height - x.height);

console.log(heightHTL);

console.log(`______________________________`);

console.log(`
_________________Evrey()_________________
`);

let everyMass = characters.every(x => x.mass > 40);
console.log(everyMass);
console.log(`______________________________`);

let everyHeight = characters.every(x => x.height < 200);
console.log(everyHeight);
console.log(`______________________________`);

console.log(`
_________________Some()_________________
`);
let isBlue = characters.some(x => x.eye_color === "blue");
console.log(isBlue);
console.log(`______________________________`);
let isTaller = characters.some(x => x.height > 210);
console.log(isTaller);
console.log(`______________________________`);
/*function blue(x){
    return x.eye_color == "blue"
}

console.log(characters.find(blue));
/*


/*
Lab2
console.log(`
_____________________________________________
`)
function sum( a , b){

    console.log(`${a} + ${b} = ${a+b}`)
}



function minu( a , b){

    console.log(`${a} - ${b} = ${a-b}`)
}
function mult( a , b){

    console.log(`${a} * ${b} = ${a*b}`)

}

function dive( a , b){

    console.log(`${a} / ${b} = ${a/b}`)
}

sum(3,3);
minu(3,3);
mult(3,3);
dive(3,3)
console.log(`
_____________________________________________
`)
let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for(i=0;i<=list.length;i++){
    let count
    if (list[i] % 2=== 0){
        count =list[i];
       console.log(`Even: ${count}`)
    } 
    else if (list[i] % 2 !== 0){
         count =list[i];
        console.log(`Odd: ${count}`)

    }
    console.log(list[i]);

}





console.log(`
_____________________________________________
`)
function Even(x){
    if(x % 2 === 0){
        console.log(`Even: ${x}`)
    }

}
function Odd(x){
    if(x % 2 !== 0){
        console.log(`Odd: ${x}`)
    }

}
console.log(`
_____________________________________________
`)




function ReversList(){
let reversList =[];
for(i =list.length; i>=1;i--){
let values = list[i]
reversList.push(values);
}
console.log(reversList);
}


ReversList();


lab1
/*details = [name, height, gender, mass, eye_color]
name = ["salman"];
height= [170], 
gender=["male"], 
mass=[18], 
eye_color=["balck"]

console.log(details)
*/
