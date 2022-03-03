
$( () =>{
    $('#clicca').on('click', function(){
        $('#barra').animate({
            width: "500px"
            },{
            duration: 6000,
            easing: 'linear',
            step: function(x){
                $('#testo').text (Math.round(x * 100 / 500)+ "%");
            }
            
        });
    });

});