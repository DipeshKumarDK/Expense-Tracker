var retrievedObject = localStorage.getItem('expense_total');

const initialState = JSON.parse(retrievedObject);

const changeTotal = (state = initialState , action) => {
    switch(action.type){
        case "TOTAL": return action.total;
        default: return state;
    }
}

export default changeTotal; 