import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/appRouter.js';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filter';
import getVisibleExpense from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store=configureStore();


store.dispatch(addExpense({description:'Gas Bill',amount:457}));
store.dispatch(addExpense({description:'Water Bill',createAt:1000}));
store.dispatch(addExpense({description:'Rent Bill',amount:10500}));


const state=store.getState();
const visibleExpense=getVisibleExpense(state.expenses,state.filters);
console.log(visibleExpense);

//console.log(store.getState());
const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));