const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  GridTrade: (data) => ipcRenderer.send('GridTrade', data),
})
