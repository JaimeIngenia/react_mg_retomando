import React from 'react'


export const CourseForm  = (props) => {
  return(
    <>

    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            onChange={props.onChange}
            id="title"
            type="text"
            name="title"
            className="form-control"
            value={props.courseAndres.title}
          />
        </div>
      </div>

      <div className="form-group">
      
      
        onChange={props.omChange}
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
      </div>

      <div className="form-group">
        
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            onChange={props.onChange}
            type="text"
            id="category"
            name="category"
            className="form-control"
            value={props.courseAndres.category}
          />
        </div>
      </div>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
        
    </>
   )

 }