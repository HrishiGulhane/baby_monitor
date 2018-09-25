var five = require("johnny-five");
let $ = require("jquery");
var timeBlue;
var timeRed;

function setupBoard() {
  board = new five.Board({ repl: false });

  board.on("ready", function () {
    $('#wrapper_alert').hide(0);
    // led = new five.Led(13);
    console.log("led initialised.");
    $('#wrapper').fadeIn(700);

    this.samplingInterval(1000);
    // tempo();
    // sliderChange();
    uiSequence();
    // setColor();
    // setupLed();
    // sweep();
  });
}

/* 
  _______  ______  __  __  _____  
 |__   __||  ____||  \/  ||  __ \ 
    | |   | |__   | \  / || |__) |
    | |   |  __|  | |\/| ||  ___/ 
    | |   | |____ | |  | || |     
    |_|   |______||_|  |_||_|     
*/

function tempo() {
  console.log("poop");
  var temperature = new five.Thermometer({
    controller: "TMP36",
    pin: "A0"
  });

  temperature.on("change", function () {
    console.log(this.celsius + "°C", this.fahrenheit + "°F");
    $('#tempo').html(this.fahrenheit + "°");

    if (this.fahrenheit > 102) {
      $('#wrapper_alert').hide(0);

      if (this.fahrenheit > 106) {
        console.log("hyperthermia");
        // alertLights();
        $('#final').text(c_name + ' has HIGH FEVER. Immediate attention required');
        $('#wrapper_alert').show(0);
        $('#police').click(function () {
          $('#final_m').text('Emergency services have been notified');
          alertLights();
        });
        $('#emergency').click(function () {
          $('#final_m').text('The doctor is on his way');
          alertLights();
        });
      }
      else {
        $('#tempo').effect("shake");
        setColor(0);
        console.log("hot bois");
        sweep(150);
        // $('#outer').toggleClass('red');
        $('#outer').attr('class', 'red');
      }
    }


    else if (this.fahrenheit < 100.4 && this.fahrenheit > 97.7) {
      $('#wrapper_alert').hide(0);
      setColor(1);
      console.log("safe bois");
      sweep(90);
      // $('#outer').toggleClass('green');
      $('#outer').attr('class', 'green');
    }


    else if (this.fahrenheit < 96) {
      $('#wrapper_alert').hide(0);
      setColor(2);
      console.log("cold bois");
      sweep(30);
      $('#outer').attr('class', 'blue');
      if (this.fahrenheit < 93) {
        console.log("hypothermia");
        // alertLights();
        $('#final').text(c_name + ' has hypothermia. Immediate attention required');
        $('#wrapper_alert').show(0);
        $('#police').click(function () {
          $('#final_m').text('Emergency services have been notified');
          alertLights();
        });
        $('#emergency').click(function () {
          $('#final_m').text('The doctor is on his way');
          alertLights();
        });
        // 
      }
      // $('#outer').toggleClass('blue');
      
    }


  });
}


/* 
  _____    _____  ____  
 |  __ \  / ____||  _ \ 
 | |__) || |  __ | |_) |
 |  _  / | | |_ ||  _ < 
 | | \ \ | |__| || |_) |
 |_|  \_\ \_____||____/ 
*/

function setColor(index) {
  var led = new five.Led.RGB({
    pins: {
      red: 9,
      green: 10,
      blue: 11
    }
  });
  if (lightGate = true) {
    var myColor = ['FF0000', '00FF00', '0000FF'];
    // Turn it on and set the initial color
    led.on();
    led.color(myColor[index]);
  }
}
function alertLights(){
  
  var led = new five.Led.RGB({
    pins: {
      red: 9,
      green: 10,
      blue: 11
    }
  });
  console.log("red");
  led.on();
  led.color("#FF0000");
  led.strobe(200);
  setTimeout(alertBlue,500);
}

function alertBlue(){
  var led = new five.Led.RGB({
    pins: {
      red: 9,
      green: 10,
      blue: 11
    }
  });
  led.on();
  led.color("#0000FF");
  led.strobe(200);
  console.log("blue");
  setTimeout(alertLights,500);

}

 
  /* 
    _____  ______  _____ __      __ ____  
    / ____||  ____||  __ \\ \    / // __ \ 
   | (___  | |__   | |__) |\ \  / /| |  | |
    \___ \ |  __|  |  _  /  \ \/ / | |  | |
    ____) || |____ | | \ \   \  /  | |__| |
   |_____/ |______||_|  \_\   \/    \____/                                                                                   
  */
  function sliderChange(val) {
    $('#out').html(val);
    sweep(val);

  }


  function sweep(val) {
    var servo = new five.Servo({
      pin: 3,
      center: true,
      // range: [45,135], 
    });
    // servo.center();
    // servo.sweep({
    //   interval: 500,
    // });
    servo.to(val);
  }
  /* 
    __  __   ____  _______  ____   _____  
   |  \/  | / __ \|__   __|/ __ \ |  __ \ 
   | \  / || |  | |  | |  | |  | || |__) |
   | |\/| || |  | |  | |  | |  | ||  _  / 
   | |  | || |__| |  | |  | |__| || | \ \ 
   |_|  |_| \____/   |_|   \____/ |_|  \_\                                       
  */
  function fanSlider(val) {
    // $('#fan').html(val);
    fan(val);
  }

  function fan(val) {

    motor = new five.Motor({
      pins: {
        pwm: 6,
        dir: 5,
        cdir: 4
      }
    });
    if (val > 0) {
      motor.forward(val);
    }
    else if (val < 0) {
      var posValue = val * -1;
      motor.reverse(posValue);
    }

  }


