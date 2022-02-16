


function calcolo(morte= 100, eta){
    //var eta = document.getElementById(anni).value;
    return (morte - eta);
}
console.log(calcolo(100, 30));

calcolo (100, 53);
console.log(calcolo(100, 53));

//facciamo una funzione freccia//
tristezza = ()=> {return "\nPrima o poi moriremo tutti!"}
document.write(tristezza());

//facciamo una funzione closure//

/*function operazioni(){
    var numero= 10;
    function somma(){
        console.log(numero + numero)
    }
    return somma();

}
var numero1= operazioni();*/

/*function cataclisma(){
    var evento1= "Tsunami";
    var evento2= "Terremoto";
    var evento3= "Piaga delle Locuste";
    function risultato(){
        var esito= "Decesso";
        console.log(esito);
        console.log(evento1, evento2, evento3, esito);
        return evento1 + esito;
    }
    console.log(evento1);
    
    return risultato();
}
alert(cataclisma());*/

function cataclisma(){
    var evento1= "Tsunami";
    var evento2= "Terremoto";
    var evento3= "Piaga delle Locuste";
    function risultato(){
        var esito= " Decesso";
        console.log(esito);
        console.log(evento1, evento2, evento3, esito);
        return evento1 + esito;
    }
    console.log(evento1);
    return risultato();
}    
    
   
    /*var accade= true;
    if(evento1 == accade){
      esito;
    }
    if(evento2 == accade){
         esito;
       }
       if(evento3 == accade){
         esito;
       }
       console.log(evento1 == accade + evento2 == accade + evento3 == accade);
       return risultato();*/

alert(cataclisma());

//operatori di comparazione
       var test1= 7;
       var test2= 35;
       var test3= 7;
       var test4= "35";
       var test5= 19;

       console.log(test1 === test3); //mi aspetto un true
       console.log(test1 == test5);  //mi aspetto un false
       console.log(test2 == test4);  //mi aspetto un true
       console.log(test2 === test4); //mi aspetto un false

       console.log(test5 != test1); //mi aspetto un true
       console.log(test2 != test4); //mi aspetto un false
       console.log(test2 !== test4); //mi aspetto un true
    
       console.log(test1 > test2); //mi aspetto un false
       console.log(test3 < test5); //mi aspetto un true
      

       var numeri= 789;
       var numeri1= 462;
       var numeri2= 796;
       
       console.log(numeri >= numeri1); //mi aspetto un true
       console.log(numeri1 <= numeri2); //mi aspetto un true