

// ------------------------------------------ Q.No. 41 ------------------------------------
console.log("-------------------------------- Q.No. 41 ------------------------------------\n");
 

function show_magicians(magicians:string[]){
    magicians.forEach(name=>
        console.log(name))
 };
  let magician_names :string [] = ["Zakoota", "Hamoon", "Rozi"];
 show_magicians(magician_names);


 // ------------------------------------------ Q.No. 42 ------------------------------------
console.log("\n--------------------------------- Q.No. 42 ------------------------------------\n");

function show_magicians2(magicians:string[]){
    magicians.forEach(name=>
    console.log(name)
)};
  function make_great(magicians:string[]){
  return magicians.map(name=>`The Great ${name}`);
  }

  let magician_names2 :string [] = ["Zakoota", "Hamoon", "Rozi"];

  let greatMagician = make_great(magician_names2)

 show_magicians2(greatMagician);
 
 
   // ------------------------------------------ Q.No. 43 ------------------------------------
 console.log("\n------------------------------- Q.No. 43 ------------------------------------\n");

 function show_magicians3(magicians:string[]){
    magicians.forEach(name=>
    console.log(name)
)};
  
 function make_great3(magicians:string[]){
  return magicians.map(name=>`The Great ${name}`);
  }
   
  // Original Array :
  let magician_names3 :string [] = ["Zakoota", "Hamoon", "Rozi"];
  
  // Copy of Array :
let copy_magician_names3:string [] = magician_names3.slice();


let modified_new_array = make_great3(magician_names3);

console.log("printing original array:\n");
show_magicians3(magician_names3);

console.log("\n printing modified array:\n");
show_magicians3(modified_new_array);

// ------------------------------------------ Q.No. 44 ------------------------------------
console.log("\n------------------------------ Q.No. 44 ------------------------------------\n");

function makeSandwich (...items:string[]){
    console.log("Make a sandwich with the following items:\n");
    items.forEach(names=>console.log(names));
    console.log(("\n Now enjoy sandwich."));  
};
console.log("\n Argument no 1:");
makeSandwich("mayo","garlic","chicken","cheese");

console.log("\n Argument no 2:");
makeSandwich("bread" , "meat" , "cucumber");

console.log("\n Argument no 3:");
makeSandwich("chicken" , "egg" , "chillies", "ketchup");

// ------------------------------------------ Q.No. 45------------------------------------
console.log("\n------------------------------ Q.No. 45 ------------------------------------\n");


interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary additional properties
}

function carInfo(manufacturer: string, model: string, ...options: [string, any][]): Car {
    let car: Car = { manufacturer, model };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
};
console.log(
 carInfo("Toyota","Corolla" ,["color","black"],["Year",2023]));