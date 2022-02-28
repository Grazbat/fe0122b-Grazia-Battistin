// Quando il documento è pronto...
$(document).ready(function(){
    $("#iscr-news").click(function(){
    let campo1 = $("#nome").val();
    let campo2 = $("#email-1").val();
    let campo3 = $("#email-2").val();
  
    if (campo1 == ""){
        $("#nome").next().text("*Richiesto");
    }else{
        $("#nome").next().text("");
    };
    if (campo2 == ""){
        $("#email-1").next().text("*Richiesto");
    }else{
        $("#email-1").next().text("");
    };
    if (campo3 == ""){
        $("#email-2").next().text("*Richiesto");
    }else{
        $("#email-2").next().text("");
    };


    if(campo2 != campo3){
        alert("La tua email non ha senso, così come la tua vita");
    }

    if(campo1 + campo2 + campo3 != false && campo2 == campo3){
        alert("Complimenti! sei iscritto");
    }

});

$("#pulisci-form").click(function(){
    $("#nome, #email-1, #email-2").val("");
    
});

});
    //gestisco il click sul pulsante Iscriviti
    
        // inizializzo una variabile di controllo a true
        
        // utilizzo una dichiarazione if e se il valore di nome è presente altrimenti devo scrivere *Richiesto
        
        // nell'else uso next e text per impostare l'elemento span adiacente
        
        // assegno a due variabili il valore dei due campi email
        
        // ripeto la condizione nel nome anche per l'email
        
        // nella verifica devo mettere una ulteriore condizione se le email inserite sono diverse

        //invio del form se tutti i campi sono validi

    //gestisco il click sul pulsante Pulisci il form, i campi devono essere vuoti e 
    //posizionare un asterisco per identificare il campo obbligatorio. 
