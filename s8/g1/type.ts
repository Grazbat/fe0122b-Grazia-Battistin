let giocatore1: number = Math.floor(Math.random()* (100-1) +1);
let primoGiocatore: any = document.querySelector('#primo');
primoGiocatore.innerText = 'Il primo giocatore sceglie il numero: ' + giocatore1;

let giocatore2: number = Math.floor(Math.random()* (100-1) +1);
let secondoGiocatore: any = document.querySelector('#secondo');
secondoGiocatore.innerText = 'Il secondo giocatore sceglie il numero: ' + giocatore2;

console.log('Giocatore 1 sceglie: ' + giocatore1);
console.log('Giocatore 2 sceglie: ' + giocatore2);

function caos(){
    let random: number = Math.floor(Math.random()* (100-1) +1);
    console.log('Numero randomico: ' + random);
    let numeroRandom: any = document.querySelector('#scelto');
    numeroRandom.innerText = 'Il numero estratto è: ' + random;

    if(random == giocatore1){
        console.log('Giocatore 1 vince');
    }else if(random == giocatore2){
        console.log('Giocatore 2 vince');
    }else{

        let sottrazione1: number = Math.abs(giocatore1 - random);
        let sottrazione2: number = Math.abs(giocatore2 - random); 
        console.log('Risultato del primo giocatore: ' + sottrazione1);
        console.log('Risultato del secondo giocatore: ' + sottrazione2);
        let vincitore: any = document.querySelector('#winner');
        let giocatoreVincente: string;
        
        if(sottrazione1 < sottrazione2){
            console.log('oh no! Giocatore 1 fa schifo');
            giocatoreVincente = 'Giocatore 2';
        }else{
            console.log('oh no! Giocatore 2 fa schifo');
            giocatoreVincente = 'Giocatore 1';
        };
        vincitore.innerText = 'Il vincitore è : ' + giocatoreVincente; 
    };

};
caos();