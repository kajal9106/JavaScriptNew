// "use strict"; // treat all JS code as newer version

// CONST VALUE IS FIX VALUE IN ALL OVER CODE 
const accountID = 12345

// let works smilarly var but it will be work with scope 
// like :
// for {

// }
let accountEmail = 'kajal.technotery@gmail.com'

//  IF WE NOT DEFINE ANY VALUE OF VAR SO IT WILL BE SHOW UNDEFINE AS O/P
let accountState;

/* var has many scope problem like ( block scope and functional scope ) that's why we can't use var in js code */
var accountPassword = "098765"

// we can also declare variable like below but it is not right way to declare variable
accountCity = "Ahmedabad"

// accountID = 250498  ( CONST VALUE WILL NOT CHANGE IT WILL BE FIX VALUE ) NOT ALLOWED

accountEmail = 'kajalshukla@gmail.com'
accountPassword = '12345'
accountCity = 'Baroda'

console.table([accountID, accountEmail, accountPassword, accountCity])


// *********** ----------------- // ALEART // ------------------- *********** //

// alert ('ALERT MESSAGE')

// ************ ----------------- // DATATYPES // ------------------- *********** //

/* ----------------- // primitive data types -------------------- */

// number => 2 to power of 53
// bigint
// string => " " ( define in quotations "kajal" )
// boolean => true/false
// null => // The Null type has exactly one value, called null. // standalone value and also this is an error of js but it define as object type 
// undefined
// Symbol => unique
// NaN 

console.log(typeof null);

/* --------------- // // Basic Conversion // // ---------------- */

let score1 = '33abc'
let score2 = 33
let score3 = 1

console.log(typeof score1); // string type
console.log(typeof(score2)); // number type
console.log(typeof(score3)); // number type

let valueInNumber = Number(score1); // conversion method
console.log(valueInNumber); // log for get value of conversion and this variable's O/P is NaN
console.log(typeof valueInNumber); // log for get value of conversion and type this variable's O/P is number type

// '33' => 33 number
// "33abc" => NAN [O/P]
// "33abc" => number [type]
// true => 1 and false => 0


let valueInBoolean = Boolean(score3); // conversion method
console.log(valueInBoolean); // log for get value of conversion and this variable's O/P is true ( boolean )
console.log(typeof valueInBoolean); // log for get value of conversion and this variable's O/P is Number

// if we declaired variable 1 => true , 0 => false

// object => 


// *********** ----------------- // Oparations // ------------------- *********** //


let value = 3;
let negValue = -value;

console.log(value);
console.log(negValue);

// console.log( 1 + 1 ); => Addition (O/P = 2)
// console.log( 1 + '1' ); => Addition (O/P = 11)
// console.log( 1 + 2 + "2" ); => ( O/P = 32 ) [ If first defined number conversion then it's output will be in number type behavior ]
// console.log( "1" + 2 + 2 ); => ( O/P = 122 ) [ If first defined string conversion then it's output will be in number type behavior ]

// console.log( 1 - 1 );
// console.log( 1 * 1 );
// console.log( 2 ** 4 );
// console.log( 1 % 1 );

let counter = 100
let subcounter = 110
counter++;
let addcounter = ++counter;

subcounter--;
let mincounter = subcounter--;


console.log(counter);
console.log(addcounter);
console.log(subcounter);
console.log(mincounter);

 

