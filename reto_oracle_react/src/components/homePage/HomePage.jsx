import React from 'react'
import styles from './HomePage.module.css'
import fondo_home from '../../assets/fondo_home.svg'
import foto_principal from '../../assets/foto_principal.svg'

const HomePage = (props) => {
    return(
        <div className={styles.container}>

            <div className={styles.container_imagen}>
                <div className={styles.container_imagen__izq}>
                        <button  >FRONT END</button>
                        <br />
                        <h3  >Challange react</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore corporis ad cum enim! Quibusdam pariatur quos nobis consequatur molestias sit natus veritatis, omnis debitis cum consequuntur! Vero similique consequuntur repellendus?</p>
                </div>

                <div className={styles.container_imagen__der}>
                    <img src={foto_principal} alt="" />
                </div>

            </div>
        </div>
)
}

export default HomePage