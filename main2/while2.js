let number = parseInt(prompt("Entrez un nombre entre 10 et 20 :"));

while(number < 10 || number > 20) {
    if(number < 10) {
        console.log("Choisissez un nombre plus grand");  
    }else if(number > 20) {
        console.log("Choisissez un nombre plus petit");
    }
    number = parseInt(prompt("Entrez un nombre entre 10 et 20 :")); 
}
console.log("Merci, vous avez entré : " + number);