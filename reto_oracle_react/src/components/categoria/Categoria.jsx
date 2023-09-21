import styles from './Categoria.module.css'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import TextInput from '../textImput/TextInput';
// import * as categoriaOracleApi from '../../api/categoriaOracleApi'
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {toast} from 'react-toastify'
import PropTypes from 'prop-types';
import categoryStore from '../../stores/categoryStore'
import * as categoryActions from '../../actions/categoryActions'


export const Categoria = (props) => {

  let navigate = useNavigate();
  let {codigoSeguridad} = useParams();

  const [ errors ,setErrors ] = useState({})
const [ categorias , setCategorias ] = useState(  categoryStore.getCategories());
  const [ categoria, setCategoria ] = useState({
    id: null,
    codigoSeguridad: "",
    nombre: "",
    descripcion: "",
    color: ""

  })


  useEffect( () => {

    categoryStore.addChangeListener(onChange);
    if(categorias.length === 0){
      categoryActions.loadCategories();
    }
    else if (codigoSeguridad){
        setCategoria( categoryStore.getCategoryBySlug(codigoSeguridad) ) 
    } 

    return () => categoryStore.removeChangeListener(onChange);

    // if (codigoSeguridad){
    //   categoriaOracleApi.getCategoriaOracleBySlug(codigoSeguridad).then( 
    //     _categoria => setCategoria(_categoria) 
    //     )
    // } 
    
    },[  categorias.length ,codigoSeguridad ] )

    function onChange (){
      setCategorias(categoryStore.getCategories());
    }


  function handleChange(event){
    const updateCourse = { ...categoria , [ event.target.name ]: event.target.value }
    setCategoria(updateCourse);
  }

  function formIsValid () {
    const _errors = {};

    if( !categoria.nombre) _errors.nombre = "nombre es requerida"
    if( !categoria.descripcion) _errors.descripcion= "descripcion es requerida"
    if( !categoria.color) _errors.color= "color es requerida"
    setErrors(_errors);
    return Object.keys(_errors).length === 0; 
  }

  function handleSubmit(event){
    event.preventDefault();

    if(!formIsValid() ) return;

    categoryActions.saveCategory(categoria).then ( ()  =>{
      navigate("/", {replace: true});
      toast.success("Categoria Guardada!.")
    });

    // categoriaOracleApi.saveCategoriaOracle(categoria).then ( ()  =>{
    //   navigate("/", {replace: true});
    //   toast.success("Categoria Guardada!.")
    // });


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
            error={errors.nombre}
          /> 


          <TextInput
            placeholder='Descripción'
            id="descripcion"
            name="descripcion"
            value={categoria.descripcion}
            onChange={handleChange}
            error={errors.descripcion}
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
          </select> 
          {errors.color && (
            <div className="alert alert-danger"> {errors.color}</div>
          )}
          */}

          <TextInput
            placeholder='Color'
            id="color"
            name="color"
            value={categoria.color}
            onChange={handleChange}
            error={errors.color}
          /> 


          {/* <input 
              className={styles.input} 
              placeholder='Color'
              id="color"
              type='text'
              name="color"
              value={categoria.color}
              onChange={handleChange}
              error={errors.color}
          /> */}

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


Categoria.protoTypes = {
  categoria: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,

}