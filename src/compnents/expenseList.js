import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectors from '../selectors/expenses';


const ExpenseList=(props)=>(
    <div className="content-container">
    <div className="list-header">
    <div className="shown-for-mobile">Expenses</div>
    <div className="shown-for-desktop">Expenses</div>
    <div className="shown-for-desktop">Amount</div>
    </div>
    <div className="list-body">
    { props.expenses.length===0?(
        <div className="list-item list-item--message">
        <span>No expenses</span>
        </div>):(
        props.expenses.map((expense)=>{
        return <ExpenseListItem key={expense.id} {...expense}/>;
    })
        )}
        </div>
    </div>
);
const mapStateToProps=(state)=>{
    return {
           expenses:selectors(state.expenses,state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

