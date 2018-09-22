var five = require("johnny-five");


function setupBoard() {
    board = new five.Board({ repl: false });
  
    // board.on("ready", rgbtest());
/*     board.on("ready", function() {
      led = new five.Led(13);
      led.blink(500);
      console.log("led initialised.")
    })
    console.log("gitbuy"); */
  }

  function rgbtest(){
    var led = new five.Led.RGB({
      pins: {
        red: 9,
        green: 10,
        blue: 11
      }
    });
  
    // Turn it on and set the initial color
    led.on();
    led.color("#FF0000");
  
    led.blink(1000);
  
  }