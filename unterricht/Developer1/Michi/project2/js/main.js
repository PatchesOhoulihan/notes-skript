let myVar = prompt("4+5 = ?");

if(myVar == "9")
{
    alert("Du bist der derbste");
}
else{
    alert("Keine Sorge, ich schäme mich für uns beide.");
}

/*
    == Vergleich
         2 == 2 true
        '2'== 2 true
         2 == 3 false
        '3'== 2 false
        
    === Vergleich mit Typengleichheit.
         2 === 2 true
        '2'=== 2 false
         2 === 3 false
        '3'=== 2 false
    != Vergleich auf ungleichheit
    !== Vergleich ungleichheit mit Typengleichheit.
*/


let myVar2 = prompt("Erster Wert: ");
let myVar3 = prompt("Zweiter Wert: ");

alert("Das Ergebnis lautet: " + (Number(myVar2) + Number(myVar3)));

//Alternative Lösung

let myVar4 = parseInt(prompt("Erster Wert(alt.): "));
let myVar5 = parseInt(prompt("Zweiter Wert(alt.): "));

alert("Das Ergebnis lautet: " + (myVar4 + myVar5));



//Funktionen definition;

//Ecma5 Version
    let berechne= function(){
        
    }
//Ecma6 Version
    let berechne2 = () => {
        
    }
    
//berechne in full Glory
    let berechne3 = function(){
        let myVar2 = prompt("Erster Wert(Aus Funktion): ");
        let myVar3 = prompt("Zweiter Wert(Aus Funktion): ");

        alert("Das Ergebnis lautet: " + (Number(myVar2) + Number(myVar3)));  
    }
    
//Funktions Aufruf
    berechne3();


//Berechene die Hypothenuse(Mit Math Object)

let berechne4 = function(){
        let myVar6 = prompt("Geben sie die a Kathete ein: ");
        let myVar7 = prompt("Geben sie die b Kathete ein:  ");

        alert("die Länge der Hypothenuse lautet: " + (Math.sqrt(Math.pow(Number(myVar6), 2) + Math.pow(Number(myVar7), 2))));  
    }

berechne4();


//Abschrift Beamer Michis Version
let berechne5 = function(){
        let myVar8 = prompt("Geben sie die a Kathete ein(Michi): ");
        let myVar9 = prompt("Geben sie die b Kathete ein(Michi):  ");

        alert("die Länge der Hypothenuse lautet: " + (Math.sqrt((myVar8*myVar8)+(myVar9*myVar9))));  
    }

berechne5();

    
    
    