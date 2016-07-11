//Verschiebe die Box mit einem Switch

let move = () => {
    
    let xCoord = 10;
    let yCoord = 10;
    
    do{
         
        let direction = prompt('Richtung? (wsad)');
        
        switch(direction){
            case 'w': 
                document.querySelector('#box').style.marginTop = ((yCoord -= 100).toString() + 'px');
                document.querySelector('#box').style.background = 'blue';
                console.log("w pressed, yCoord = " + yCoord);
            break;
            case 's': 
                document.querySelector('#box').style.marginTop = ((yCoord += 100).toString() + 'px');
                document.querySelector('#box').style.background = 'green';
                 console.log("s pressed, yCoord = " + yCoord);
            break;
            case 'a': 
                document.querySelector('#box').style.marginLeft = ((xCoord -= 100).toString() + 'px');
                document.querySelector('#box').style.background = 'red';
                console.log("a pressed, xCoord = " + xCoord);
            break;
            case 'd': 
                document.querySelector('#box').style.marginLeft = ((xCoord += 100).toString() + 'px');
                document.querySelector('#box').style.background = 'yellow'; 
                console.log("d pressed, xCoord = " + xCoord);
            break;
            case 'q':
                document.querySelector('#chuck').src = "image/chuck-norris-uzis.jpg";
                document.querySelector('#chuck').alt = "Chuck weiß bescheid?";

        }  
    
    }while(confirm("Nochmal?"));
}

setTimeout(move, 500);

//Alle Geschwister die auf der selben ebene liegen(aus dem ul alle gewister die li sind)
document.querySelectorAll('ul ~ li');

//das erste kind von ul
document.querySelectorAll('ul li:first-child');



//Nodelisten wie Arrays nur weniger Funktionen

let list = document.querySelector('ul li');
console.log("Inhalt von lists" + list);

//Nodelisten in ein Array umwandeln
let liste2 = Array.from(document.querySelector('ul li'));

//Über jedes Element der nodelist iterieren(Nicht vergessen vorher in ein Array umwandeln)
liste2.forEach(() => {
    //innerhtml überschreibt alles was in dem Tag steht, auch weitere Tags.
    element.innerhtml = "Hallo"; 
    
    //Classlist 
    //Classlist gibt die klassen zurück die dem Tag zugeordnet sind.
    console.log("Eine Klasse an ein Element anhängen: " + element.classList.add("klasse"));
    console.log("Bei einem Element eine Klasse hinzufügen wenn nicht vorhanden, wenn vorhanden die Klasse entfernen: " + element.classList.toggle('klasse'));
    console.log("Anzahl der zugewiesen klassen: " + element.classList.length);
    console.log;("Entferne eine zugewiesene klasse: " + element.classList.remove('klasse'));
    console.log("Gebe true zurück wenn das aktuelle element eine bestimmte Klasse besitzt: " + element.classList.contains('klasse'))
});

//Classlist 
//Classlist gibt die klassen zurück die dem Tag zugeordnet sind.
console.log("Anzahl der zugewiesen klassen: " )