var testArr = [1,3,7,10,2];

var start = testArr[0];

for (i=1; i < testArr.length; i++){
	start*=testArr[i];
}

document.getElementById("text").innerHTML = "Das Produkt aus "+ testArr + " ist: " +start