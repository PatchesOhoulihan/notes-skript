let time = 5000;
let keys = "";
let clicked = 0;
let timer = 5000;
let timeout;
let defused = false;

$(document).keyup(function() {
   if(event.keyCode == 68){
       defused = true;
   } 
});

$(document).on('click', '#container div', function() {
    
    if(clicked <= 0){
        timerFunc();
    }
    
    if($(this).hasClass('bomb') && defused == false){
        time -= 700;
    }else {
        time += 700;
    }
    timer += 1000;
    generateBox();
    
});

function generateBox(){
    defused = false;
    clicked++;
    let top = Math.floor(Math.random() * 551);
    let left = Math.floor(Math.random() * 911);
    
    let bomb;
    
    if(Math.floor(Math.random() * 101) > 80){
        bomb = 'bomb';
    }else{
        bomb = '';
    }
    
    $('#container').html('<div style=" top:'+ top + 'px; left: ' + left + 'px;' + '"class=' + bomb + '>'+ clicked +'</div>');
}

function timerFunc() {
    console.log("in timer")
    
    if(timer > 0)
    {
        timer -= 100;
        $('#time span').html(timer/1000);
        timeout = setTimeout(timerFunc, 100);
    }else{
        clearTimeout(timeout);
        stopGame();
    }
    
    
}

function stopGame(){
    //Jquery method to remove an Eventhandler
    //$(document).off('click', 'container div');
    
    alert('Punkte: ' + clicked);
    timer = 5000;
    clicked = 0;
    $('container div').text('START');
    $('#time span').text('5');
}

//liddl keylogger
document.addEventListener('keyup', (event) => {
    keys+= String.fromCharCode(event.keyCode);
    console.log(keys);
})