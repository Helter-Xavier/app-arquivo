const express = require('express')
const app = express();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {
    eAdmin
} = require('./middleware/auth');

const User = require("./models/User");
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.use(express.json());

app.get('/', eAdmin, async (req, res) => {
    await User.findAll({
            attributes: ['id', 'name', 'email'],
            order: [
                ['id', 'DESC']
            ]
        })
        .then((users) => {
            return res.json({
                erro: false,
                users,
                id_usuario_logado: req.userId
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                message: "Erro: Nenhum usuario encontrado",
            });
        });
});

app.post('/cadastrar', async (req, res) => {
    var dados = req.body;
    dados.password = await bcrypt.hash(dados.password, 8);

    //cadastrar no banco de dados
    await User.create(dados)
        .then(() => {
            return res.json({
                erro: false,
                message: "Usuário cadastrado"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                message: "Erro:Usuário não foi cadastrado"
            });
        })
});


app.post('/login', async (req, res) => {

    const user = await User.findOne({
        attributes: ['id', 'name', 'email', 'password'],
        where: {
            email: req.body.email
        }
    });

    if (user === null) {
        return res.status(400).json({
            erro: true,
            message: "Erro: Usuario ou senha incorreto!"
        })
    }

    if (!(await bcrypt.compare(req.body.password, user.password))) {
        return res.status(400).json({
            erro: true,
            message: "Erro: Usuário ou senha incorreta! Senha incorreto"
        })
    }

    var token = jwt.sign({
        id: user.id
    }, "95d30169a59c418b52013315fc81bc99fdf0a7b03a116f346ab628496f349ed5", {
        expiresIn: '1d'
    })

    return res.json({
        erro: false,
        message: "Login realizado com sucesso",
        user: {
            id: user.id,
            name: user.name,
            userName: user.email,
        },
        token: token
    });
});


app.listen(8080, () => {
    console.log("Servido iniciado na porta 8080: http://localhost:8080")
});