import React from 'react';
// import PropTypes from 'prop-types';

const CourseList= (props) => {
  return(
    <div>

        <table className='table' >

        <thead>
            <tr>
                <th>Title</th>
                <th>Author ID</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
            { props.coursesJaime.map( course => {
                return(
                    <>
                        <tr  >
                            <td  > { course.title } </td>
                            <td  > { course.authorId } </td>
                            <td  > { course.category } </td>
                        </tr>
                    </>
                )
            } ) }
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