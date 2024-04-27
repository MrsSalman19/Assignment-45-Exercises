

//   -------------------------------   QUESTION NO. 21  ---------------------------------------------
console.log("-----------------------   QUESTION NO. 21  ---------------------------------------------");

// _________________________________    OBJECT  NO. 1  ______________________________________________


interface itCourse{
    courseName:string ;
    location:string ;
    onsiteStudents:number;

}
let itCourse = {
    courseName:"Gen AI" ,
    location : "Governor House Sindh" ,
    onsiteStudents : 50000 ,

} 
console.log("Object No. 1 : " ,itCourse);

// _________________________________    OBJECT  NO. 2  ______________________________________________

interface studentInformation {
    studentName :string ;
    fatherName : string ;
    class : string ;
    section :string ;
    rollNumber: number ;
}
 let studentInformation ={
    studentName :"Atia Khan ",
    fatherName : "Hamza Khan" ,
    class : "vi",
    rollNumber : " 1",
 }
 console.log("Object No. 2 : " ,studentInformation);
 

 //   -------------------------------   QUESTION NO. 22  ---------------------------------------------
  console.log("\n--------------------   QUESTION NO. 22  ------------------------------------------\n");
  
 let arr :string [] = [ "Lahore ", "Quetta ","Multan","Karachi"];
 
 // creating error :
 console.log("error created :",arr[5]);
  
 //Removing error :
console.log( "\n removing error:", arr[2]);

//   -------------------------------   QUESTION NO. 23  ---------------------------------------------
console.log("\n---------------------   QUESTION NO. 23  ------------------------------------------\n");


let six = 6;

//   TRUE STATEMENTS***************
console.log("TRUE STATEMENTS:");


// TEST NO.1
 console.log("Test  No.1:  'Is six = 6 ?'" , six==6);

 // TEST NO.2
 console.log("\nTest  No.2:  'Is six not equal to 7 ?'"   , six!=7);

 // TEST NO.3
console.log("\nTest  No.3:  'Is six greater than four ?'"   , six>4);

// TEST NO.4
 console.log("\nTest  No.4:  'Is six less than nine ?'", six<9);

 // TEST NO.5
 console.log("\nTest  No.5:  'Is six is equal to two plus four ?'", six==2+4);

 
 //   FALSE STATEMENTS***************
console.log( "\nFALSE STATEMENTS :");

// TEST NO.6
 console.log("\nTest  No.6:  'Is six not equal to six ?'", six!=6);

 // TEST NO.7
 console.log("\nTest  No.7:  'Is six not equal to two multiply by three ?'", six!=2*3);

 // TEST NO.8
 console.log("\nTest  No.8:  'Is six is equal to four minus two ? '", six==4-2);

 // TEST NO.9
 console.log("\nTest  No.9:  'Is six greater than two ? '", six>8);

 // TEST NO.10
 console.log("\nTest  No.10:  'Is six smaller than one multiply two?", six<1*2);

 //   -------------------------------   QUESTION NO. 24  ---------------------------------------------
 console.log("\n---------------------   QUESTION NO. 24  ------------------------------------------\n");  
 
 
let car:string =  "corolla" ;
let car2: string = "COROLLA";

// tests for equality and inequality
 console.log("\n* Tests for equality and inequality--------------------------------");
 
console.log("\n Is car equal to corolla ? " ,car == "corolla");
console.log(" Is car not equal to corolla ? ", car != "corolla");

// tests using lowercase function
console.log("\n *Tests using lowercase function------------------------------------");

console.log("\n Is car and car2 is equal after converting into lowercase ?"  , car2.toLowerCase() ==car);
console.log(" Is car and car2 is not equal after converting into lowercase ?"  , car2.toLowerCase() !=car);

//Numerical tests:
console.log("\n* Numerical tests--------------------------------------------------");



let ten :number = 10;

console.log("\n'Is ten  equal to ten '? ", ten==10);
console.log(" 'Is ten not equal to ten '? ", ten!=10);
 
//TESTS USING && AND || OPERATOR

console.log("\n*TESTS USING && AND || OPERATOR :");

console.log("\n Is ten equal to ten and ten equal to double the five?", ten==10 && ten ==5*2);
console.log("Is ten equal to six and ten is greater than forty?", ten==6 && ten>40);
console.log("Is ten less then five or ten greater than five ? ",ten<5 || ten >5);
console.log("Is ten equal to two or ten greater than or equal to twenty ?",ten ==2 || ten >=20);

//TESTS WHETHER THE ITEM IS IN AN ARRAY OR NOT ------------------------------
console.log("\nTESTS WHETHER THE ITEM IS IN AN ARRAY OR NOT ------------------------------");

let fruits :string [] = ["Apple", "Banana", "Mango" ,"Orange"];
 
// Included
console.log("\n Does fruits include Mango?",fruits.includes("Mango"));


//Not Included
console.log("Does fruits not include  Orange?",!fruits.includes("Orange"));

//   -------------------------------   QUESTION NO. 25  ---------------------------------------------

console.log(" \n -------------------   QUESTION NO. 25  ---------------------------------------------");
console.log("\n_____________ FIRST VERSION:_____________");

let alienColor :string = "Green" ;

if(alienColor==="Green"){
    console.log("Congrats!You got five points");    
}

console.log("\n ______________SECOND VERSION:_____________");

if(alienColor==="red"){
    console.log("sorry!You got no points.");    
}


