(() =>{
    let vipList = Array.from(document.querySelectorAll('.vip-wrapper img'));
    
    console.log("Hier steht irgendwas" + vipList[0]);
    
    for(let i = 0; i < vipList.length; i++)
    {
        vipList[i].addEventListener('click', (event) => {
           vipList.forEach((element) => {
               if(! (element === event.target){
                    element.nextElementSibling.classList.remove('show');
                  } 
                  else{
                      event.target.nextElementSibling.classList.toggle('show');
                  }
           });
           
        });
    }
})();

//(() =>{})();

