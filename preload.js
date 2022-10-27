const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  GridTrade: (data) => ipcRenderer.invoke('GridTrade', data),
})
