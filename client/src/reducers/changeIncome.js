var retrievedObject = localStorage.getItem('expense_income');

const initialState = JSON.parse(retrievedObject);

const changeIncome = (state = initialState , action) => {
    switch(action.type){
        case "CURRINCOME": return action.income;
        default: return state;
    }
}

export default changeIncome; 