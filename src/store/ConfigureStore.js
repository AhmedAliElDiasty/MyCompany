import {createStore, combineReducers , compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import AuthReducer from './Reducers/AuthReducer'
import EmployeeReducer from './Reducers/EmployeeReducer'

const rootReducer = combineReducers({
    authData:AuthReducer,
    empData: EmployeeReducer
});

let composeEnhancer = compose;
if(__DEV__){
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const configureStore = ()=>{
    return createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
};

export default configureStore;