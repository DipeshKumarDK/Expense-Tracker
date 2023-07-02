import changeTotal from "./changeTotal";
import changeExpense from "./changeExpense"
import changeIncome from "./changeIncome"
import { combineReducers } from "redux";
import changeUser from "./changeUser";

const rootReducer = combineReducers({
    changeTotal,
    changeExpense,
    changeIncome,
    changeUser
})

export default rootReducer;