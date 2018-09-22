var five = require("johnny-five");
let $ = require("jquery");


function setupBoard() {
    board = new five.Board({ repl: false });

    board.on("ready", function() {
      led = new five.Led(13);
      console.log("led initialised.");
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

  function start(){
   setupBoard();
  //  tempo();
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
    setInterval(function(){
      rgblue();
    },1000);
  }

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