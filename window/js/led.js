var five = require("johnny-five");
function setupBoard() {
    board = new five.Board({ repl: false });
  
    board.on("ready", function() {
      led = new five.Led(13);
      led.blink(500);
      console.log("led initialised.")
    })
    console.log("gitbuy");
  }