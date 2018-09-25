const Utils = require('./lib/utilities');
let mainWindow
const Other = require('./service');

let applicationHTML = `${__dirname}/../window/index.html`;

const StartWindowSize = {
  width: 1000,
  height: 1000
}

Other.showMessage()

function createWindow () {
  console.log("main window works");
  mainWindow = Utils.createBrowserWindow(applicationHTML, {
    backgroundColor: '#111111',
    width: StartWindowSize.width,
    height: StartWindowSize.height
  });
  Utils.whenWindowClosed(mainWindow, function(){
    mainWindow = null;
  })
}

Utils.whenAllWindowsClosed( function() {
  if (! Utils.isMacOS() ) {
    Utils.quitElectron()
  }
})
  
Utils.whenApplicationActivated(function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null ) {
    createWindow()
  }
})

Utils.whenElectronInitialised(createWindow)