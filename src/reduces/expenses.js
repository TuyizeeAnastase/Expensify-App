const expenseReduceDefaultState=[];

export default (state=expenseReduceDefaultState,action)=>{
 switch(action.type){
    case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense,
        ];
    case 'REMOVE_EXPENSE':
        return state.filter(({id})=>id!==action.id );
    case 'EDIT_EXPENSE':
        return state.map((expenses)=>{
                    if(expenses.id===action.id){
                        return {
                            ...expenses,
                            ...action.updates
                        }
                    }
                    else{
                        return expenses
                    }
        });
    case 'SET_EXPENSE':
        return action.expenses
     default:
         return state;
 }
};