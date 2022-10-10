// Config //
var httpServer_Port = 3000;

// -> Webserver
const express = require('express');
const http = require('http');
const { json } = require('express/lib/response');
const favicon = require('serve-favicon'); //for website favicon (the tab icon)
const app = express();
const server = http.createServer(app);

const LoggerClass = require('./Logger');
const Logger = new LoggerClass();

// -> http-Endpoints
var getRequests = ['/', '/login', '/register', '/console', '/logout', '/yourscripts'];
var apiGetRequests = ['/WhatsMyIp', '/download'];
var postRequests = ['/register', '/login'];

// -> WebServer-setup
app.use("/static", express.static('./static/'));
app.use("/images", express.static('./images/'));
app.use(favicon(__dirname + '/rsLogo.ico')); //setting favicon
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// WebServer Listeners //
app.get(apiGetRequests, (req, res) => {
    var remoteUser_ip = req.socket.remoteAddress
    console.log(`User sent request [${req.path}] from ip: ${remoteUser_ip}`);
    Logger.log(`User sent request [${req.path}] from ip: ${remoteUser_ip}`);
});


app.get(getRequests, (req, res) => {
    var remoteUser_ip = req.socket.remoteAddress
    console.log(`User sent request [${req.path}] from ip: ${remoteUser_ip}`);
    Logger.log(`User sent request [${req.path}] from ip: ${remoteUser_ip}`);

    if(req.path == '/'){
        res.sendFile(__dirname + '/sites/index.html');
    }
});


app.post(postRequests, (req, res) => {
    var remoteUser_ip = req.socket.remoteAddress
    console.log(`User sent request [${req.path}] from ip: ${remoteUser_ip}`);
    Logger.log(`User sent request [${req.path}] from ip: ${remoteUser_ip}`);
});


// WebServer Listener/s
server.listen(httpServer_Port, "0.0.0.0", () => {
    console.log("Listening on port *:", httpServer_Port);
});
