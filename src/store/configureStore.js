import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import expenseReduces from '../reduces/expenses';
import filterReduces from '../reduces/filters';
import thunk from 'redux-thunk';

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default()=>{
    const store=createStore(
        combineReducers({
            expenses:expenseReduces,
            filters:filterReduces
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
        return store;
}
