let choices= document.querySelectorAll(".choice");
let resMsg= document.querySelector("#resMsg");
let uscr= document.querySelector("#uscr");
let cscr= document.querySelector("#cscr");
let reset= document.querySelector("#reset");

let u=0;
let c=0;

//users choice:
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        console.log("user's choice = ",userChoice);
        compChoice(userChoice);
    })
});

//computers choice: //this is printed in console only when userChoice is selected and passed to this function.
//here we got userChoice inside a function hence we cannot access it outside the fucntion as it is a block scope varaible now hece we have to pass the value of userChoice present in that function to this fucntio present below. and this mechanism of passing the block scope variable from one function to another function is called "modular programming"

function compChoice(userChoice){
    let options= ["rock","paper","scissors"];
    let rdmNum= Math.floor(Math.random()*3); //explanation for this logic of generating random number is in video "apna college"
    let computerChoice = options[rdmNum];
    console.log("computer's choice = ",computerChoice);
    findRes(userChoice,computerChoice);
}

function findRes(userChoice,computerChoice){
    if(userChoice == computerChoice){    
        console.log("The Game Has Been Drawn");
        resMsg.innerText= "The Game Has Been Drawn";
        resMsg.style.color="black";
    }else if(userChoice=="rock"){
        if(computerChoice=="paper"){
            console.log("Computer Choosed Paper. You LOSE");
            resMsg.innerText= "Computer Choosed Paper. You LOSE";
            resMsg.style.color="red";
            cscr.innerText= ++c;
        }
        if(computerChoice=="scissors"){
            console.log("Computer Choosed Scissors. You WIN");
            resMsg.innerText= "Computer Choosed Scissors. You WIN";
            resMsg.style.color="green";
            uscr.innerText= ++u;
        }
    }else if(userChoice=="paper"){
        if(computerChoice=="rock"){
            console.log("Computer Choosed Rock. You WIN");
            resMsg.innerText= "Computer Choosed Rock. You WIN";
            resMsg.style.color="green";
            uscr.innerText= ++u;
        }
        if(computerChoice=="scissors"){
            console.log("Computer Choosed Scissors. You LOSE");
            resMsg.innerText= "Computer Choosed Scissors. You LOSE";
            resMsg.style.color="red";
            cscr.innerText= ++c;
        }
    }else{
        if(computerChoice=="rock"){
            console.log("Computer Choosed Rock. You LOSE");
            resMsg.innerText= "Computer Choosed Rock. You LOSE";
            resMsg.style.color="red";
            cscr.innerText= ++c;
        }
        if(computerChoice=="paper"){
            console.log("Computer Choosed Paper. You WIN");
            resMsg.innerText= "Computer Choosed Paper. You WIN";
            resMsg.style.color="green";
            uscr.innerText= ++u;
        }
    }
}


reset.addEventListener("click",() => {
    resMsg.innerText="Pick one: Rock, Paper, Scissors!";
    resMsg.style.color="black";
    uscr.innerText= "0";
    cscr.innerText= "0";
    u=0;
    c=0;
});

//if possible, make the entire screen change into "YOU WIN" or "COMPUTER WIN" when your's/computer's score reaches 10.