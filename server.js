// import express and socket io then invoke them so we don't have to declare new variables
const express = require('express')()
const io = require('socket.io')()

// define variables
const port = 4000

// get express to listen to the port we declared
express.listen(port, () => {
    console.log('Server Listening To Port ' + port + '!')
})

