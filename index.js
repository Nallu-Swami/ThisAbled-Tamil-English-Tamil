const express = require('express');
const server = express();
const PORT = 6942;
server.listen(PORT, () => {
    console.log("The server works fine");
});