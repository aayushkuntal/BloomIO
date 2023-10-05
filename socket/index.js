const io = require('socket.io')(5000, {
    cors: {
        origin: '*',
    }
});

let activeUsers = [];

io.on('connection', socket => {

    //add new user
    socket.on('add-user', (newUserId) => {
        if (!activeUsers.includes(newUserId)) {
            activeUsers.push({
                userId: newUserId,
                socketId: socket.id
            });
        }
        console.log("joined :", activeUsers);
        io.emit('get-users', activeUsers);
    });

    //remove user
    socket.on('disconnect', () => {
        activeUsers = activeUsers.filter(user => user.socketId !== socket.id);
        console.log("disconnected :", activeUsers);
        io.emit('get-users', activeUsers);
    });
    
});
