

//------------------------------   QUESTION NO 26    --------------------------------------

console.log("-------------------   QUESTION NO 26    --------------------------------------");

console.log("\n--------------------FIRST VERSION -------------------");

let alienColor:string = "green";

if(alienColor==="green"){
    console.log("\n You got just 5 points for shooting the alien.");
    
}
else{console.log("You just earned 10 points.");
}
// SECOND VERSION :
console.log("\n--------------------SECOND VERSION -------------------");


if(alienColor==="blue"){
    console.log("You got just 5 points for shooting the alien.");
    
}
else{console.log("You just earned 10 points.");
}

//----------------------------------------   QUESTION NO 27  ----------------------------
console.log("\n___________________________   QUESTION NO 27 __________________________");

console.log("\n--------------------FIRST VERSION -------------------");

let alienColor1:string = "green";

if(alienColor1==="green"){
    console.log("\n The player earned  5 points.");
    
}
else if (alienColor1 === "yellow") {
    console.log("The player earned 10 points.");
    
} else if (alienColor1 === "red"){
    console.log("the player earned 15 points.");
}


console.log("\n--------------------  SECOND VERSION -------------------");

let alienColor2:string = "yellow";

if(alienColor2==="green"){
    console.log("\n The player earned  5 points.");
    
}
else if (alienColor2 === "yellow") {
    console.log("The player earned 10 points.");
    
} else if (alienColor2 === "red"){
    console.log("the player earned 15 points.");
}
    

console.log("\n--------------------  THIRD VERSION -------------------");

let alienColor3:string = "red";

if(alienColor3==="green"){
    console.log("\n The player earned  5 points.");
    
}
else if (alienColor3 === "yellow") {
    console.log("The player earned 10 points.");
    
} else if (alienColor3 === "red"){
    console.log("the player earned 15 points.");
}

//------------------------------------   QUESTION NO 28  --------------------------------------
console.log("\n_______________________   QUESTION NO 28 ____________________________");


let age:number = 19;

if(age<2){
    console.log("The person is a baby.");
}
else if(age>2 && age<4){
    console.log("The person is a toddler.");
}
else if(age >=4 && age<13){
    console.log("The person is a kid.");
}
else if(age>=13 && age<20){
    console.log("Te person is teenager.");   
}
else if(age >=20 &&age<65){
    console.log("The person is adult. "); 
}
else{console.log("The person is elder.");
}
//--------------------------------------   QUESTION NO 29  --------------------------------------
console.log("\n_________________________   QUESTION NO 29 _________________________________");

let favorite_Fruits:string [] = ["Mango", "Banana","Apple"];
if(favorite_Fruits.includes("Mango")){
    console.log("\nI really like mango.");
}

if(favorite_Fruits.includes("Apple")){
    console.log("I really like Apple.");
}
if (favorite_Fruits.includes("orange")){
    console.log("I really like orange");
    
}if(favorite_Fruits.includes("Banana")){
    console.log("I really like Banana.");
}
if(favorite_Fruits.includes("water melon")){
    console.log("I really like water melon.");
}
//--------------------------------------   QUESTION NO 30  --------------------------------------
console.log("\n_________________________   QUESTION NO 30 _________________________________\n");

let userNames:string [] = ["Hassan", "Adil", "Maida" ,"Rijja " ,"Admin"];
 userNames.forEach(user=>{
    if(user==="Admin"){
        console.log(` Hello ${user}, would you like to see a status report?`)
    }
     else {console.log(` Hello ${user}, thank you for logging in again.`);
    }
});
