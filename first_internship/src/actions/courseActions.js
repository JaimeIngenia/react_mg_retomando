import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi"
import actionTypes from './actionTypes';

export function saveCourse(course){
    return courseApi.saveCourse(course).then(savedCourse => {
        // Hey dispatcher , ve y dime todas las historias que un curso fue solamente creado
        dispatcher.dispatch({
            actionType: "CREATE_COURSE",
            course: savedCourse
        });
    })
}
