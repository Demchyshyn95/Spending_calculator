import {useDispatch} from "react-redux";
import {reset_all_expenses} from "../../Redux/actions";

const ResetAllExpenses = () => {
    const dispatch = useDispatch();

    const resetAllExpenses = () => {
        dispatch(reset_all_expenses());
    }


    return (
        <div>
            <button type="button" className="close" data-dismiss="modal"
                    onClick={ resetAllExpenses } aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default ResetAllExpenses;
