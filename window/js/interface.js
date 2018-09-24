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
    $('#wrapper_home').hide(0);
    uiSequence();
});


function uiSequence() {

    $('#welcome_screen').fadeIn(6000);
    // $('#outer').('green');
    login();





    $('#colorbro').click(function () {
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

function login() {

    $('#login').click(function () {
        var c = $('#c_name').val();
        var p = $('#p_name').val();

        if (c.length == "" && p.length == "") {
            console.log('No Input');
            $('#invalid').html('INVALID NAMES');
            $('#c_name').effect("shake", { times: 2 }, 400);
            $('#p_name').effect("shake", { times: 2 }, 400);

        }
        else if (c.length > 1 && p.length > 1) {
            event.preventDefault();
            c_name = $('#c_name').val();
            p_name = $('#p_name').val();
            $('#topMessage').html('Welcome '+p+" this is baby "+c+"'s dashboard lorem lorem lorem lorem lorem lorem");
            $('#wrapper_home').fadeIn(700);
            $('#welcome_screen').fadeOut(700);
        }
    });
}


