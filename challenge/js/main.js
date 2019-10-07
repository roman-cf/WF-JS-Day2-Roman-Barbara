var productText = ["Schuhe Null", "Schuh Eins","Schuh Zwei","Schuh Drei"];
var productPrice= [39.99, 75.00, 69.99, 120.00];

var cartArr = [];
var addCount = 0

function addFunction(pId){
	
	cartArr.push(pId)

		let cartZeile = document.createElement("li");
			cartZeile.id = "liId"+addCount;
		let protuctID = document.createTextNode(productText[pId]);
		let cartBtn = document.createElement("BUTTON");
			cartBtn.innerHTML = "x";
			cartBtn.id= "liId"+addCount;
			cartBtn.onclick = function (e){
				CartZeileDelete(e.target.id);
				}
			
			cartZeile.appendChild(protuctID);
			cartZeile.appendChild(cartBtn);

			document.getElementById("cartList").appendChild(cartZeile);
	addCount ++;
	
}

function CartZeileDelete(x){
	console.log(x);
	let deletE = document.getElementById(x);
	deletE.parentNode.removeChild(deletE);
}