export const changeTotal = (total) => {
    return{
        type:"TOTAL",
        total:total
    }
}

export const changeIncome = (income) => {
    return{
        type:"CURRINCOME",
        income:income
    }
}

export const changeExpense = (expense) => {
    return{
        type:"CURREXPENSE",
        expense:expense
    }
}

export const changeUser = (user) => {
    return{
        type:"CURRUSER",
        user:user
    }
}
