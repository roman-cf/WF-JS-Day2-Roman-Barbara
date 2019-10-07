var ranNum = Math.round(Math.random()*100)

console.log(ranNum)
var rest3 = ranNum%3
var rest5 = ranNum%5

if (ranNum/5 && rest5 == 0 && ranNum/3 && rest3 == 0){
	Output = "Fizz Buzz";
}else if (ranNum/5 && rest5 == 0){
	Output = "Buzz";
}else if (ranNum/3 && rest3 == 0){
	Output = "Fizz";
}else{
	Output = "Nope";
}
document.getElementById("text").innerHTML = "The random Number is: " +ranNum+"<br>" +Output;