import React from 'react';
import styles from './TextInput.module.css';
import PropTypes from 'prop-types';

const TextInput = (props) => {

    let wrapperClass = "form-group";

    if( props.error.length > 0 ){
        wrapperClass += "has-error";
    }


    return(
        < div className={wrapperClass} >   
        {/* <label htmlFor={props.id} > {props.label} </label>  */}
            <input 
                className={styles.input}
                placeholder={props.placeholder}
                id={props.id}
                type='text'
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
            {
                props.error && <div className='alert alert-danger'> {props.error} </div>
            }
        </ div>
    )
}


TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
}

TextInput.defaultProps = {
    error: ""
}

export default TextInput