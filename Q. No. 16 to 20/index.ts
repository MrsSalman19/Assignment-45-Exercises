

//  ----------------------------------------- Question no 16 ----------------------------
console.log("\n ---------------------------- Question no 16  ----------------------------\n");

let guestList:string[] = ["Rani" ,"Insha" ,"Afrin" , "Umaima"];

//add name of a guest in the start of array
guestList.unshift("Bina kanwal");


//adding the guest in the middle of array
let middleIndex:number= Math.floor(guestList.length/2);
guestList.splice(middleIndex,0,"Zunaira");

//adding the guest in the last of array
guestList.push("Ammara baig");

console.log(guestList);


//updated invitation 

console.log(`UPDATED LIST OF GUESTS\n`);

guestList.forEach(guest=>{
   console.log(`Assalam o alaikum dear ${guest}!would you like to have dinner with me today?`);
   
})
//  ---------------------------------------- Question no 17 ----------------------------
console.log("\n ---------------------------- Question no 17  ----------------------------\n");


//new dinner table is not arranged  
console.log(`We are sorry!the new dinner table won't arrive on time ,so we can invite only two persons.`);

while(guestList.length>2){
   let removedGuest=guestList.pop();
   console.log(`Dear ${removedGuest}!we are sorry to invite you today.`);
};
//invitation to the last two guests
console.log(`\n INVITATION TO THE LAST TWO GUESTS\n` );
guestList.forEach(lasttwo => {
   console.log(`Dear ${lasttwo} you are still invited.`);
});
//removing last two guests

guestList.pop();
guestList.pop();
console.log(`\nEmpty List : ` ,guestList);



//  -------------------------------- Question no 18 ----------------------------
console.log("\n -------------------- Question no 18  ---------------------\n");



let countriesToVisit:string[] = ["makkatul mukarrama","China" ,"Brazil" , "Denmark" ,"Argentina"];
console.log("Original Order:" ,countriesToVisit);

//  Alphabetical Order:
console.log("Alphabetical Order:",[...countriesToVisit].sort());

//showing it's original order:
console.log("stil in original order",countriesToVisit);

//printing the array in reverse order without modifying the original array:
console.log("Reverse Order :" ,[...countriesToVisit].reverse());

//showing it's original order:
console.log("stil in original order",countriesToVisit);

//original array order reversed:
console.log("Original Array Reversed:",countriesToVisit.reverse());

// printing the arrray back in it's original order
console.log("Back to original array:",countriesToVisit.reverse());
 

// to change the order alphabetically of original array:
console.log("sorted original array alphabetically:",countriesToVisit.sort());

// changing the order of original array back in it's original order:
console.log("Original Array:" , countriesToVisit.reverse());



//  ---------------------------------------  Question no 19   -----------------------------
console.log("\n ---------------------------- Question no 19 ----------------------------\n");

let guestList1:string[] = ["Rani" ,"Insha" ,"Afrin" , "Umaima"];

let lengthOfGuest :number = guestList1.length;
console.log(`We invited total no of guests= ${lengthOfGuest}`);

//  --------------------------------------   Question no 20  ------------------------------
console.log("\n ---------------------------- Question no 20  ----------------------------\n");


let programinglanguage:string []= ["javascript" ,"typescript","PHP" ,"Python"];
console.log("LIST OF PROGRAMMING LANGUAGES:\n");

programinglanguage.forEach(lang =>{
   console.log(lang);
   
});
