import styles from './Categoria.module.css'
import { getCategoriasOracle } from "../../api/categoriaOracleApi"
import { useEffect, useState } from 'react'

export const Categoria = () => {

  const [categorias,setCategorias] = useState([])


  useEffect( () => {
    getCategoriasOracle().then( _categorias => {
    setCategorias(_categorias)
  } )
  } ,[] )





  return (
    <div className={styles.container}>
      
      <div className={styles.titulo}>

        <h1>Nueva categoría</h1>

      </div>

      <form action="" className= {styles.container__form} >
          
          <input type='text' className={styles.input} placeholder='Nombre'/>

          <input type='text'  className={`${styles.input} ${styles.input__categoria}`} placeholder='Descripción'/>

          <select id="colorSelect" onchange="cambiarColor()">
              <option value="red">Rojo</option>
              <option value="blue">Azul</option>
              <option value="green">Verde</option>
          </select>
          <input type='text' className={styles.input} placeholder='Color'/>
         
          <input type='text' className={styles.input} placeholder='Código de seguridad'/>

      </form>

      <div className={styles.container__botones}>
          
          <div className={styles.container__botones__izq}>
            <button className={`${styles.container__botones__btn__active} ${styles.margin_btn} `} > Guardar </button>
            <button className={styles.container__botones__btn} > Limpiar </button>
          </div>

      </div>
    

      <table className={styles.container__table}>
        <thead>

          <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Editar</th>
              <th>Remover</th>
          </tr>

        </thead>


        <tbody>

          {categorias.map( (categoria) => {
            return(
              <>
                <tr key={categoria.id} >
                    <td>{categoria.nombre}</td>
                    <td>{categoria.descripcion}</td>
                    <td>{categoria.color}</td>
                    <td>{categoria.codigoSeguridad}</td>
                </tr>



                {/* <tr>
                    <td>Producto 1</td>
                    <td>Descripción del Producto 1</td>
                    <td>Editar</td>
                    <td>Remover</td>
                </tr> */}
              </>
            );
          } )}




        </tbody>

      </table>
    
    </div>
  )
}
