const Sequelize = require('sequelize');

//Conexão com o banco
const sequelize = new Sequelize('questapp', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("Conectado ao banco!")
}).catch((erro)=>{
    console.log("Algo deu errado! Erro: "+erro);
},

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
})