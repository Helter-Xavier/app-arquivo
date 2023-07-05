//User Authentication
//JWT
const jwt = require('jsonwebtoken');
const {
    promisify
} = require('util');

//Export JWT
module.exports = {
    eAdmin: function (req, res, next) {
        const authHeaders = req.headers.authorization;
        if (!authHeaders) {
            return res.status(400).json({
                erro: true,
                message: "Erro: Necessario realizar o login para acessar a página!"
            });
        }

        const [bearer, token] = authHeaders.split(' ');
        console.log("bearer: " + bearer + " Token: " + token)

        if (!token) {
            return res.status(400).json({
                erro: true,
                message: "Erro: Necessario realizar o login para acessar a página!"
            });
        }
        //if valid TOKEN
        try {
            const decode = promisify(jwt.verify)(token, "95d30169a59c418b52013315fc81bc99fdf0a7b03a116f346ab628496f349ed5");
            req.userId = decode.id;
            return next();
        } catch (error) {
            return res.status(400).json({
                erro: true,
                message: "Erro: Necessario realizar o login para acessar a página!"
            });
        }
    }
}
