let dayNumber = parseInt(prompt("Entrez un nombre 1 et 7:"));

let dayName = "";

switch (dayNumber) {
    case 1:
        dayName = "Lundi";
        break;
    case 2:
        dayName = "Mardi";
        break;
    case 3:
        dayName = "Mercredi";
        break;
    case 4:
        dayName = "Jeudi";
        break;
    case 5:
        dayName = "Vendredi";
        break;
    case 6:
        dayName = "Samedi";
        break;
    case 7:
        dayName = "Dimanche";
        break;
    default:
        dayName = "Nombre invalide, entrez en nombre entre 1 et 7.";
        break;
}


alert(dayName);