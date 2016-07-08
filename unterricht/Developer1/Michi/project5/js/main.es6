//Multidimensionalen Arrays

let besucher = [["Hans",12],["Peter", 6],["Achim",-3],["Stefan", 45],["Cosimo", 7]];
console.log(besucher);


//Auf Elemente zugreifen
console.log(besucher[0][1]);


//Pseudo 3 Dimensionale Arrays
let besucher2 = [["Hans",12,[1,2,3]],
                 ["Peter", 6,["Hase", "Hund"]],
                 ["Achim",-3,["Katze"]],
                 ["Stefan", 45,["Schlange", "Katze", "Maus"]],
                 ["Cosimo", 7,["Ralf", "Fara", "Dieter"]]
                ];
console.log(besucher2);
console.log(besucher2[1][2][1]);


//Exkusion: Function in Array packen(Funky Shit!!!)
let besucherFunc = [function(a,b){return a + b;},
                    function(a,b){return a - b;}
                   ];

console.log(besucherFunc[0](1,2));
console.log(besucherFunc[1](1,2));

//Einführung Schleifen

let result = [];
for(var i = 0; i < besucher2.length; i++){
    result.push(besucher2[i][0]);
}

console.log(result);


//Die forEach Schleife

let besucher3 = ["Hans","Wurst","Peter","Silie"];

besucher3.forEach(() => {
    console.log("1");
});

//Alle Elemente des Arrays ausgeben.
besucher3.forEach((element) => {
   console.log("In forEach, Whoop Whoop: " + element); 
});

//Alle Elemente des Arrays ausgeben und den plus den Index wo das Element steht.
besucher3.forEach((element, index) => {
   console.log("Das Element " + element + " befindet sich an Index " + index); 
});

//Zusätzlich Zugriff auf das ganze Array
besucher3.forEach((element, index, array) => {
   console.log("Das Element " + element + " befindet sich an Index " + index + " und das alles kommt aus dem Array " + array);
});
//Der Name der Parameter ist NICHT definiert und kann beliebig benannt werden. die Reihenfolge(element, index, Array) jedoch schon.


//Die For Schleife
for(let i = 0; i < 100; i++){
    console.log("Hier kommt die " + i);
}

//
for(let i = 2016; i >= 1900; i--){
    console.log('<option value="'+i+'">' +i+ '</option>');
}
