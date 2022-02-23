
 var tendina = document.getElementById("btn");
    tendina.addEventListener("click", openMenu);

function openMenu(){
   let navigation = document.getElementById("showme");
  
   if(navigation.style.visibility == ""){
    navigation.style.visibility = "visible";
   } else{
    navigation.style.visibility = "";
   }
}

let button1 = document.querySelector("#yellow");
let button2 = document.querySelector("#capital");
let button3 = document.querySelector("#bg");
let button4 = document.querySelector("#sparito");
let button5 = document.querySelector("#under");

button1.addEventListener("click", function(){
    let target = document.querySelector("target");
    target.style.color = "#ffffff";
})

