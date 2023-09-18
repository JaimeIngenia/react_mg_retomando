import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi"
import actionTypes from './actionTypes';

export function saveCourse(course){
    return courseApi.saveCourse(course).then(savedCourse => {
        // Hey dispatcher , ve y dime todas las historias que un curso fue solamente creado
        dispatcher.dispatch({
            actionType: course.id
                ? actionTypes.UPDATE_COURSE 
                : actionTypes.CREATE_COURSE,
            course: savedCourse
        });
    });
}

export function loadCourses(){
    return courseApi.getCourses().then(courses => {
        dispatcher.dispatch({
            actionType: "LOAD_COURSES",
            courses: courses
        });
    })
}