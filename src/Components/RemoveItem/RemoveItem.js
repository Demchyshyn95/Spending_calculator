import {useForm} from "react-hook-form";


const RemoveItem = ({removeExpenseWithDate}) => {
    const {register, handleSubmit, errors} = useForm();

    return(
        <form id='form2' onSubmit={handleSubmit(removeExpenseWithDate)}>
            <button type='submit' className="btn btn-danger">Remove with date</button>
            <input className="form-control" type="datetime-local" ref={register({required: true})}
                   name='date'  id="date"/>
            {errors.date && <p>This is required</p>}

        </form>
    )
}

export default RemoveItem;
