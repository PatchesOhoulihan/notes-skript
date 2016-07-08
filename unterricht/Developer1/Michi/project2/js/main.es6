//If Verknüpfung mit 2 Termen
let meineVar = 15;

if(meineVar >= 10 && meineVar <= 15)
{
    alert("Ich bin zwischen 10 und 15");
}

if(meine >= 10 || meineVar <= 15){
    alert("Ich bin größer gleich 10 oder kleiner gleich 15")
}



//If else kaskade, erst wird das if ausgewährtet, wenn die Bedingung nicht erfüllt ist. Wird das if else ausgeführt. undso weiter

let meineVar2 = 23;

if(meineVar2 >= 20)
{
    alert('Ich bin größer als 20;');
}
if else(meineVar2 >= 15)
{
    alert('Ich bin größer als 15, aber kleiner als 20');
}



//Die Priorität der Oparatoren

let meineVar3 = 120;
if((1000 * 12) > meineVar3){
    alert('Ich werde ausgeführt, weil die Klammern mit dem Ahritmetischen Ausdruck zuerst ausgewertet werden');
}


//Merkwürdiges Kino Beispiel
let alter = 18;
let geld = 10;
let lustAuf = 'pollyPocket';

if(alter >= 18 && geld >= 15)
{
    geld -= 15;
}
elseif(alter >= 12 && geld>=10)
{
    if(lustAuf == 'pollyPocket')
    {
           
    }
    else if(lustAuf == 'GI Joe'){
        
    }
}

//Shorthand arithmetische Operatoren

let meineVar = 1;
meineVar += 1;
meineVar -= 1;
meineVar *= 1;
meineVar /= 2;
meineVar %= 2;


//Post Inkrement die Zahl wird nach der Operation hochgezählt.
meineVar++;
meineVar--;

//Pre Inkrement die Zahl wird vor der Operation hochgezählt.
--meineVar;
++meineVar,
