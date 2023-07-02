var retrievedObject = localStorage.getItem('expense_expense');

const initialState = JSON.parse(retrievedObject);

const changeExpense = (state = initialState , action) => {
    switch(action.type){
        case "CURREXPENSE": return action.expense;
        default: return state;
    }
}

export default changeExpense; 