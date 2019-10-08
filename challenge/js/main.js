var productText = ["Schuhe Null", "Schuh Eins", "Schuh Zwei", "Schuh Drei"];
var productPrice = [40.00, 75.00, 69.99, 120.00];

var cartArr = [[],[]];
var addCount = 0
var sum = 0


function addFunction(pId) {
    var stueck = 1;

    console.log(cartArr[0].indexOf(pId));
    console.log(cartArr[1][cartArr[0].indexOf(pId)]);

    cartArr[0].push(pId);
    cartArr[1].push(stueck);

    //console.log(pId);
    console.log(cartArr);
   


    let cartZeile = document.createElement("li");
    cartZeile.id = "liId" + addCount;
    let protuctID = document.createTextNode(productText[pId]);
    let cartRight = document.createElement("div");

    let cartPrice = document.createTextNode((productPrice[pId]).toFixed(2) + "€");
    let cartBtn = document.createElement("BUTTON");
    cartBtn.innerHTML = "x";
    cartBtn.id = "liId" + addCount;
    cartBtn.onclick = function(e) {
        CartZeileDelete(e.target.id);
    }

    cartZeile.appendChild(protuctID);
    cartZeile.appendChild(cartRight);
    cartRight.appendChild(cartPrice);
    cartRight.appendChild(cartBtn);

    document.getElementById("cartList").appendChild(cartZeile);
    addCount++;

    Summe();
}


function CartZeileDelete(x) {

    let deletE = document.getElementById(x);
        deletE.parentNode.removeChild(deletE);
        cartArr[0].splice(x.slice(4), 1, "x");
        cartArr[1].splice(x.slice(4), 1, "x");
    Summe();
}


function Summe() {
    sum = 0
    for (i = 0; i < cartArr[0].length; i++) {
        if (cartArr[0][i] != "x") {
            sum = Number(((sum) + productPrice[cartArr[0][i]]).toFixed(2));
        } 
    }
    document.getElementById("summ").innerHTML = sum.toFixed(2)+"€";
}