import React from 'react'
import TextInput from './TextInput'
import PropTypes from 'prop-types';

export const CourseForm  = (props) => {
  return(
    <>

    <form onSubmit={props.onSubmit} >

      <TextInput
        id="title"
        label="Title"
        onChange={props.onChange}
        name='title'
        value={props.courseAndres.title}
        error={props.errors.title}
      />

      <div className="form-group">
      
      
       
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
           
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.courseAndres.authorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>

        {props.errors.authorId && (
          <div className='alert alert-danger' > {props.errors.authorId}</div>
        )}

      </div>




      <TextInput
        id="category"
        label="Category"
        onChange={props.onChange}
        name='category'
        value={props.courseAndres.category}
        error={props.errors.title}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
        
    </>
   )

 }

 CourseForm.propTypes= {

    course: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
  
 };