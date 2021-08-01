//------------ MAIN ------------

let choix = "";
let menu = "Que souhaitez vous faire ? \n";
menu += "   1. Addition \n";
menu += "   2. Soustraction \n";
menu += "   3. Multiplication \n";
menu += "   4. Division";
let nb1, nb2;
let resultat;
let signe;
let recommencer = false;

do {    
    do {

        choix = Number(prompt(menu));

    } while ((choix != 1) && (choix != 2) && (choix != 3) && (choix != 4));

    do {
        nb1 = Number(prompt("Entrez le nombre 1 : "));
        nb2 = Number(prompt("Entrez le nombre 2 : "));

    } while (isNaN(nb1) || isNaN(nb2));

   try {     
       switch (choix) {
            case 1:
                resultat = additon(nb1, nb2);
                signe = " + ";
                break;
            case 2:
                resultat = soustraction(nb1, nb2);
                signe = " - ";
                break;
            case 3:
                resultat = multiplication(nb1, nb2);
                signe = " * ";
                break;
            case 4:
                resultat = division(nb1, nb2);
                signe = " / ";
                break;
            default:
                throw new Error("Une erreur est survenue");
            }
            alert("Le resultat de " + nb1 + signe + nb2 + " est de " + resultat + ".");
        }
    catch(error){
        alert(error);
    }
    
    recommencer = confirm("Voulez vous refaire un calcul ? (Annuler pour quitter // ok pour recommencer)");
}while (recommencer === true);

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
    if (nombreB===0) {
        throw new Error("Impossible de diviser par 0");
    }
    let resultat = nombreA / nombreB;
    return resultat;
}
