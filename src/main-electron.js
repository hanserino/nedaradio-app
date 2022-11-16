const { app, BrowserWindow } = require("electron");
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      devTools: false
    },
  });

  mainWindow.loadURL("https://nedaradio.herokuapp.com/");

  mainWindow.on("closed", function () {
    mainWindow = null;
  });

}

app.on("ready", createWindow);

app.on("resize", function (e, x, y) {
  mainWindow.setSize(x, y);
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
}); 