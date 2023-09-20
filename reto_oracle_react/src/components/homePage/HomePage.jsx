import React from 'react'
import styles from './HomePage.module.css'
import fondo_home from '../../assets/fondo_home.svg'
import foto_principal from '../../assets/foto_principal.svg'
import { getCategoriasOracle } from "../../api/categoriaOracleApi"
import { useEffect, useState } from 'react'
import { CategoriaList } from '../categoriaList/CategoriaList'


const HomePage = (props) => {

    const [categorias,setCategorias] = useState([])


    useEffect( () => {
      getCategoriasOracle().then( _categorias => {
      setCategorias(_categorias)
    } )
    } ,[] )
  
  
  
  

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
            <br /><br />

            <CategoriaList categorias={categorias}  />

        </div>
)
}

export default HomePage