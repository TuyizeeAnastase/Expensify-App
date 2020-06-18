import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';

const addExpense=(
    {
        description='',
        note='',
        amount=0,
        createAt=0
    }={})=>({
    type:'ADD_EXPENSE',
    expenses:{
        id:uuid(),
        description,
        note,
        amount,
        createAt,
    }
    
});
const removeExpense=({id}={})=>({
      type:'REMOVE_EXPENSE',
      id,
});

const editExpense=(id,updates)=>(
    {
        type:'EDIT_EXPENSE',
        id,
        updates
    }
);
const setTextFilter=(text='')=>(
    {
       type:'SET_TEXT',
       text    
    }
);
const sortByAmount=()=>(
    {
        type:'SORT_BY_AMOUNT'
    }
);
const sortByDate=()=>(
    {
        type:'SORT_BY_DATE'
    }
);
const setStartDate=(date)=>(
    {
        type:'SET_START_DATE',
        date
    }
);
const setEndDate=(date)=>(
    {
        type:'SET_END_DATE',
        date
    }
);
const expenseReduceDefaultState=[];
const expenseReduces=(state=expenseReduceDefaultState,action)=>{
 switch(action.type){
    case 'ADD_EXPENSE':
        return [
            ...state,
            action.expenses,
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
        })
     default:
         return state;
 }
};
const filterReducersDefaultState={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};
const filterReduces=(state=filterReducersDefaultState,action)=>{
   switch(action.type){
       case 'SET_TEXT':
           return {
               ...state,
               text:action.text
           }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'amount'
            }
            case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy:'date'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.date
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate:action.date
            }
       default:
           return state;
   }
};

const getVisibleExpense=(expenses,{text,sortBy,startDate,endDate})=>{
   return expenses.filter((expense)=>{
        const startDateMatch=typeof startDate!=='number'||expense.createAt>+startDate;
        const endDateMatch=typeof endDate!=='number'|| expense.createAt<=endDate;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
   }).sort((a,b)=>{
       if(sortBy=='date'){
           return a.createAt<b.createAt?1:-1;
       }
       else if(sortBy=='amount'){
           return a.amount<b.amount?1:-1;
       }
   });
};
const store=createStore(
    combineReducers({
        expenses:expenseReduces,
        filters:filterReduces
    }));

store.subscribe(()=>{
    const state=store.getState();
    const visibleExpense=getVisibleExpense(state.expenses,state.filters);
    console.log(visibleExpense);
    });

const expense1=store.dispatch(addExpense({description:'Rent',amount:500,createAt:-21000}));
const expense2=store.dispatch(addExpense({description:'Coffee',amount:300,createAt:-1000}));

// store.dispatch(removeExpense({id:expense1.expenses.id}));
// store.dispatch(editExpense(expense2.expenses.id,{amount:500}));

// store.dispatch(setTextFilter('coffee'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(2345));

const demoState={
    expenses:[{
        id:'fjjjdjgg',
        description:'January rent',
        note:'This was final payment for that adress',
        amount:4567,
        createAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
};
