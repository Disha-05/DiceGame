var randomNo1=Math.floor(Math.random()*6)+1;
var randomImageSource1="images/dice"+randomNo1+".png";
var dice1=document.querySelector(".img1");
dice1.setAttribute("src",randomImageSource1);

var randomNo2=Math.floor(Math.random()*6)+1;
var randomImageSource2="images/dice"+randomNo2+".png";
var dice2=document.querySelector(".img2");
dice1.setAttribute("src",randomImageSource2);

if(randomNo1>randomNo2){
    document.querySelector("h1").textContent="Player 1 Wins !";
}
else if(randomNo1<randomNo2){
    document.querySelector("h1").textContent="Player 2 Wins !";
}
else{
    document.querySelector("h1").textContent="Draw !";
}