var gradeArr = [76,85,65,93,83,34];

var grades = gradeArr[0];

for (i=1; i < gradeArr.length; i++){
	grades+=gradeArr[i];
}

avGrade = grades/gradeArr.length;

if (avGrade<60){
	Grade = "F";
}else if (avGrade<70){
	Grade = "D";
}else if (avGrade<80){
	Grade = "C";
}else if (avGrade<90){
	Grade = "B";
}else{
	Grade = "A";
}

document.getElementById("text").innerHTML = "The average Grade of " + gradeArr.length + " students is " + avGrade.toFixed(2) + " Points. Which is Grade " + Grade + ".";
 
