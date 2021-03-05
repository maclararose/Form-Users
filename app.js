const express = require("express");
const server = express();
const handlebars = require('express-handlebars');

//Config
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

        //Conexão com o banco
        const sequelize = new Sequelize('sistemadecadastro', 'root', 'root', {
            host: "localhost",
            dialect: 'mysql'
        });
        
        sequelize.authenticate().then(() => {
            console.log("Conectado ao banco!")
        }).catch((erro)=>{
            console.log("Algo deu errado! Erro: "+erro);
        });

server.listen(8080, () =>{
    console.log("Funcionando");
});