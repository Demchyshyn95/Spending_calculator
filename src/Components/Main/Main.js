import Form from "../CreatItem/Form";
import {useDispatch} from "react-redux";
import {addNewExpense, remove_expense_with_date } from "../../Redux/actions";
import RemoveItem from "../RemoveItem/RemoveItem";
import ListItems from "../ListItems/ListItems";


const Main = () => {
    const dispatch = useDispatch();

    const addNew = (data) => {
        dispatch(addNewExpense(data));

    }
    const removeExpenseWithDate = () => {
        const data = document.getElementById('date').value;

        dispatch(remove_expense_with_date(data))
    }

    return (
        <div>
            <Form addNew={addNew}/>
            <RemoveItem removeExpenseWithDate={removeExpenseWithDate}/>
            <ListItems/>
        </div>
    )
}


export default Main;
