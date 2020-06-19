import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseListItem from './ExpenseListItem';
import ExpenseSummary from './expenses-summary';
const ExpenseDashbordPage=()=>(
    <div>
      <ExpenseSummary/>
      <ExpenseListFilters/>
      <ExpenseList/>
    </div>
   );

   export default ExpenseDashbordPage;