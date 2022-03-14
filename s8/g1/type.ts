let giocatore1: number = Math.floor(Math.random()* (100-1) +1);
let giocatore2: number = Math.floor(Math.random()* (100-1) +1);
console.log('Giocatore 1 sceglie: ' + giocatore1);
console.log('Giocatore 2 sceglie: ' + giocatore2);

function caos(){
    let random: number = Math.floor(Math.random()* (100-1) +1);
    console.log('Numero randomico: ' + random);

    if(random == giocatore1){
        console.log('Giocatore 1 vince');
    }else if(random == giocatore2){
        console.log('Giocatore 2 vince');
    }else{

        let sottrazione1: number = Math.abs(giocatore1 - random);
        let sottrazione2: number = Math.abs(giocatore2 - random); 
        console.log('Risultato del primo giocatore: ' + sottrazione1);
        console.log('Risultato del secondo giocatore: ' + sottrazione2);
        
        if(sottrazione1 < sottrazione2){
            console.log('oh no! Giocatore 1 fa schifo');
        }else if(sottrazione2 < sottrazione1){
            console.log('oh no! Giocatore 2 fa schifo')
        };
    };
};
caos();