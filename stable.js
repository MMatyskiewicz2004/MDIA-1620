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

//Lesson 6
// Horse = ["name", age, isInside, "nickname"]
let horseNames = [horseName, "Edger", "Gooner"];
let horseAges = [horseAge, 2, 10]
let horseLocations = [isHorseInside, false, true];
let crazyArray = [isHorseInside, "hi " + " there"];
console.log(horseNames.length); //lists the number of things in the "horseNames" Array
console.log(`Welcome to my stables! There are ${horseNames.length} horses staying here! Their names are : ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}`);
console.log("Welcome to Goontown, there are " + horseNames.length + " horses staying here!");
// console.log(horseAges [2])
// console.log(horseLocation [2])
if(horseLocations[2]){
    console.log(horseNames[2] + " is outside!");
}
console.log(horseAges[2] + horseAges[1]); //combinding the horse age

if(horseNames[0] === "Estabon") {
    console.log("Hi Estabon!")
}

if(horseNames.length < 5) {
    console.log("These stables are unpopular");
}

//Lab 6 Stuff

let horseNamestwo = [horseName, "Jimbo", "Jimbob"];
console.log(`Welcome to the Goober Stables, we have ${horseNamestwo.length} horses at our stable! Their silly cutie patootie names are ${horseNamestwo[0]}, ${horseNamestwo[1]}, ${horseNamestwo[2]}`);

if(horseNamestwo[0]){ 
    console.log(horseNamestwo[0] + " is outside")
} else {
    console.log(horseNamestwo[0])
}

if(horseNamestwo[1]){ 
    console.log(horseNamestwo[1] + " is outside")
} else {
    console.log(horseNamestwo[1])
}

if(horseNamestwo[2]){ 
    console.log(horseNamestwo[2] + " is outside")
} else {
    console.log(horseNamestwo[2])
}