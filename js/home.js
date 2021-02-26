const express = require("express");
const server = express();
const router = express.Router();

server.use(express.json({extend: true}));
server.use(router);

server.listen(8080, () =>{
    console.log("Funcionando");
});