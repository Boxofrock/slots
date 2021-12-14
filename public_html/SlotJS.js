function randomSymbol(min,max) {
//Complete this function to return a random number
//Use the random number as the index to your array
//to choose the symbol for each pull
}

function PullTheLever() {
    var bet = document.forms["SlotMachine"]["playerBet"].value;
    if (isNaN(bet)) 
    {
        alert("Enter a numeric bet!");
    }
    else 
    {
        //Create an array to hold the 6 symbols
        var symbol = ['Orange','Plumb','BAR','Strawberry','Cherry','Bannana'];
        //For each "pull", call the random number function
        //Use the number returned as the index to your symbol array
        //to retrieve a symbol for each pull
        var pull1, pull2, pull3;
        pull1=Math.floor(Math.random()*6);
        pull2=Math.floor(Math.random()*6);
        pull3=Math.floor(Math.random()*6);
        //Build a string to display the "line" of symbols pulled
        //See the hint in index.html for writing text to the web page (i.e. the HTML document)
        //Remember you can use html tags in your string, like <h2></h2>
        var thisSpin = symbol[pull1]+symbol[pull2]+symbol[pull3];
        
        //Use if statements to figure out how many symbols were matched
        //and determine the winnings (if any)
        //ddd 
        var match=0;       
        
        //dss
        if(pull2==pull3) match = 2;
        //sds
        if(pull1==pull3) match = 2;
        //ssd
        if(pull1==pull2) match = 2;
        //sss
        if(pull1==pull2 & pull2==pull3) match = 3;
        
        var win = match*bet;

        //Build a string to display the "winnings" 
        //See the hint in index.html for writing text to the web page (i.e. the HTML document)
        var result = "Winnings: " + win;
    }
    document.getElementById("line").innerHTML = thisSpin;
    document.getElementById("winnings").innerHTML = result;
    return false;
}

