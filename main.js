const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const { dbInstance } = require('./db.js')
const { GridTrade } = require('./db/grid_trade')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 680,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  ipcMain.handle('GridTrade', (event, data) => {
    return GridTrade.exec(data)
  })

  mainWindow.loadURL('http://localhost:3000')

  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
  dbInstance && dbInstance.close()
})
