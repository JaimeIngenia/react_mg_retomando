import logoAlura from '../../assets/logoAlura.svg'
import styles from './NuevoVideo.module.css'

export const NuevoVideo = () => {
  return (
    <div className={styles.container} >

        <div className={styles.titulo}>

          <h1>Nuevo video</h1>

        </div>

        <form action="" className= {styles.container__form} >
          
          <input type='text' className={styles.input} placeholder='Título'/>

          <input type='text' className={styles.input} placeholder='Link del video'/>

          <input type='text' className={styles.input} placeholder='Link imagen del video'/>

          <input type='text' className={styles.input} placeholder='Escoja una categoría'/>

          <input type='text'  className={`${styles.input} ${styles.input__categoria}`} placeholder='Descripción'/>

          <input type='text' className={styles.input} placeholder='Código de seguridad'/>              

        </form>

        <div className={styles.container__botones}>
          
          <div className={styles.container__botones__izq}>
            <button className={`${styles.container__botones__btn__active} ${styles.margin_btn} `} > Guardar </button>
            <button className={styles.container__botones__btn} > Limpiar </button>
          </div>

          <div className={styles.container__botones__der}>
            <button className={styles.container__botones__btn__active} > Nueva Categoría </button>
          </div>

        </div>

        {/* <div className={styles.container__footer}>

          <div className={styles.linea__azul}></div>

          <div className={styles.div__logo__alura}>

            <img className={styles.logo__alura} src={logoAlura} alt="" />

          </div>

        </div> */}
        
        
         
        
        
        
        
    </div>
  )
}