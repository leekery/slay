const { app, BrowserWindow } = require('electron')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720
  })
  mainWindow.loadFile('src/ui/index.html')
}

app.whenReady().then(createWindow)