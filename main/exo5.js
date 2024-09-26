let number1 = prompt("Entrez un nombre");
let number2 = prompt("Entrez un autre nombre");

if(number1 == 0 || number2 == 0) {
    alert("Null");
}else if((number1 > 0 && number2 > 0) || (number1 < 0 || number2 < 0)) {
       // Si les deux nombres ont le même signe
    alert("positif")
}else {
    // Si les nombres ont des signes opposés
    alert("négatif")
}