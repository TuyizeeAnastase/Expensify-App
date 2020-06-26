import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import expenseReduces from '../reduces/expenses';
import filterReduces from '../reduces/filters';
import authReduces from '../reduces/auth'


const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default()=>{
    const store=createStore(
        combineReducers({
            expenses:expenseReduces,
            filters:filterReduces,
            auth:authReduces
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
        return store;
}
