(() => {
    //IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
    
    document.querySelector('#btn').addEventListener('click', () =>{
        document.querySelector('p').classList.toggle('hidden')
    });
    
    document.querySelector('#btn').addEventListener('dbclick', () =>{
        document.querySelector('p').classList.toggle('red');
    });
    document.querySelector('#text').addEventListener('keyup', () => {
        let input = document.querySelector('#text').value;
        
        input = input.replace(/fischkopp/ig, '*****');
        
        document.querySelector('#textfield').innerHTML = input;
    })
})()

//Erstellt ein RegEx object
let suche = /test/;

//Function von RegEx Elementen
suche.test('Hallo guten Tag ... test');
