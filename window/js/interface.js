/* 
  _    _  _____ 
 | |  | ||_   _|
 | |  | |  | |  
 | |  | |  | |  
 | |__| | _| |_ 
  \____/ |_____|
                
*/
var c_name;
var p_name;
$(document).ready(function () {
    uiSequence();
});


function uiSequence() {
    $('#home_screen').hide(0);
    $('#welcome_screen').fadeIn(6000);
    // $('#outer').('green');

    $('#login').click(function () {
        event.preventDefault();
        c_name = $('#c_name').val();
        p_name = $('#p_name').val();
        testname();
        $('#home_screen').fadeIn(700);
    $('#welcome_screen').fadeOut(700);


    });

    $('#colorbro').click(function(){
        console.log('jelas ka');
        /* $('#outer').css("background", "");

        $('#outer').css("background", "linear-gradient(-45deg,#ff0000,rgb(1, 227, 91), #0000ff)");
        $('#outer').css('animation', 'Gradient 3s ease infinite'); */
       
            $('#outer').toggleClass('blue');

     

        
    });
   

}

function testname() {
    console.log(c_name, p_name)
}