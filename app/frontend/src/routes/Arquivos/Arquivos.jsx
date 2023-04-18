import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

import styles from './Arquivos.module.css'

const Arquivos = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.arquivo}>
        <Sidebar />
        <div className={styles.container}>
        <h1>Arquivo</h1>

      </div>
      </div>
    </div>
  )
}

export default Arquivos