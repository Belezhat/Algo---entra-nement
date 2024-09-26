let hours = parseInt(prompt("Saisissez l'heure actuelle"));
let minutes = parseInt(prompt("Saississez les minutes actuelle"));


// Boucle pour s'assurer que les minutes ne dépassent pas 59
while (minutes < 0 || minutes > 59) {
    minutes = parseInt(prompt("Minutes invalides, saississez un nombre entre 0-59"));
}

minutes += 1;

// Gére le passage à l'heure suivante si les minutes atteignent 60
if (minutes === 60) {
    minutes = 0;
    hours += 1;
}

// Gére le passage à minuit si l'heure atteint 24
if (hours === 24) {
    hours = 0;
}

alert("Dans une minute, il sera " + hours + " heure " + minutes + " minutes.");



