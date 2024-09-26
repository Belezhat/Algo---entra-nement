let number1 = parseInt(prompt("Entrez un nombre"));
let number2 = parseInt(prompt("Entrez un autre nombre"));

// Pour déterminer le plus petit et le plus grand
let min, max;
if(number1 < number2){
    min = number1;
    max = number2;
}else {
    min = number2;
    max = number1;
}

let result = "Les nombres du plus petit au plus grand sont: ";

for (let i = min; i <= max; i++) {
        result += i + " ";
}
alert(result);