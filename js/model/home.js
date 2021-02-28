const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

const User = sequelize.define('User', {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

const express = require("express");
const server = express();
const router = express.Router();

server.use(express.json({extend: true}));
server.use(router);

server.listen(8080, () =>{
    console.log("Funcionando");
});