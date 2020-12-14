import {ADD_NEW_EXPENSE, REMOVE_EXPENSE_WITH_DATE, RESET_ALL_EXPENSES} from "../actions_types";

const initialState = {
    expenses: ''
}


export const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case ADD_NEW_EXPENSE: {
            document.getElementById('form').reset();

            const [date] = actions.payload.date.toString().split('T')
            const newExpenses = {...state.expenses};

            for (const key in newExpenses) {

                if (key === date) {

                    if (Array.isArray(newExpenses[date])) {
                        newExpenses[date].push(actions.payload);
                        return {...state, expenses: newExpenses}
                    }

                    const newArrExpenses = [];
                    const item = newExpenses[date];
                    newArrExpenses.push(item, actions.payload);
                    newExpenses[date] = newArrExpenses;

                    return {...state, expenses: newExpenses}
                }
            }
            newExpenses[date] = actions.payload
            return {...state, expenses: newExpenses}

        }

        case REMOVE_EXPENSE_WITH_DATE: {
            document.getElementById('form2').reset();

            const [date] = actions.payload.split('T');
            const newExpenses = {...state.expenses};

            for (const key in newExpenses) {
                if (key === date) {
                    delete newExpenses[key];
                    return {...state, expenses: newExpenses}
                }
            }

        }

        case RESET_ALL_EXPENSES: {
            return {...state, expenses: ''}
        }

        default:
            return state;
    }
}
