// Imports
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import brasao from "../../assets/brasao.png";
import styles from "./Login.module.css";

const Login = () => {
  // Resgatadno autenticação e login do AuthContext
  const { login } = useContext(AuthContext);

  // Manipulando os states de email e senha
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Submit do login para entrar no sistema
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submit", { email, password});
    login(email, password); //Integração com o contexto e API
  };

  return (
    // Tela de login
    <div className={styles.logonFormWrap}>
      <div>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.logoTitle}>
            <img src={brasao} alt="imagem-logo" />
            <h1> PREFEITURA MUNICIPAL DE LIMEIRA </h1>
          </div>

          <div className={styles.inputs}>
            <label>
              Usuário:
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Senha:
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" className={styles.btnLogin} value="Acessar">
            Acessar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
