var randTemp = (Math.floor(Math.random()*45))-5;

if (randTemp<10){
	wetterausgabe ="kalt";
	bgColor= "blue"
	txtColor= "white"
	
}else if(randTemp<32){
	wetterausgabe ="angenehm";
	bgColor="yellowgreen";
	txtColor="black";
}else{
	wetterausgabe ="heiss";
	bgColor="orange";
	txtColor="red";
}

document.getElementById("wettertext").innerHTML = randTemp + "°C ist " + wetterausgabe;
document.querySelector("#wettertext").style.backgroundColor = bgColor;
document.querySelector("#wettertext").style.color = txtColor;
document.querySelector("#wetterpic").style.backgroundImage = "url('./img/" +wetterausgabe+".jpg')";
