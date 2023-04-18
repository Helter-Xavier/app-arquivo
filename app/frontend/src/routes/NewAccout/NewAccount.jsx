// import { useState } from "react";
import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./NewAccount.module.css";
import axios from "axios";

const schema = yup
  .object({
    name: yup.string().required("Esse campo é obrigatório"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 digitos")
      .required("A senha é obrigatório"),
  })
  .required();

const NewAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //Envio de dados para o banco
  const onSubmit = (data) =>
    axios
      .post("http://localhost:8080/cadastrar", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((erro) => {
        console.log(erro, "erro");
      });

  return (
    <div>
      <Navbar />
      <div className={styles.AddConta}>
        <Sidebar />
        <div className={styles.container}>
          <form className={styles.formConta} onSubmit={handleSubmit(onSubmit)}>
            <h1>Adicionar nova conta</h1>

            <div className={styles.containerInputs}>
              <label>
                Nome:
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nome Completo"
                  // onChange={(e) => setEmail(e.target.value)}
                  {...register("name", { required: true })}
                />
                <p>{errors.name?.message}</p>
              </label>

              <label htmlFor="email">
                E-mail:
                <input
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  // onChange={(e) => setEmail(e.target.value)}
                  {...register("email", { required: true })}
                />
                <p>{errors.email?.message}</p>
              </label>

              <label htmlFor="password">
                Senha:
                <input
                  type="password"
                  name="password"
                  placeholder="Senha"
                  // onChange={(e) => setPassword(e.target.value)}
                  {...register("password", { required: true })}
                />
                <p>{errors.password?.message}</p>
              </label>
            </div>
            <button
              type="submit"
              className={styles.btnCadastrar}
              value="Acessar"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAccount;
