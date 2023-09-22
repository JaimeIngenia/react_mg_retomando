import React from 'react'
import styles from './CategoriaList.module.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const CategoriaList
 = (props) => {
  return(

    <table className={styles.container__table}>
    <thead>

    <tr>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Color</th>
        <td> &nbsp; </td>
        {/* <th>Código de Seguridad</th> */}
    </tr>

    </thead>


    <tbody>

    {props.categorias.map( (categoria) => {
        return(
        <>
            <tr key={categoria.id} >
                <td>
                    <Link to={"/categoriasOracle/" + categoria.codigoSeguridad } > {categoria.nombre} </Link>
                    
                </td>
                <td>{categoria.descripcion}</td>
                <td>{categoria.color}</td>

                <td>
                    <button
                        className='btn btn-outline-danger'
                        onClick={ () => props.deleteCategory(categoria.id) }
                    >
                    Delete
                    </button>
                </td>
                
                {/* <td>{categoria.codigoSeguridad}</td> */}
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

   )
  }



CategoriaList.propTypes = {
deleteCourse: PropTypes.func.isRequired,
categorias: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    nombre: PropTypes.string.isRequiered,
    descripcion: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    // codigoSeguridad: PropTypes.string.isRequired
})).isRequired
  }