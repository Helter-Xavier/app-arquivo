//import sequilize  
const Sequelize = require('sequelize');

//Conection databse  ("nomebd", "usuario", "senha usuario root")
const sequelize = new Sequelize("...", "...", "...", {
    host: "localhost", //Execcting in localhost
    dialect: "mysql", //
    logging: false
});

//Send Message
sequelize.authenticate()
    .then(function () {
        console.log("Conexão com banco de dados!")
    }).catch(function (erro) {
        console.log("Erro na conexão com o banco de dados" + erro)
    })

//export
module.exports = sequelize;
