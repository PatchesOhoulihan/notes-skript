let a = 2;
console.log(typeof a);
console.log("--------------------------------------");
console.log(console);
console.log("--------------------------------------");

let b = 2;
console.log("Erst bin ich ein: " + (typeof b));
b = "Hallo";
console.log("Jetzt bin ich ein: " + (typeof b));
console.log("--------------------------------------");


//Implizite Typenumwandelung.
//Irgendetwas + mit einem String genommen. Wird der irgendwas wert in einen String konvertiert.
let c =  "hallo";
console.log(b + 2);


//Explizite Typenumwandelung
let d = "1234";
console.log("Momentan bin ich ein: " + (typeof d));
console.log("Die Zahl wird in eine: " + typeof Number(d) + " konvertiert.");


//String Konkatination
let vorname = "Kalli";
let nachname = "Klaps";
let name = vorname + " " + nachname;
console.log(name);


//Template Strings
let greetingTemplate = `Herzlich Willkommen: ${vorname} ${nachname}`;
console.log(greetingTemplate);


//Konstanten(ECMA6 only)
//Notation SCREAMING snakecase
const VAT_RATE = 19;

//Variablen notation in Camelcase
let ichBinEineTasseAusMarzipan = 13;


//use strict => Macht den kompiler bissiger gegenüber Syntax fehler


//Das Math Objekt
let number1 = Math.sqrt(16);
let number2 = Math.pow(2,2);
console.log(number1);
console.log(number2);
console.log(Math.PI);
console.log("Abrunden: 40.5 " + Math.floor(40.5));
console.log("Aufrunden: 40.2 " + Math.ceil(40.2));
console.log("Kaufmännisches runden: 40.5 " + Math.round(40.5));
console.log("Randomisierte Zahlen zwischen 0 und 1: " + Math.random());
console.log("Randomisierte Zahlen zwischen 1 und n: " + (Math.random() * 6)+1);


//Zahlenwerte in Boolean konvertieren
var test = 0;
console.log("O wird zu einem Bool(false): " + Boolean(test));

var test2 = Math.random() * 6;
console.log("Eine randomisierte Zahl größer als 1 wird zu einem Bool(true): " + Boolean(test2));

//Strings in Boolean konvertieren
var test3 = "";
console.log("Leerer String wird zu einem Bool(false): " + Boolean(test3));

var test4 = "Mama";
console.log("Jeder anderer String wird zu einem Bool(true): " + Boolean(test));


//Relationale Operatoren

//Wertgleichheit
console.log("Test auf Wertgleichheit: " + ("18" == 18));

//Wertgleichheit mit Typegleichheit
console.log("Test auf Typegleichheit: " + ("18" === 18));

//Wertungleichheit
console.log("Test auf Wertungleichheit: " + ("18" !== 18));

//Wertungleichheit & Typeungleichheit
console.log("Test auf Wert- Typeungleichheit: " + ("18" != 18));


//Kontrollstrukturen if
let userAge = 19;

if(userAge >= 18){
    console.log("Der Nutzer ist mindestens 18 Jahre.");
}

userAge = 12;

if(userAge >= 18){
    console.log("Der Nutzer ist mindestens 18 Jahre.");
}
else
{
    console.log("Der Nutzer hat noch nicht das 18te Lebensalter erreicht.")
}

console.log("Sorry Dave, i can't do this.");

