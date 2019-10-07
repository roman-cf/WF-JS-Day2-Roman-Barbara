var productText = ["Schuhe Null", "Schuh Eins","Schuh Zwei","Schuh Drei"];
var productPrice= [40.00, 75.00, 69.99, 120.00];

var cartArr = [];
var addCount = 0
var sum = 0


function addFunction(pId){
	
	cartArr.push(pId)

		let cartZeile = document.createElement("li");
			cartZeile.id = "liId"+addCount;
		let protuctID = document.createTextNode(productText[pId]);
		let cartRight = document.createElement("div");

		let	cartPrice = document.createTextNode((productPrice[pId]).toFixed(2)+"€");		
		let cartBtn = document.createElement("BUTTON");
			cartBtn.innerHTML = "x";
			cartBtn.id= "liId"+addCount;
			cartBtn.onclick = function (e){
				CartZeileDelete(e.target.id);
				}
			
			cartZeile.appendChild(protuctID);
			cartZeile.appendChild(cartRight);
			cartRight.appendChild(cartPrice);
			cartRight.appendChild(cartBtn);

			document.getElementById("cartList").appendChild(cartZeile);
	addCount ++;

	Summme();
}


function CartZeileDelete(x){
	console.log(x);
	let deletE = document.getElementById(x);
	deletE.parentNode.removeChild(deletE);
	Summme();
}


function Summme(){
	sum = 0
	for (i=0; i < cartArr.length; i++){
		sum = sum + productPrice[cartArr[i]];
	}
	document.getElementById("summ").innerHTML = sum;
}