
//alert("Hallo Welt");
//alert("4 + 5");

for(var i = 0; i < 1; i++){
    alert("qwertz");
}

//Fun with Strings

alert("Hallo Han's");
alert('Hallo "Han\'s"');// \ is used to escape the '

//Operators

alert(4+5); //+ is used to add the two numbers.
alert(4-5); //- is used to sub the two numbers.
alert("Die Wurzel aus 16 lautet: " + Math.sqrt(16)); //For complex Operationens use the Math Object.
alert("hello" + 4);//Add a number and a String.
alert("Hello" + "Peter");

alert("10 / 0 = " + (10/0));

alert(typeof 2); //typeof is an Operator;

let meineVar= "Hans";//Definition einer lokalen variablen.
alert("Hallo " + meineVar);


//Input Formular
let meineVar2 = prompt("Ihr Name: ");
alert("Hallo " + meineVar2);

//Formular with two Buttons returns Boolean.
let meineVar3 = confirm("Wollen Sie weiter?");
alert(meineVar3);
