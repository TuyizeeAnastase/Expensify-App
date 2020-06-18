import {addExpense,editExpense,removeExpense} from '../../actions/expenses';

test('should remove expense',()=>{
    const action=removeExpense({id:'a123'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'a123'
    });
});

test('should edit expense',()=>{
    const action=editExpense('as123','rent');
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'as123',
        updates:'rent'
    });
});