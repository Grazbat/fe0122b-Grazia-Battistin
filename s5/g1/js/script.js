var dataOdierna = new Date();
console.log(dataOdierna);

document.write(dataOdierna);

console.log(dataOdierna.getDate());
console.log(dataOdierna.getMonth());
console.log(dataOdierna.getDay());

alert(dataOdierna.getDate() + " " + dataOdierna.getMonth() + " " + dataOdierna.getDay());

const event = new Date(Date.UTC(2022, 1, 21, 3, 18, 0));
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(event.toLocaleDateString('it-IT', options));
document.getElementById("data1").innerHTML = event.toLocaleDateString('it-IT', options);


//creo un orologio

setInterval(Orologio,1000);
function addZero(i) {
if (i < 10) {
  i = "0" + i;      //00:00:00
}
return i;
}

function Orologio()
{
  var d = new Date();
  var date = d.getDate();
  var ora = addZero(d.getHours());
  var min = addZero(d.getMinutes());
  var sec = addZero(d.getSeconds());
  document.getElementById("orologio").innerHTML="Se vuoi sapere l'ora, eccola qui!" + "" +ora+":"+min+":"+sec;
}


/*const stringa = 
console.log(stringa.padStart(2, "0"))*/

