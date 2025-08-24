// electron.cjs
const { app, BrowserWindow, Menu } = require("electron");

function createWindow() {
const win = new BrowserWindow({
  width: 1000,
  height: 700,
  webPreferences: {
    nodeIntegration: true,
  },
});

win.maximize(); // 👉 agrandit à la taille de l’écran


  // ⚡ Supprimer le menu par défaut
  Menu.setApplicationMenu(null);

  // Charger ton app Vue.js en dev
  win.loadURL("http://localhost:5173");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
