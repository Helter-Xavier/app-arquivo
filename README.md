# Gerenciador de Arquivos

## Link do projeto _[Gerenciador de Arquivos](https://github.com/Helter-Xavier/app-arquivo)_.

### Setup de ambiente:

- [Node LTS](https://nodejs.org/en)
- [Npm 9.5.0](https://docs.npmjs.com/cli/v6/commands/npm-install)
- [React](https://react.dev/)

### Estrutura de pastas

![alt text](./estrutura_de_pasta.png)

### Como rodar a API

- _npm start_
- API rodando na porta http://localhost:8080
- Pronto 🎉

```js
app.listen(8080, () => {
  console.log("Servido iniciado na porta 8080: http://localhost:8080");
});
```

### Conexão como Banco de dados MySQL Workbench:

- Arquivo: db.js

#### Dependencias utilizadas:

- [Sequelize 6.31.0](https://sequelize.org/)

```js
//import sequilize
const Sequelize = require("sequelize");

//Conection databse  ("namedv", "user Workbench", "password user")
const sequelize = new Sequelize("...", "...", "...", {
  host: "localhost", //Execcting in localhost
  dialect: "mysql", //
  logging: false,
});

//Send Message
sequelize
  .authenticate()
  .then(function () {
    console.log("Conexão com banco de dados!");
  })
  .catch(function (erro) {
    console.log("Erro na conexão com o banco de dados" + erro);
  });

//export
module.exports = sequelize;
```

## Criação da tabela de usuarios

- Localização: `backend/models/Users.js`


## Autenticação de usuario e Senha criptografada

- Localização: '_backend/middleware/auth.js_'

### Rota de Registro de usuário

```js
app.post("/register", async (req, res) => {
  var dados = req.body;
  dados.password = await bcrypt.hash(dados.password, 6);

  await Users.create(dados)
    .then(() => {
      return res.json({
        mensagem: "Usuário cadastrado com sucesso!",
      });
    })
    .catch(() => {
      return res.status(400).json({
        mensagem: "Erro: Usuário não cadastrado com sucesso!",
      });
    });
});
```

## Autenticação de usuario e Senha criptografada

- Localização: `backend/middleware/uploadIamge.js`

### Rota de Upload de documentos PDF

```js
app.post("/upload-docs", uploadDocs.single("image"), (req, res) => {
  //Registrando no banco de dados
  if (req.file) {
    Docs.create({
      name: req.body.name,
      documentType: req.body.documentType,
      documentCode: req.body.documentCode,
      documentCpf: req.body.documentCpf,
      documentRg: req.body.documentRg,
      documentDate: req.body.documentDate,
      image: req.file.filename,
    })
      .then(() => {
        return res.json({
          mensagem: "Upload realizado com sucesso!",
        });
      })
      .catch(() => {
        return res.status(400).json({
          mensagem: "Erro: Upload não realizado!",
        });
      });
  }
});
```

## Lista de Rotas implementadas no Sistema

- `/` -> Main
- `/register` -> Cadastro de usuários
- `/listUsers` -> Listagem de Usuários e implementação da Páginação das tabelas no Front-End
- `/vizualizar-usuario/:id` -> Vizualizar usuário pelo ID quando selecionado
- `/edit-user/:id` -> Editar usuário com o ID seleionado
- `/deleteUsers/:id` -> Apagar usuário do sistema pelo ID selecionado
- `/login` -> Login com email e Senha(Senha criptografada)
- `/upload-docs` -> Upload de documentos tipo PDF
- `/list-files` -> Listagem dos documentos
- `/vizualizar-documento/:id` -> Vizualizar documento pelo ID quando selecionado
- `/list-prontuario` -> Apagar documento do sistema pelo ID selecionado
- `/deleteFiles/:id` -> Listagem de tipo de documento (Prontuarios)
