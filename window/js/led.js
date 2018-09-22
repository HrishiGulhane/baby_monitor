var five = require("johnny-five");
let $ = require("jquery");


function setupBoard() {
    board = new five.Board({ repl: false });

    board.on("ready", function() {
      led = new five.Led(13);
      console.log("led initialised.");
      this.samplingInterval(500);
      tempo();
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
  led.on();
  led.color(myColor[index]);
  led.intensity(30);

}



/* 
  _____  ______  _____ __      __ ____  
  / ____||  ____||  __ \\ \    / // __ \ 
 | (___  | |__   | |__) |\ \  / /| |  | |
  \___ \ |  __|  |  _  /  \ \/ / | |  | |
  ____) || |____ | | \ \   \  /  | |__| |
 |_____/ |______||_|  \_\   \/    \____/                                                                                   
*/
                                
      
/* 
  __  __   ____  _______  ____   _____  
 |  \/  | / __ \|__   __|/ __ \ |  __ \ 
 | \  / || |  | |  | |  | |  | || |__) |
 | |\/| || |  | |  | |  | |  | ||  _  / 
 | |  | || |__| |  | |  | |__| || | \ \ 
 |_|  |_| \____/   |_|   \____/ |_|  \_\                                       
*/

/* 
  _____    _____  ____  
 |  __ \  / ____||  _ \ 
 | |__) || |  __ | |_) |
 |  _  / | | |_ ||  _ < 
 | | \ \ | |__| || |_) |
 |_|  \_\ \_____||____/ 
*/