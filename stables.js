// Welcome!
//
//                   (())                              
//                 (((())(()),,)\.~,,._
//                (((( `  (())`)\))),,_
//                / \   / \ ''((\)))),,_              
//               | ●    ●  |   ''((\())) "-._______________-__.-"`-.-,
//                \       /'\    ''))))'                                \)))
//                |      |   `.     ''                       X           ((((
//                 \  _  )    /                                   X      |))))    ____
//                  \_._./'   |                                         (((((())
//                             \                       |                ))))))  ______
//                              `|    |                ,\              ((((((          (
//                              |     / `-.__________________.<  \   |  )))))           
//                              |   |  /                     `. \  \  ((((
//                               \ / \ |                       `.\  | (((
//                               \ | | |                          | |  ))
//                               | | | |                          || | ((
//                               | | | |                          || |
//                               | | | |                          || | 
//                               | | | |                          || |  
//                               | | | |                          || |  
//                               /_|____|                         /____|
//
// This is a template for the final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// You can copy and paste this into your stables.js file, and then use it to guide you.
// Please do not create a new file!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop -------------------------//


let horses = [];

let welcomeMessage = "Hello and welcome to the Goober Ranch Stables, Yee Haw!";

let lateFee = 250;

let stallTotal = 9;

//------------------------- First day -------------------------//

function horseMeats (name, nickname, favTreat, age, monthRate, isOutside, poopSmell, killCount){
    this.name = name;
    this.nickname = nickname;
    this.favTreat = favTreat;
    this.age = age;
    this.monthRate = monthRate;
    this.isOutside = isOutside;
    this.poopSmell = poopSmell;
    this.killCount = killCount;
    this.introduction = function () {
        return `One of the goober horses in this establishment is ${name}, they're the ripe age of ${age} and their poop smells like ${poopSmell}.`;
    }

    this.changeLocation = function() {
        if (this.isOutside === true) {
            this.isOutside = false;
            console.log(`${this.name} is now insidde.`)
        } else {
            this.isOutside = true;
            console.log(`${this.name} is now outside.`)
        }
    };

};

function introducing(horse) {
    return "Another goober we have at our stables is " + horse.name + " also known as " + horse.nickname + " and they have a kill count of " + horse.killCount + "!"
} 

const gloopglob = new horseMeats ("gloopglob", "glob", "marmalade", 34, 1500, false, "bubblegum", 0);
const dinglebottom = new horseMeats ("dinglebottom", "dingle", "horse meat", 85, 200, true, "stinky tofu", 13);
const goonari = new horseMeats ("goonari", "goon", "human", 6, 800, true, "blood", 72);

horses.push(gloopglob, dinglebottom, goonari);


const newHorse = {
    name: "dookie",
    nickname: "duke",
    favTreat: "poop",
    age: "23",
    monthRate: 600,
    isOutside: false,
    poopSmell: "popcorn",
    killCount: 4,
    changeLocation: function() {
        if (this.isOutside === true) {
            this.isOutside = false;
            console.log(`${this.name} is now insidde.`)
        } else {
            this.isOutside = true;
            console.log(`${this.name} is now outside.`)
        }
    }
};

horses.push(newHorse);


//dot notation
gloopglob.isHungry = false;
dinglebottom.isHungry = true;
goonari.isHungry = true;
newHorse.isHungry= false;



//------------------------- Stable roster -------------------------//

/*
name: "gloopglob",
nickname: "glob",
favTreat: "marmalade",
age: 34,
monthRate: 1500,
isOutside: false,
poopSmell: "bubblegum",
killCount: 0,
isHungry: false,
introduction: function () {
    return `One of the goober horses in this establishment is ${this.name}, they're the ripe age of ${this.age} and their poop smells like ${this.poopSmell}.`;


name: "dinglebottom",
nickname: "dingle",
favTreat: "horse meat",
age: 85,
monthRate: 200,
isOutside: true,
poopSmell: "stinky tofu",
killCount: 13,
isHungry: true,
introduction: function () {
    return `One of the goober horses in this establishment is ${this.name}, they're the ripe age of ${this.age} and their poop smells like ${this.poopSmell}.`;

name: "goonari",
nickname: "goon",
favTreat: "human",
age: 6,
monthRate: 800,
isOutside: true,
poopSmell: "blood",
killCount: 72,
isHungry: true,
introduction: function () {
    return `One of the goober horses in this establishment is ${this.name}, they're the ripe age of ${this.age} and their poop smells like ${this.poopSmell}.`;


name: "dookie",
nickname: "duke",
favTreat: "poop",
age: "23",
monthRate: 600,
isOutside: false,
poopSmell: "popcorn",
killCount: 4,
isHungry: false

*/

//---------------------- Growing business ----------------------//

let availableStalls = stallTotal - horses.length;
console.log(availableStalls);


if (availableStalls < 2) {
    console.log("We need to build more stalls");
} else {
    console.log(`We have ${availableStalls} available!`);
};

function calculateLatefee(horse) {
    const totalLatefee = horse.monthRate + lateFee; 
    console.log(`Silly old ${horse.name} will owe us a grand total of $${totalLatefee} if they're late! >:(`);
};

calculateLatefee(newHorse);

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

function findhorsesFavtreat(treat) {
   for (let i = 0; i < horses.length; i++) {
        if (horses[i].favTreat === treat) {
            console.log(`${horses[i].name} is CRAZY about ${treat}! Yummers!`);
            break;
        } else {
            console.log(`${horses[i].name} is revolted by the idea of eating ${treat}.`);
        } 
}
}   

findhorsesFavtreat("horse meat");

// Add loop that checks to find out if a certain horse likes a treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.

function horseNickname(goober) {
    return goober.nickname;
}
console.log(`${horseNickname(goonari)}`);

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

//------------------------- Day to day operations -------------------------//


function checkHorsePoopSmell(poopy) {
    for (let i = 0; i < poopy.length; i++) {
        if (poopy[i].poopSmell === "bubblegum") {
            console.log(`${poopy[i].name} has the sweetest poop smell, like bubblegum!`);
        } else {
            console.log(`${poopy[i].name}'s poop smells like ${poopy[i].poopSmell}.`);
        }
    }
}

checkHorsePoopSmell(horses);


function horseOutside(outside) {
    for (let i = 0; i < outside.length; i++) {
        if (outside[i].isOutside === false) {
            outside[i].isOutside = true;
            console.log(`${outside[i].name} has moved their stanky booty outside to touch some grass.`);
        }
    }
}

horseOutside(horses);


function mealTime() {
    console.log("MEAL TIME NOW!!!");
    
    horses.forEach(function(yoinkInside) {
        if (yoinkInside.isOutside === true) {
            yoinkInside.isOutside = false;
            console.log(`${yoinkInside.name} is being a lil pooper and needs to come inside to eat.`);
        } else {
            console.log(`${yoinkInside.name} is already munching down as we speak.`);
        }
        
        console.log(`${yoinkInside.name} is smooching up some ${yoinkInside.favTreat}!!!`);
    });
}
mealTime(horses);


//calling the function changeLocation for the method step
    horses.forEach(function(horse) {
        horse.changeLocation();
    });


let isDark = true;
function eepyTime() {
    
    horses.forEach(function(darkOutside) { 
        if (darkOutside.isOutside === true && isDark === true) { 
            darkOutside.isOutside = false;
            console.log(`${darkOutside.name} needs to get their cheeks to bed >:('`);
        }
    });
}

eepyTime();



//------------------------- Bonus -------------------------//

//Replace the ascii art at the top of the file with art representing your stable.
