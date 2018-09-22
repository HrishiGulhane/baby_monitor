var five = require("johnny-five");
let $ = require("jquery");



function setupBoard() {
    board = new five.Board({ repl: false });

    board.on("ready", function() {
      led13 = new five.Led(13);
      console.log("led initialised.");
      this.samplingInterval(1000);
      tempo();
      sliderChange();
      setupLed();
      // sweep();
    })
  
    // board.on("ready", rgbtest());
/*     board.on("ready", function() {
      led = new five.Led(13);
      led.blink(500);
      console.log("led initialised.")
    })
    console.log("gitbuy"); */
    // tempo();
  }
/* 
  _    _  _____ 
 | |  | ||_   _|
 | |  | |  | |  
 | |  | |  | |  
 | |__| | _| |_ 
  \____/ |_____|
                
*/

/* 
  _______  ______  __  __  _____  
 |__   __||  ____||  \/  ||  __ \ 
    | |   | |__   | \  / || |__) |
    | |   |  __|  | |\/| ||  ___/ 
    | |   | |____ | |  | || |     
    |_|   |______||_|  |_||_|     
*/

  function tempo(){
    console.log("poop");
    var temperature = new five.Thermometer({
      controller: "TMP36",
      pin: "A0"
    });
  
    temperature.on("change", function() {
      console.log(this.celsius + "°C", this.fahrenheit + "°F");
      $('#tempo').html(this.fahrenheit);

      if(this.fahrenheit>70)
      {
        // $('#tempo').effect("shake");
        // setColor(0);
      }
      else if(this.fahrenheit<70 || this.fahrenheit>65){
        // setColor(1);
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
function setupLed(){

 
    var led = new five.Led.RGB({
      pins: {
        red: 9,
        green: 10,
        blue: 11
      }
    });
   
}

function setColor(index){
  var led = new five.Led.RGB({
    pins: {
      red: 9,
      green: 10,
      blue: 11
    }
  });
  var myColor = ['FF0000', '00FF00', '0000FF'];
  // Turn it on and set the initial color
  // led.on();
  // led.color(myColor[index]);
  // led.intensity(30);

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
  led.strobe(100);
  led.off();
  setTimeout(alertBlue,1000);
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
  led.off();

  setTimeout(alertLights,1000);

}



/* 
  _____  ______  _____ __      __ ____  
  / ____||  ____||  __ \\ \    / // __ \ 
 | (___  | |__   | |__) |\ \  / /| |  | |
  \___ \ |  __|  |  _  /  \ \/ / | |  | |
  ____) || |____ | | \ \   \  /  | |__| |
 |_____/ |______||_|  \_\   \/    \____/                                                                                   
*/
  function sliderChange(val){
    $('#out').html(val);
    sweep(val);

  }  


 function sweep(val){
  var servo = new five.Servo({
    pin:3,
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
function fanSlider(val)
{
  $('#fan').html(val);
    fan(val);
}

function fan(val){

  motor = new five.Motor({
    pins: {
      pwm: 6,
      dir: 5,
      cdir: 4
    }
  });
  if(val>0){
    motor.forward(val);
  }
  else if(val<0){
    var posValue=val*-1;
    motor.reverse(posValue);
  }
  
}
