// unterschied zwischen parseInt und Number
// Mit beiden ist es möglich einen nummerischen Wert in eine Zahl zu verwandeln.


let string = "1"
console.log("Valider Zahlenwert(parseInt): " + parseInt(string));
console.log("Valider Zahlenwert(Number): " + Number(string));

let string2 = "2c345";
//ParseInt parsed die Zahl solange bis sie an einzeichnen kommt das sie nicht interpretieren kann.
console.log("Zahlenwert mit Buchstaben:(parseInt): " + parseInt(string2));
//Number bricht sofort ab.
console.log("Zahlenwert mit Buchstaben:(Number): " + Number(string2));



// Vers 2 Taschenrechner

let satzDesP = () => {
    let a = parseInt(prompt("Kathete a: "));
    let b = parseInt(prompt("Kathete b: "));
    
    let c = Math.sqrt((a*a) + (b*b));
    
    alert("Hypotenuse: " + c);
}


//Auftritt return value, return kann verwendet werden um Rückgabe Werte aus einer Funktion zurückzugeben.
let addieren = (a, b) => {
    let c = a + b;
    return c;
}

//Alternative schreibweise von return;
//return Wert automatisch angenommen wenn die Funktion ohne Klammern und wenn nur eine Zeile wird der diese Zeile als return wert zurückgegeben. Funktion Kopf und Funktionsrumpf müssen in der selben Zeile stehen.
let addieren = (a = 0, b = 0) => let c = a + b;

//Default Value für funktionsparameter.
let addieren2 = (a, b = 0) => {
    let c = a + b;
    return c;
}

//((true && false || 'hallo' * 0 && !5 - 14 * '2 Bier')*10) !== true;
//((false || 'hallo' * 0 && !5 - 14 * '2 Bier')*10) !== true;
//((false || 'hallo' * 0 && !5 - 14 * '2 Bier')*10) !== true;
//((false || NaN && !5 - 14 * '2 Bier')*10) !== true;
//((false || NaN && !5 - NaN)*10) !== true;
//((false || NaN && false - NaN)*10) !== true;
//((false || NaN && false - false)*10) !== true;
//((false || NaN && 0 - 0)*10) !== true;
//((false || NaN && false)*10) !== true;
//((false || false && false)*10) !== true;
//((false || false)*10) !== true;
//((false)*10) !== true;
//false !== true;
//true;


//Fun mit Strings

//Strings in Kleinbuchstaben umwandeln;
console.log("QWERTZ".toLocalLowerCase());
console.log("QWERTZ".toLowerCase());

//String in Großbuchstaben umwandeln
console.log("qwertz".toUpperCase());

//Buchstaben von einer bestimmten Stelle wiedergeben.
console.log("qwertz".charAt(0));

//Buchstaben an der der letzten Stelle
strTest = "Hallo Welt!";
console.log(strTest.charAt(strTest.length));

//Index eines bestimmten Buchstaben ausgeben
console.log(strTest.indexOf("W"));

//Teile aus einen String herausschneiden
//Starte an index 1 und gib mir 3 Zeichen.
console.log(strTest.substr(1,3));
//Strings von hinten abschneiden(Gehe drei zurück vom letzten index und schneide 3 ab)
console.log(strTest.substr(-3,3));
//letzten Wert aus einem String herausschneiden.
console.log(strTest.substr(-1));
//Substring hingegen arbeitet hingegen komplett mit Index Werten.
console.log(strTest.substring(1,3));
//Eine Sache in einem String ersetzen
console.log(strTest.replace("Welt", "Butterbrot"));
//Ein und die selbe Sache immer wieder ersetzen
console.log(strTest.replace("Welt", "Butterbrot", "g"));
//methode auf insensitve setzen.
console.log(strTest.replace("Welt", "Butterbrot", "i"));

//Methode Chaining
"Hallo Welt!".toLowerCase().replace('welt','butterbrot')

//Vers 2 Taschenrechner(Malte)

let Taschenrechner = () => {
    let term = getInput();
    let result = term[0];
    
    for(let i = 1; i < term.length; i+2)
    {
        if(term[i] === '+'){
            result += term[i-1];
        }
        if else(term[i] === '-'){
            result -= term[i-1];
        }
        if else(term[i] === '*'){
            result *= term[i-1];
        }
        if else(term[i] === '/'){
            result /= term[i-1];
        }
        else{
            alert("The given Term is not valid")
        }   
    }
    alert("Das Ergebnis lautet: " + result);
}

//Handle Input/output

let getInput = () => {
    
    
    let arr = [];
    let value1 = parseInt(prompt("Geben Sie die erste Zahl ein: "));
    arr.push(value1);
    
    do{
    
        let operator = prompt("Geben sie den Operator ein:");
        arr.push(operator);
        let value2 = parseInt(prompt("Geben Sie die nächste Zahl ein: "));
        arr.push(value2);
        
    }while(confirm("Weitere Operatoren einfügen?"))
    
    
    return [value1, operator, value2];
    
}

//Arith.. Operations

let add = (value1, value2) =>{
    return value1 + value2;
}

let sub = (value1, value2) =>{
    return value1 - value2;
}

let mul = (value1, value2) =>{
    return value1 * value2;
}

let div = (value1, value2) =>{
    return value1 / value2;
}


//Taschenrechner call
Taschenrechner();
