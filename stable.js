//LESSON-3CODE
let horseName = "Estabon";
console.log(horseName);
// horseName = "Justin";
console.log(horseName)

let horseAge = 5;
console.log(horseAge);

let isHorseInside = true;
console.log(isHorseInside);

//LESSON-4 CODE
//try to end codes with ";"
console.log(typeof horseName);
console.log(typeof horseAge);
const STABLE_MONTHLY_FEE = 420; //"const" can update value, Uppercase is preffered
console.log(STABLE_MONTHLY_FEE);

console.log(STABLE_MONTHLY_FEE * 3);
console.log(STABLE_MONTHLY_FEE + STABLE_MONTHLY_FEE);
console.log(STABLE_MONTHLY_FEE - 40);
console.log(34/4);

console.log("serving" + " cunt");
console.log("hi" + 69); // type coercion will not work with any other operators but the "+" one
console.log(2 - "hi");
console.log(2 - "2"); //type coercion

console.log(false + "NaN");
console.log(false + 2)// type coercion

console.log("The stable monthly fee is " + STABLE_MONTHLY_FEE);
console.log(`My horse's name is ${horseName}" and he is "${horseAge}" years old!`); //${hello} stead of using the "+"
// speelcheck plugin <--- try it out

//LAB 4 Stuff here

let horseNickname = "Mike";
console.log(`my horse's name is ${horseNickname}`);

const MONTHLY_FEE=100;
console.log(`I would save 10% discount of $${MONTHLY_FEE/10 * 3} if I stay 3 months `);


//LAB 5 Stuff Here

if (horseName === "Estabon" && isHorseInside !== true){
    console.log(`My horse ${horseName} is inside the stable!`);}
        else {console.log(`${horseName} is not outside!`);}