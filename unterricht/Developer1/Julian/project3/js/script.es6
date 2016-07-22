(() => {
    
    const FORM_VISIBLE_HEIGHT = "auto";
    let mail, name, surname, gender;
    let checkMail, checkName, checkSurname;
    let initEventListener = () =>{
        document.querySelector("#mailInput").addEventListener('focus',handleFormFocus);
        document.querySelector('#mailInput').addEventListener('keyup', checkFormData);
        document.querySelector('#surnameInput').addEventListener('keyup',checkFormData);
        document.querySelector('#nameInput').addEventListener('keyup',checkFormData);
                                                                 
    }
    
    let handleFormFocus = () => {
        setFormHeight(FORM_VISIBLE_HEIGHT);
        setInitialFormState();
        document.querySelector("#mailInput").removeEventListener("focus", handleFormFocus);
    }
    
    let setFormHeight = (newHeight) => {
        let currentHeight = document.querySelector("#formular").style.height;
        
        if(setFormHeight !== newHeight){
            document.querySelector("#formular").style.height = newHeight;
        }
    };
    
    let setInitialFormState = () =>{
        toggleInputErrorState(false, "#mailInput");
        toggleInputErrorState(false, "#nameInput");
        toggleInputErrorState(false, "#surnameInput");
        
         deactiveButton(true);
    };
    
    let toggleInputErrorState = (state, id) => {
        if(state){
            document.querySelector(id).classList.remove("error");
        }else{
            document.querySelector(id).classList.add("error");
        }
    };
    
    let deactiveButton = (state) => {
        document.querySelector("#senden").disabled = state;
        console.log("In the button function");
    }
    
    let checkFormData = (event) => {
        let id = '#' +event.target.id;
        
        
        //^ Add definiert den Anfang des Textes
        //$ Dollar markiert das Ende des Textes
        //+ bedeutet 1 oder beliebig viele.
        //NICHT IN ANFÜHRUNGSSTRICHEN SCHREIBEN
        let mailPattern =/^[0-9a-zA-Z._-]+@[0-9a-zA-z._-]+[.][a-zA-Z]{2,8}$/;
        
        //i steht für case insensitive
        let namePattern = /^[a-zäüöß -]+/i
        console.log('checkFormData');
        
        switch(id){
            case "#mailInput":
                 mail = document.querySelector(id).value;
                 checkMail = mailPattern.test(mail);
                 toggleInputErrorState(checkMail, id);
            break;
            case "#nameInput":
                 name = document.querySelector(id).value;
                 checkName = namePattern.test(name);
                 toggleInputErrorState(checkName, id);
            break;
            case "#surnameInput":
                 surname = document.querySelector(id).value;
                 checkSurname = namePattern.test(surname);
                 toggleInputErrorState(checkSurname, id);
            break;
        }
        
        if(checkMail && checkName && checkSurname){
            deactiveButton(false);
        }else{
            deactiveButton(true);
        }
        
        console.log(checkMail);
    }
    
    initEventListener();
})();