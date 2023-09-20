import styles from './Categoria.module.css'
import { getCategoriasOracle } from "../../api/categoriaOracleApi"
import { useEffect, useState } from 'react'
import { CategoriaList } from '../categoriaList/CategoriaList'
import { useParams } from "react-router-dom";
import TextInput from '../textImput/TextInput';
import * as categoriaOracleApi from '../../api/categoriaOracleApi'

export const Categoria = () => {

  let {codigoSeguridad} = useParams();

  const [ categoria, setCategoria ] = useState({
    id: null,
    codigoSeguridad: "",
    nombre: "",
    descripcion: "",
    color: ""

  })


  function handleChange(event){
    const updateCourse = { ...categoria , [ event.target.name ]: event.target.value }
    setCategoria(updateCourse);
  }

  function handleSubmit(event){
    event.preventDefault();
    categoriaOracleApi.saveCategoriaOracle(categoria)
  }
  

  return (
    <div className={styles.container}>
      
      <div className={styles.titulo}>

        <h1>Nueva categoría</h1>

      </div>

      <h1>{ codigoSeguridad }</h1>

      <form 
        action="" 
        className= {styles.container__form} 
        onSubmit={handleSubmit}
        >
          

          <TextInput
            // className={styles.input}
            placeholder='Nombre'
            // label='nombre'
            id="nombre"
            // type='text'
            name="nombre"
            value={categoria.nombre}
            onChange={handleChange}

          /> 

          {/* <input 
            className={styles.input}
            placeholder='Nombre'
            id="nombre"
            type='text'
            name="nombre"
            value={categoria.nombre}
            onChange={handleChange}
            /> */}


          <input 
              className={`${styles.input} ${styles.input__categoria}`} 
              placeholder='Descripción'
              id="descripcion"
              type='text'
              name="descripcion"
              value={categoria.descripcion}
              onChange={handleChange}
            />

          <select id="colorSelect" onchange="cambiarColor()">
              <option value="red">Rojo</option>
              <option value="blue">Azul</option>
              <option value="green">Verde</option>
          </select>
          <input 
              className={styles.input} 
              placeholder='Color'
              id="color"
              type='text'
              name="color"
              value={categoria.color}
              onChange={handleChange}
          />


         
          {/* <input type='text' className={styles.input} placeholder='Código de seguridad'/> */}

      <div className={styles.container__botones}>
          
          <div className={styles.container__botones__izq}>
            <button className={`${styles.container__botones__btn__active} ${styles.margin_btn} `} > Guardar </button>
            <button className={styles.container__botones__btn} > Limpiar </button>
          </div>

      </div>
    
      </form>



   


      
    
    </div>
  )
}
