import React from 'react';
// import PropTypes from 'prop-types';

const CourseList= (props) => {

    debugger;
let { coursesJaime } = props;

    // console.log(variable);

    const mapper = () =>{
        // debugger;
        if(props.coursesJaime.lenght>0){
            props.variable.setState(false)
        }

        return props.coursesJaime.map( course => { //Mapeto de cada course en HTML
            return(//Objeto HTML
                <>
                    <tr key={course.id} >
                        <td  > { course.title } </td>
                        <td  > { course.authorId } </td>
                        <td  > { course.category } </td>
                    </tr>
                </>
            )
        }) 
    }

  return(
    <div>

        <table className='table' >

        <thead>
            <tr>
                <th>Title</th>
                <th>Author ID</th>
                <th>Category</th>
                {/* <th>{ props.variable }</th> */}
                
            </tr>
        </thead>
        <tbody>
            { mapper() }
        </tbody>
        </table>

    </div>
   )

 }


//  CourseList.propTypes= {
//     courses: PropTypes.array.arrayOf( PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         title: PropTypes.string.isRequired,
//         category: PropTypes.string.isRequired
//     })).isRequired
//  };

 export default CourseList;