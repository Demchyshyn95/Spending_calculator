import { ADD_NEW_EXPENSE, REMOVE_EXPENSE_WITH_DATE, RESET_ALL_EXPENSES } from "../actions_types";

export const addNewExpense = (payload) => ({ type:ADD_NEW_EXPENSE,payload });
export const remove_expense_with_date = (payload) => ({ type:REMOVE_EXPENSE_WITH_DATE,payload });
export const reset_all_expenses = () => ({ type: RESET_ALL_EXPENSES });
