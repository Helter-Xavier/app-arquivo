const Sequelize = require('sequelize');

const sequelize = new Sequelize("celke", "root", "208199", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
    .then(() => {
        console.log("Conexão com banco de dados!")
    }).catch((erro) => {
        console.log("Erro na conexão com o banco de dados" + erro)
    })

module.exports = sequelize;