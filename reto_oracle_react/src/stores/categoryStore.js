import {EventEmitter} from 'events';
import Dispatcher  from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = "change";
let _categories = [];

class categoryStore extends EventEmitter {

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback)
    }
    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback)
    }
    emitChange(){
        this.emit(CHANGE_EVENT)
    }
    getCategories(){
        return _categories;
    }
    getCategoryBySlug(slug){
        return _categories.find(course => course.codigoSeguridad === slug);
    }
}


const store = new categoryStore();

Dispatcher.register(action =>{
    switch(action.actionType){
        
        case actionTypes.DELETE_CATEGORY:
            _categories = _categories.filter(
                course => course.id !== parseInt(action.id , 10)
            );
            store.emitChange();
            break;

        case actionTypes.CREATE_CATEGORY:  
                _categories.push(action.category);
                store.emitChange();
            break;

        case actionTypes.UPDATE_CATEGORY:
            _categories = _categories.map( course => course.id === action.category.id ? action.category : course );
            store.emitChange();
            break;


        case actionTypes.LOAD_CATEGORIES:
            _categories = action.categories;
            store.emitChange();
            break;
        default:
            // no poner nada aqui
    }   
})

export default store;