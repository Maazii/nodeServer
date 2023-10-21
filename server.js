const logEvents = require("./logEvents");
const EventEmitter = require("events");
const http = require("http");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

class Emitter extends EventEmitter {};

const myEmitter =  new Emitter();

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});

server.listen(PORT, () => { console.log(`Server is listening on port: ${PORT}\n`) });

// myEmitter.on("log", (message) => logEvents.logEvent(message));
// myEmitter.emit("log", "Log this you filthy casual!")