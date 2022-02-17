
// creo una stringa
var primaStringa = "Iniziamo la nostra esercitazione sugli Array! Ti verrà da rigettare, ma non preoccuparti, stiamo tutti piangendo LACRIME AMARE!";
document.getElementById("var-stringa").innerHTML = primaStringa;

// metto tutti i caratteri in maiuscolo
var strMaiuscola = primaStringa.toUpperCase();
console.log(strMaiuscola);

// metto tutti i caratteri in minuscolo
var strMinuscola = primaStringa.toLowerCase();
console.log(strMinuscola);

// Suddivido la stringa nei suoi elementi
var strSplittata = primaStringa.split(" ");
console.log(strSplittata);

// Seleziono due elementi della stringa splittata
var elementoSelezionato = strSplittata.slice(1, 2);
console.log(elementoSelezionato);

var elementoSelezionato2 = strSplittata.slice(16, 17);
console.log(elementoSelezionato2);

// Seleziono molteplici elementi
var selezioneMultipla = strSplittata.slice(3, 9);
console.log(selezioneMultipla);

// Concateno i primi due elementi
var elementiConcatenati = elementoSelezionato.concat(elementoSelezionato2);
console.log(elementiConcatenati);

// Creo un Array
var vips = [
    "Malgioglio",
    " Fiorello",
    " Carrà",
    " Bonolis"
];
document.getElementById("vips").innerHTML = vips;
document.getElementById("lei").innerHTML = vips[2]; // dalla traccia non è chiaro se devo prendere il terzo elemento secondo l'indice o secondo un conteggio fatto da un essere umano, perciò li farò entrambi.
document.getElementById("lui").innerHTML = vips[3];

// Passo all'array un nuovo elemento
var nuovoVip = "Emilio Fede";
var inseriscoVip = vips.splice(2, 1, nuovoVip);
console.log(vips);

// Misuro la lunghezza dell'array
var misuraVips = vips.length;
console.log(misuraVips);


// Uso push e pop
var animaletti = [
    "gattini",
    "canetti",
    "cinghialetti",
    "cervetti"
];
console.log(animaletti);

var animalettiPoppati = animaletti.pop();
console.log(animaletti);

var animalettiPushati = animaletti.push("furetti");
console.log(animaletti);

// Uso shift e unshift
var animalettiShiftati = animaletti.shift();
console.log(animaletti);

var animalettiUnshiftati = animaletti.unshift("lupetti");
console.log(animaletti);

// Imposto una funzione

function differenza(numeri) {
    var numeri = [
        "4",
        "8",
        "15",
        "73"
    ];
    console.log(numeri);
    return 73 - 8;
}

var risultato = differenza();
console.log(differenza);

// Ed è proprio qui che ho perso ogni cognizione di quello che sto facendo!