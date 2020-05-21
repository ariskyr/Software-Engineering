const electron = require('electron')
const { app, BrowserWindow, Menu } = require('electron')
app.allowRendererProcessReuse = true;

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 600,
    height: 450,
    titleBarStyle: 'customButtonsOnHover',
    webPreferences: {
      nodeIntegration: true
      
    },
    resizable: true,
    frame: false,
    icon: "./project/favicon.ico"
  })
  //menu disappears
  //Menu.setApplicationMenu(null);

  
  // and load the index.html of the app.
  win.loadFile('./project/index.html')
}

app.whenReady().then(createWindow)
