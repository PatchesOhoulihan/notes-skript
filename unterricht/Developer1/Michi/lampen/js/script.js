//Main

(()=>{
    
    /*--------------------------------------------------------------------------------
    |Variable
    ---------------------------------------------------------------------------------*/
    
    let lamp = Array.from( document.querySelectorAll('img'));
    
    
    /*--------------------------------------------------------------------------------
    |Helper Functions
    ---------------------------------------------------------------------------------*/
    
    let setLampState = (element) =>{
            if(element.getAttribute("src") == "img/gluehlampe_aus.png"){
                element.setAttribute("src", "img/gluehlampe_an.png");   
            } 
            else{
                element.setAttribute("src", "img/gluehlampe_aus.png");
            }
    }   

    let disco = () => {
        lamp.forEach((element) => {
           setLampState(element); 
        });
        
        //In diesem Fall ist dicso eine Übergabe der function kein Aufruf;
        setTimeout(disco, 500);
    }
    
    /*--------------------------------------------------------------------------------
    |Main
    ---------------------------------------------------------------------------------*/
    
    lamp.forEach((element) => {
        element.addEventListener('click', ()=> {
            setLampState(element);
        });
    });
    
    
    //Button to turn on or off all lights
    
    let button = document.querySelector('#switch');
    button.addEventListener('click', ()=>{
        lamp.forEach((element) => {
            setLampState(element);
        });
    });
    
    //Disco Button
    let discoButton = document.querySelector('#disco');
    discoButton.addEventListener('click', () => {
       disco(); 
    });
    
    
})();    




//Michi

//(()=>{
//    let lamp = Array.from( document.querySelectorAll('img'));
//    
//    lamp.forEach((element) => {
//        element.addEventListener('click', ()=> {
//            
//            if(element.src == "img/gluehlampe_aus.png"){
//                element.src = "img/gluehlampe_an.png";   
//                console.log(element.src);
//            } 
//            else{
//                element.src = "img/gluehlampe_aus.png";
//            }
//        });
//    });
//})();    


//Pflei


