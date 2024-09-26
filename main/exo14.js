let photocopies = parseInt(prompt("Saississez un nombre de photocopies"));
let cost = 0;

// Calcule du coût en fonction du nombre de photocopies
if (photocopies <= 10) {
    cost = photocopies * 0.10;
}else if (photocopies <= 30) {
    cost = (10 * 0.10) + ((photocopies - 10) * 0.09);
}else {
    cost = (10 * 0.10) + (20 * 0.09) + ((photocopies - 30) * 0.08);
}

alert("Le coût pour " + photocopies + " photocopies est de " + cost.toFixed(2) + " €");