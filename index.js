const express = require("express");
const server = express();
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

//Config
    //Template Engine
    server.engine('handlebars', handlebars({defaultLayout: 'main'}));
    server.set('view engine', 'handlebars');

    //Body Parser
    server.use(bodyParser.urlencoded({extended: false}));
    server.use(bodyParser.json());

    //Rotas

    server.get("/", (req, res) => {
        res.render('home');
    });

    server.post("/index", (req,res) => {
        req.body.email;
        req.body.password;
        res.send(`Texto: ${req.body.email}, ${req.body.password}`);
    });

    server.get("/cadastro", (req, res) =>{
        res.render('cadastro');
    });

    server.post('/add', (req, res) => {
        req.body.name;
        req.body.email;
        req.body.password;
        res.send(`Texto: ${req.body.name}, ${req.body.email}, ${req.body.password}`);
    });

    server.get("/registrar_questionario", (req, res) => {
        res.render('questionario');
    });

server.listen(8080, () =>{
console.log("Funcionando");
});

//Questionario.sync({force: true});