//------------ MAIN ------------

let choix = "";
let menu = "Que souhaitez vous faire ? \n";
menu += "   1. Addition \n";
menu += "   2. Soustraction \n";
menu += "   3. Multiplication \n";
menu += "   4. Division";

do {
 
    choix = Number(prompt(menu));

} while ((choix != 1) && (choix != 2) && (choix != 3) && (choix != 4));

//------------ FONCTIONS ------------
function additon(nombreA, nombreB) {
    let resultat = nombreA + nombreB;
    return resultat;
}

function soustraction(nombreA, nombreB) {
    let resultat = nombreA - nombreB;
    return resultat;
}

function multiplucation(nombreA, nombreB) {
    let resultat = nombreA * nombreB;
    return resultat;
}

function division(nombreA, nombreB) {
    // création d'une erreur si nombre B vaut 0 
    // if (nombreB===0) {
        
    // }
    let resultat = nombreA / nombreB;
    return resultat;
}