import React from 'react'
import styles from './Header.module.css'
import logoAlura from '../../assets/logoAlura.svg'

 const Header = (props) => {
  return(
    <div className={styles.container}>

        <div className={styles.header__nuevo__video}>

            <img className={styles.logo__alura} src={logoAlura} alt="" />


        </div>

        <div className={styles.linea__azul}></div>

    </div>
   )
  }

  export default Header;