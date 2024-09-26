let hours = parseInt(prompt("Saisissez l'heure actuelle"));
let minutes = parseInt(prompt("Saississez les minutes actuelle"));
let seconds = parseInt(prompt("Saississez les seconds actuelle"));

while (minutes < 0 || minutes > 59) {
    minutes = parseInt(prompt("Minutes invalides, saississez un nombre entre 0-59"));
}
// Boucle pour s'assurer que les secondes ne dépassent pas 59
while (seconds < 0 || seconds > 59) {
    seconds = parseInt(prompt("Seconcdes invalides, saississez un nombre entre 0-59"));
}

seconds += 1;

// Gérer le passage à la minute suivante si les secondes atteignent 60
if (seconds === 60) {
    seconds = 0;
    minutes += 1;
}
// Gére le passage à l'heure suivante si les minutes atteignent 60
if (minutes === 60) {
    minutes = 0;
    hours += 1;
}

// Gére le passage à minuit si l'heure atteint 24
if (hours === 24) {
    hours = 0;
}

alert("Dans une seconde, il sera " + hours + " heure " + minutes + " minutes et " + seconds + " secondes");
