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

    $('#login').click(function () {
        event.preventDefault();
        c_name = $('#c_name').val();
        p_name = $('#p_name').val();
        testname();
    });


}

function testname() {
    console.log(c_name, p_name)
}