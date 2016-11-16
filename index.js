//Setup variables for inputs of sale price and what customer paid (amountGiven)
var button = document.getElementById('calculateChange');
button.onclick = function (){
	var due = document.getElementById('salePrice').value;
	var given = document.getElementById('amountGiven').value;
	var change = given - due;
	var output = document.getElementById('change');
	output.innerHTML="$" + change.toFixed(2);
if (isNaN(salePrice.value))  {
      alert ('Please input only money values(numbers)');
      	}
      else{

//Variables for change amounts


var dollars = parseInt(change/1);
var dollarsRemain = change % 1;
var quarters = parseInt(dollarsRemain/.25);
var quartersRemain = (Math.round(dollarsRemain *100) %25) /100;
var dimes = parseInt(quartersRemain/.10);
var dimesRemain = (Math.round(quartersRemain *100) %10) /100;
var nickles = parseInt(dimesRemain/0.05);
var nicklesRemain = (Math.round(dimesRemain *100) %5) /100;
var pennies = Math.round(nicklesRemain/0.01);


// Output values for remaining change

var dollarsRemainAns= document.getElementById('dollars');
dollarsRemainAns.innerHTML=dollars;
var quartersRemainAns= document.getElementById('quarters');
quartersRemainAns.innerHTML=quarters;
var dimesRemainAns= document.getElementById('dimes');
dimesRemainAns.innerHTML=dimes;
var nicklesRemainAns= document.getElementById('nickels');
nicklesRemainAns.innerHTML=nickles;
var penniesRemainAns= document.getElementById('pennies');
penniesRemainAns.innerHTML=pennies;


}
}