let number = parseInt(prompt("Entrez un nombre"));

let result = "Table de " + number + ":\n";

for (let i = 1; i <= 10; i++) {
    result += number + " x " + i + " = " + (number * i) + "\n";
}
alert(result);