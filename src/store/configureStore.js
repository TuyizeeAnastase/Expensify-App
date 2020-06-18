import {createStore,combineReducers} from 'redux';
import expenseReduces from '../reduces/expenses';
import filterReduces from '../reduces/filters';

export default()=>{
    const store=createStore(
        combineReducers({
            expenses:expenseReduces,
            filters:filterReduces
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
        return store;
}
