import styles from './Categoria.module.css'

export const Categoria = () => {
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
              <option value="yellow">Amarillo</option>
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
          <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Editar</th>
              <th>Remover</th>
          </tr>
          <tr>
              <td>Producto 1</td>
              <td>Descripción del Producto 1</td>
              <td>Editar</td>
              <td>Remover</td>
          </tr>
          <tr>
              <td>Producto 2</td>
              <td>Descripción del Producto 2</td>
              <td>Editar</td>
              <td>Remover</td>
          </tr>
          <tr>
              <td>Producto 3</td>
              <td>Descripción del Producto 3</td>
              <td>Editar</td>
              <td>Remover</td>
          </tr>
      </table>
    
    </div>
  )
}
