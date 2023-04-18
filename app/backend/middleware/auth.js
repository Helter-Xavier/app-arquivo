//Authenticação de usuario
//Gerando jwt

const jwt = require('jsonwebtoken');
const {
    promisify
} = require('util');

module.exports = {
    eAdmin: async function (req, res, next) {
        const authHeaders = req.headers.authorization;
        // console.log(authHeaders);
        if (!authHeaders) {
            return res.status(400).json({
                erro: true,
                message: "Erro: Necessario realizar o login ara acessar a página! Fala o token A"
            });
        }

        const [bearer, token] = authHeaders.split(' ');
        console.log("bearer: " + bearer + " Token: " + token)

        if (!token) {
            return res.status(400).json({
                erro: true,
                message: "Erro: Necessario realizar o login ara acessar a página! Fala o token B"
            });
        }

        //Verificar se o token é valido
        try {
            const decode = await promisify(jwt.verify)(token, "95d30169a59c418b52013315fc81bc99fdf0a7b03a116f346ab628496f349ed5");
            req.userId = decode.id;
            return next();
        } catch (error) {
            return res.status(400).json({
                erro: true,
                message: "Erro: Necessario realizar o login ara acessar a página! Token invalido"
            });
        }
    }
}