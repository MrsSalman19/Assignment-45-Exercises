

// --------------------------------------- Question no 11  ----------------------------
console.log(" ---------------------------- Question no 11  ----------------------------\n");


//creating array
let names: string[]  = ["Sara" ,"shaheen ","Mahira" ,"Ghazala" , "Farwa"];

for (let i=0 ; i<names.length ; i++){
    console.log(names[i]);
    
}



//  ---------------------------------------- Question no 12  ----------------------------
console.log(" \n---------------------------- Question no 12  ----------------------------\n");

//sending  msg to  the geusts
for (let i=0 ; i<names.length ; i++){
    console.log(`Hello ${names[i]}!how are you today?`);
};

//  -------------------------------------- Question no 13  ----------------------------
console.log("\n ---------------------------- Question no 13  ----------------------------\n");


//crating an array of transportation

let transportationMoode:string[] = ["car" , "motorcycle" ,"bus" , "bicycle"];

transportationMoode.forEach(mode =>{
    console.log(`I would like to own a ${ mode}.`);
    
}); 


//  ---------------------------------------- Question no 14  ----------------------------
console.log("\n ---------------------------- Question no 14 ----------------------------\n");

// sending the invitationto the guests

let guestList:string[] = ["Rani" ,"Insha" ,"Afrin" , "Umaima"];
 guestList.forEach(guest=>{
    console.log(`Dear ${guest}!"You are cordially invited to a dinner."`);
    
 });
// printing the msg of the guest who can't cook food 
 console.log(`Insha can't make food.`);
 

 //  ---------------------------------------- Question no 15  ----------------------------
 console.log("\n ---------------------------- Question no 15  ----------------------------\n");

 //add or remove the guests from arrray

let newGuest:string [] = guestList.splice(1,1,"Erum Naz");
guestList.forEach(guest=>{
    console.log(`Dear ${guest} ! You are cordially invited to a dinner today."`);
    
});

//print message for the bigger table
guestList.forEach(guest=>{
    console.log(`\n Dear ${guest} !Good News,We have found a bigger dinner table. "`);
    
});
