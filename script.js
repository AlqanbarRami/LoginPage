// 2 variables user and pass
const userName = "test";
const userPassword = "1234";

// create div , p , button 
const subject = document.createElement('p')
const mainDiv = document.createElement('div');
const div= document.createElement('div');
const mesg = document.createElement('p');
const button = document.createElement('button');

// className and Id
mainDiv.className = "main-div";
mainDiv.id = "main-div";
subject.id = "subject";
div.id = "correct-fail";
mesg.id = "mesg";
button.id = "sign-out-try-again";




//this function works whenever someone clicks on the login button .
function checkUser() {

    //hiding the first form (input and output)
    document.getElementById("login-form").style.display ="none"; 

    //create 2 variables (user and password) and those taking inputs values
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    // make a condtion to check if the user and pass are equal to ( test, 1234)
    //if Yes
    if (user == userName && pass == userPassword) { 
        //Saving them in localstorage and go to another Div (The welcome div)
        localStorage.setItem("userPassword", `${userPassword}`); 
        localStorage.setItem("userName", `${userName}`);
        createCorrectDiv();
    }
    //if no go to the wrong username or password (Fail div)
    else {
        createFailDiv();
    }

}

// The correct div will apears if the username and password are correct
function createCorrectDiv() {     
    // messages and button name 
    mesg.innerHTML = "Welcome!";
    subject.innerHTML = `Welcome ${userName.toUpperCase()}!`;
    button.innerText = "Sign Out";

    //Append 
    div.append(mesg, subject, mesg, button);
    mainDiv.append(div);
    document.body.appendChild(mainDiv);

    //Sign out function will remove the current div, clearing the localstorage and make the display for login form visible again
    button.onclick = function signOut() {
     localStorage.clear();
        document.getElementById("login-form").style.display = "";
        mainDiv.remove();
        
    }
}



// if the user or password is incorrect this div will apear
    function createFailDiv() {
    mesg.innerHTML = "Username or password is incorrect";
    subject.innerHTML = "Something Wrong";
    button.innerText = "Try Again";

   //append
    div.append(subject,mesg,button);
    mainDiv.append(div)
    document.body.appendChild(mainDiv);

    //retry button will remove the div and make display to the login form visible again
    button.onclick = function tryAgain() {
        mainDiv.remove();
        document.getElementById("login-form").style.display = "";

    }
    
}


/*
 this function will always work whenever you reload the page, if the name and password are still inside the localstorage 
 moving to welcome div and no need to login again 
 */
function stayLogged(){
    //if yes make the login form hidden (none) , and go to Welcome Div
    if (localStorage.getItem("userName") !== null){
        document.getElementById("login-form").style.display ="none"; 
        createCorrectDiv();
    }
    else{
        //if no make the login form display visible
        document.getElementById("login-form").style.display =""; 
    }
}

//start always stayLogged function to check if it's clear or not
window.onload = stayLogged;


    


