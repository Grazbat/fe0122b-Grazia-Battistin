$( ()=>{

   $("h2").on("click", function(){
       $(this).next().toggle();
       $(this).toggleClass("meno");
   });

   /* CODICE PIU' CORTO MA NON LEGGIBILE
   $("h2").on("click", function(){
       $(this).next.toggle().prev().toggleClass("meno");
   });*/
});