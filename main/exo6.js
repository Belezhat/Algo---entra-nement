let number1 = parseFloat(prompt("Entrez un nombre"));
let number2 = parseFloat (prompt("Entrez un deuxième nombre"));
let number3 = parseFloat(prompt("Entrez un troisième nombre"));

if(number1 <= number2 && number2 <= number3) {
    alert("ascendant")
}else {
    alert("descendant")
}