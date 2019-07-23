// Version built with passing functions for click events


var watervalue = 0;
var thundervalue = 0;
var leafvalue = 0;
var goalnumber = 0;
var wins = 0;
var losses = 0;
var crystaltotal = 0;
var audiowin = new Audio("assets/win.mp3");
var audiolose = new Audio("assets/lose.mp3");
var audiochip = new Audio("assets/chip_sound.mp3");


//game start - display wins and losses

// assign random value to each stone and generate the goal score
function randomizecrystalvalue (){
    firevalue = Math.floor(Math.random() * 12) + 1;
    watervalue = Math.floor(Math.random() * 12) + 1;
    thundervalue = Math.floor(Math.random() * 12) + 1;
    leafvalue = Math.floor(Math.random() * 12) + 1;
    console.log("Values in order: Fire, water, thunder, leaf");
    console.log(firevalue, watervalue, thundervalue, leafvalue);
};

function randomizegoalnumber () {
    goalnumber = Math.floor(Math.random() * 102) + 19;
    console.log("Goal number is...")
    console.log(goalnumber)
    $("#GoalNumber").text(goalnumber);
}

//show Total, wins, and losses

function showinitialvalues () {
    $("#totalscore").text(crystaltotal);
    $("#Wins").text(wins);
    $("#Losses").text(losses);

    
}


gems = {
    onclickFunction: function (clickValue){
        if (clickValue==="firestone"){
            clickValue= firevalue
        }else if(clickValue==="waterstone"){
            clickValue=watervalue
        }else if(clickValue==="thunderstone"){
            clickValue=thundervalue
        }else if(clickValue==="leafstone"){
            clickValue=leafvalue
        }


        //====
       
        crystaltotal += clickValue;
        console.log("Current Total = " + crystaltotal);
        $("#totalscore").text(crystaltotal);
        valuechecker();
    }

}


// click commands to add value of each crystal to total and update screen with current crystal total
$(".buttons").on("click", function() {
    idOfInput=$(this).attr("id")
    gems.onclickFunction(idOfInput)
})


function valuechecker (){
if (crystaltotal===goalnumber) {
    audiochip.play();
    audiowin.play();
    wins++;
    $("#Wins").text(wins);
    gamereset();
}
else if (crystaltotal>goalnumber) {
    audiochip.play();
    audiolose.play();
    losses++;
    $("#Losses").text(losses);
    gamereset();
}
else {    audiochip.play();
}
}

function gamereset () {
    randomizecrystalvalue();
    randomizegoalnumber();
    crystaltotal = 0;
    showinitialvalues();
}

gamereset ()
//if totalscore<goalnumber keep going
//else if totalscore = goalnumber win and increment wins count
//else if totalscore> goal number lose and increment losses count

