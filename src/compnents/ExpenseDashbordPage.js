import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseListItem from './ExpenseListItem';
const ExpenseDashbordPage=()=>(
    <div>
      <ExpenseListFilters/>
      <ExpenseList/>
    </div>
   );

   export default ExpenseDashbordPage;