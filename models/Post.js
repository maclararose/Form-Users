const db = require('./db');

const Post = db.sequelize.define('users', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    password: {
        type: db.Sequelize.STRING
    }
})

module.exports = Post

// Recria tabela já existente
//Post.sync({force: true});