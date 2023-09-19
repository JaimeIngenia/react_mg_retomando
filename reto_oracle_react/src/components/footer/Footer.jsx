import React from 'react'
import logoAlura from '../../assets/logoAlura.svg'
import styles from './Footer.module.css'


const Footer = (props) => {
return(

    <div className={styles.container}>

        <div className={styles.container__footer}>

            <div className={styles.linea__azul}></div>
            <br />

            <div className={styles.div__logo__alura}>

                <img className={styles.logo__alura} src={logoAlura} alt="" />

            </div>

        </div>
    </div>
)
}


  export default Footer;