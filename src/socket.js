const { Server } = require("socket.io");

let io;

const initializeSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: "*"
        }
    });
}

const emitTaskCreated = (task) => {
    if(!io) {
        return;
    }

    io.emit("task:created", {
        message: "Websocket copnnection established.",
        data: { task }
    })
}


module.exports = { initializeSocket, emitTaskCreated}