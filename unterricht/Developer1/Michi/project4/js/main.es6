let umrechner = () =>{
 do{
 
    let result = ''; 
     
    input = prompt("Geben sie den Betrag ein: ");
    
    if(value.indexOf('$') !== -1){
        
        result = parseString(value * 1.134) + " €";
        
     }if else(value.indexOf('€') !== -1){
        
         result =  parseString(value * 0.956) + " $";
         
     }
     else{
         result = "Keine valide Eingabe!";
     }
    
    alert ("Das Ergebnis lautet: " + result);

 }while(comfirm("Neuen Wert berechnen?"));
    
}

umrechner();


