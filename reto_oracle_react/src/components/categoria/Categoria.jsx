import styles from './Categoria.module.css'
import { getCategoriasOracle } from "../../api/categoriaOracleApi"
import { useEffect, useState } from 'react'
import { CategoriaList } from '../categoriaList/CategoriaList'
import { useParams } from "react-router-dom";
import TextInput from '../textImput/TextInput';
import * as categoriaOracleApi from '../../api/categoriaOracleApi'
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {toast} from 'react-toastify'

export const Categoria = () => {

  let navigate = useNavigate();
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
    categoriaOracleApi.saveCategoriaOracle(categoria).then ( ()  =>{
      navigate("/", {replace: true});
      toast.success("Categoria Guardada!.")
    });
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
            placeholder='Nombre'
            id="nombre"
            name="nombre"
            value={categoria.nombre}
            onChange={handleChange}
          /> 


          <TextInput
            placeholder='Descripción'
            id="descripcion"
            name="descripcion"
            value={categoria.descripcion}
            onChange={handleChange}
          /> 


          {/* <select  
            className={styles.input}  
            id="colorSelect" 
            onchange={handleChange}
            id="color"
            name="color"
            value={categoria.color || "" }
          >
              <option value="">Rojo</option>
              <option value="1">Azul</option>
              <option value="2">Verde</option>
          </select> */}
          <input 
              className={styles.input} 
              placeholder='Color'
              id="color"
              type='text'
              name="color"
              value={categoria.color}
              onChange={handleChange}
          />

      <div className={styles.container__botones}>
          
          <div className={styles.container__botones__izq}>
            <button className={`${styles.container__botones__btn__active} ${styles.margin_btn} `} > Guardar </button>
            {/* <button className={styles.container__botones__btn} > Limpiar </button> */}
          </div>

      </div>
    
      </form>



   


      
    
    </div>
  )
}
