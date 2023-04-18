import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from "./Sidebar.module.css";

//Import Icons
import { FaHome } from "react-icons/fa";
import { BsFiles } from "react-icons/bs";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";


import usuario  from '../../assets/usuario.png';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.container}>
        <img src={ usuario } alt="Foto de Perfil" />
        <label>Nome de Usuário</label>
      </div>
      
        <nav>
          <NavLink to="/">
              <FaHome />
               <h1>Início</h1>
          </NavLink>

          <NavLink to="/arquivos">
              <BsFiles />
               <h1>Arquivos</h1>
          </NavLink>

          <NavLink to="/pastas">
              <AiTwotoneFolderOpen />
               <h1>Pastas</h1>
          </NavLink>

          <NavLink to="/NovoArquivo">
              <AiOutlinePlus />
               <h1>Novo</h1>
          </NavLink>
          
        </nav>
    </div>
  )
}

export default Sidebar;