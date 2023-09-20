import React from 'react'
import styles from './Header.module.css'
import logoAlura from '../../assets/logoAlura.svg'
import HeaderNav from '../header_nav/HeaderNav'

 const Header = (props) => {
  return(
    <div className={styles.container}>

        <div className={styles.header__nuevo__video}>

            <img className={styles.logo__alura} src={logoAlura} alt="" />


            <div className={styles.nav}>
                    <HeaderNav className={styles.navHijo} />
            </div>
        </div>


        <div className={styles.linea__azul}></div>

    </div>
   )
  }

  export default Header;