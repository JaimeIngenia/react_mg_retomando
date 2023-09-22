import dispatcher from "../appDispatcher";
import * as categoriaOracleApi from '../api/categoriaOracleApi'
import actionTypes from './actionTypes';

export function saveCategory(category){
    return categoriaOracleApi.saveCategoriaOracle(category).then(savedCategory => {
        // Hey dispatcher , ve y dime todas las historias que un curso fue solamente creado
        dispatcher.dispatch({
            // actionType: actionTypes.CREATE_CATEGORY,
            actionType: category.id
                ? actionTypes.UPDATE_CATEGORY 
                : actionTypes.CREATE_CATEGORY,
            category: savedCategory  // En esta parte se hizo la primera acción
        });
    });
}

export function loadCategories(){
    return categoriaOracleApi.getCategoriasOracle().then(courses => {
        dispatcher.dispatch({
            actionType: "LOAD_CATEGORIES",
            categories: courses
        });
    })
}

export function deleteCategory(id){
    return categoriaOracleApi.deleteCategoriaOracle(id).then( () => {
        dispatcher.dispatch({
            // actionType: actionTypes.DELETE_CATEGORY,
            actionType: "DELETE_CATEGORY",
            id: id
        });
    });
}