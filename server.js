require('dotenv').config()
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const cors = require('cors')

const users = []

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

io.on('connection', socket => {
    socket.on('new-user', name => {
        users[socket.id] = name
        socket.broadcast.emit('user-connected', name)
    })
    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
    })
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id]
    })
})

const PORT = process.env.PORT || 3000
http.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})