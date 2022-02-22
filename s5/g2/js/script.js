var portafogli = 1000;
document.getElementById('test').innerHTML = "budget iniziale" + " " + portafogli;

function speseProgressive(){
    return Math.floor(Math.random()* 100);
}

while(portafogli > 0){
    var spese = speseProgressive();
    document.getElementById("test2").innerHTML += "avevi" + " " + portafogli + " e hai speso:" + " " + spese + "<br>";
    portafogli -= spese;
    console.log(spese);
  
    if(portafogli <= 500 && portafogli >= 420){
        document.getElementById("test2").innerHTML += "ACHTUNG!!" + "<br>" + "hai già speso la metà del tuo misero stipendio." +"<br>";
     }

    if(portafogli < 50){
        document.getElementById("test2").innerHTML += "ECCALLA'" + "<br>" + "TI DEVI IPOTECARE LA CASA" +"<br>";
    }
}



    