

//-------------------------------------------   QUESTION NO 31  --------------------------------------
console.log("\n______________________________   QUESTION NO 31 _________________________________\n");

let userNames : string [] = ["Hassan", "Adil", "Maida" ,"Rijja " ,"Admin"];
 userNames=[];

if(userNames.length === 0){
    console.log("We need to find some users!");
}else(userNames.forEach(user=>{
    if(user==="Admin"){
        console.log(`\n Hello ${user}, would you like to see a status report?`)
    }
     else {console.log(`\n Hello ${user}, thank you for logging in again.`);
    }
}));

//-------------------------------------------   QUESTION NO 32  --------------------------------------
console.log("\n______________________________   QUESTION NO 32 _________________________________\n");

let current_users : string [] = ["Mahjabeen","Faiza" , "Rameez" ,"Jibran","Shaheen"];
let new_users :string [] = ["Qamar" , "Mahjabeen" ,"Khadija" , "Mahtab" , "Jibran"];

new_users.forEach(newOne=>{
   let our_condition = current_users.some(currentOne=>currentOne.toLowerCase() ===newOne.toLowerCase());
   if(our_condition){
    console.log(`Sorry!${newOne} is not available.`);
   }else{console.log(`${newOne} is available.`);
   }
});

//-------------------------------------------   QUESTION NO 33  --------------------------------------
console.log("\n______________________________   QUESTION NO 33 _________________________________\n");


let numbers  = [1,2,3,4,5,6,7,8,9];

for(let oneNumber of numbers){
    let ordinalEnding :string;
    let rank:string;
    
    if(oneNumber===1){
        ordinalEnding="st"
        rank="position"
    }else if(oneNumber===2){
        ordinalEnding="nd"
        rank ="position"

    }else if(oneNumber===3){
        ordinalEnding="rd"
        rank="position"

    }else {ordinalEnding="th" 
        rank ="rank"
    }
    console.log(`${oneNumber}${ordinalEnding}   ${rank}`);
}

//-------------------------------------------   QUESTION NO 34  --------------------------------------
console.log("\n______________________________   QUESTION NO 34 _________________________________");

// using for loop :
console.log("\n using for loop___________ :\n");

let pizza : string []= ["pepperoni ", "fajita", "veggie" ,"chicken tikka"];

for(let i=0 ; i<pizza.length ; i++){
    
    console.log(` I like ${pizza[i]} pizza`);
};

// outside for loop :
console.log("\n outside for loop ___________:\n");

console.log("I love pizza so much.\nIt's my favorite food.\nFajita flavor is my most favorite one .\nI can't live without it.  ");
console.log("I really love pizza.");


//-------------------------------------------   QUESTION NO 35  --------------------------------------
console.log("\n______________________________   QUESTION NO 35 _________________________________\n");

let pet :string [] = ["dog", "cat" ,"duck" ,"rabbit"];
//printing the message using for loop

for (let onepet of pet){
    console.log(`Using for loop:   A ${onepet} would make a great pet.`);
};
// printing message outside the for loop:
console.log("\nOutside the for loop :  Any of these animals would make a great pet.");
