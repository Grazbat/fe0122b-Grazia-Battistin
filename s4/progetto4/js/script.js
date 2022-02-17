

 function prandiDato(calcolo){
   let display = document.getElementById("schermino");
   let numero = calcolo.id;

   display.value += numero;
  }
  console.log(prandiDato);

  function resetCalcolatrice(){
        document.getElementById("schermino").value = "";
  }
  console.log(resetCalcolatrice);

  function totale(){
      let display = document.getElementById("schermino");
      display.value = eval(display.value);
  }
  console.log(totale);