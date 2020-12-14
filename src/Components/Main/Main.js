import {useDispatch} from "react-redux";
import {addNewExpense, remove_expense_with_date } from "../../Redux/actions";
import RemoveItem from "../RemoveItem/RemoveItem";
import ListItems from "../ListItems/ListItems";
import CreateItem from "../CreatItem/CreateItem";


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
        <div className="w-75">
            <CreateItem addNew={ addNew }/>
            <hr/>
            <RemoveItem removeExpenseWithDate={ removeExpenseWithDate }/>
            <hr/>
            <ListItems/>
        </div>
    )
}


export default Main;
