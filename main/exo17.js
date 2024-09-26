let x = parseInt(prompt("Entrez un nombre"));
let y = parseInt(prompt("Entrez un second nombre"));


if (x < y) {
    alert("Les nombres sont dans l'ordre croissant: " + x + ", " + y);
}else if (x > y) {
    alert("Les nombres sont dans l'ordre croissant: " + y + ", " + x);
}else {
    alert("Les nombres sont égaux: " + x + " = " + y);
}