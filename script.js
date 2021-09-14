// 2 variables user and pass
const userName = "test";
const userPassword = "1234";

//this function works whenever someone clicking on login button .
function checkUser() {

    //hiding the firt form (input and output)
    document.getElementById("login-form").style.display ="none"; 

    //create 2 variables (user and password) and those taking inputs values
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    // make a condtion to check if the user and pass equal to ( test, 1234)
    //if Yes
    if (user == userName && pass == userPassword) { 
        //Saving them in localstorage and go to another Div (The welcome div)
        localStorage.setItem("userPassword", `${userPassword}`); 
        localStorage.setItem("userName", `${userName}`);
        createCorrectDiv();
    }
    //if no go to the wrong user name or password (Fail div)
    else {
        createFailDiv();
    }

}

// The correct div will apears if the username and password are correct
function createCorrectDiv() {     

    //crete 2 div one main and the other inside the main and other things that I need them 
    const subjectCorrect = document.createElement('p')
    const mainDivCorrect = document.createElement('div');
    const divCorrect = document.createElement('div');
    const mesgWelcome = document.createElement('p');
    const button = document.createElement('button');

    // I gave them class name and Id cuz of CSS and Grid and I write some welcome message, subject and buttons name
    mainDivCorrect.className = "main-div-correct";
    mainDivCorrect.id = "main-div-correct";
    mesgWelcome.innerHTML = "Welcome!";
    subjectCorrect.id = "subject-correct";
    subjectCorrect.innerHTML = `Welcome ${userName.toUpperCase()}!`;
    divCorrect.id = "correct-div";
    mesgWelcome.id = "mesgWelcome";
    button.id = "sign-out";
    button.innerText = "Sign Out";

    //Append 
    divCorrect.append(mesgWelcome, subjectCorrect, mesgWelcome, button);
    mainDivCorrect.append(divCorrect);
    document.body.appendChild(mainDivCorrect);

    //Sign out function will remove the current div, clearing the localstorage and make the display for login form visible again
    document.getElementById("sign-out").onclick = function signOut() {
     localStorage.clear();
        document.getElementById("login-form").style.display = "";
        mainDivCorrect.remove();
        
    }
}



// if the user or password is incorrect this div will apears
    function createFailDiv() {
    // create the the div and elements
    const subject = document.createElement('p')
    const mainDiv = document.createElement('div');
    const div = document.createElement('div');
    const button = document.createElement('button');
    const mesgFail = document.createElement('p');

    //class and Id name and other messages
    mainDiv.className = "main-div-fail";
    mainDiv.id = "main-div-fail"
    mesgFail.innerHTML = "Username or password is incorrect";
    subject.id = "subject-fail";
    subject.innerHTML = "Something Wrong";
    div.id = "failDiv";
    mesgFail.id = "mesgFail";
    button.id = "tryAgain";
    button.innerText = "Try Again";

   //append
    div.append(subject,mesgFail,button);
    mainDiv.append(div)
    document.body.appendChild(mainDiv);

    //retry button will remove the div and make display to the login form 
    button.addEventListener('click', (event) => {
        mainDiv.remove();
        document.getElementById("login-form").style.display = "";

    });
    
}


/*
 this function will always works wheneve you reload the page, if the name and password still inside the local storage 
 so we are moving to welcome div and no needs to login again 
 */
function stayLogged(){
    //if yes make the login form hidden (none) , and go to Welcome Div
    if (localStorage.getItem("userName") !== null){
        document.getElementById("login-form").style.display ="none"; 
        createCorrectDiv();
    }
    else{
        //if no make the login for display 
        document.getElementById("login-form").style.display =""; 
    }
}

//start always stayLogged function to check if it's clear or not
window.onload = stayLogged;


    


