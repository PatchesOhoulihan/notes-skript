
    

//Die while Schleife

//var status = true;
//
//while(status){
//    console.log("Super!");
//    status = confirm("Nochmal?(While Schleife)");
//    alert("Wert Status: " + status);
//}

//Die do While Schleife

//do{
//    
//    console.log("Super!");
//    
//}while(confirm("nochmal? (Do While Schleife)"));
    
//Selbst aufrufende funktion
(() => {})();



Elemente aus dem Aktuellen Dokument auswählen

var dasErstePImHTML = document.querySelector('p'); 
console.log("Dies ist das erste P Objekt des HTML Dokuments: " + dasErstePImHTML);

//Inhalt des ersten P Tags des documents einsehen.
var inhaltDesErstenPImHTML = document.querySelector('p').innerHTML;
console.log("Dies ist der Inhalt des ersten P tags des HTMLs: " +inhaltDesErstenPImHTML);

//Inhalt des ersten P tags neu setzen.
inhaltDesErstenPImHTML = document.querySelector('p').innerHTML = "Tchöööö";


//Usernamen einlesen und dann auf der Seite ausgeben
let username = prompt("Ihr Name:");
document.querySelector('h3').innerHTML = "Hallo, " +username;