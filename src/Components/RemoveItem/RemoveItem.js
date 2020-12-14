import {useForm} from "react-hook-form";


const RemoveItem = ({ removeExpenseWithDate }) => {
    const { register, handleSubmit, errors } = useForm();


    return(
        <form id='form2' onSubmit={ handleSubmit(removeExpenseWithDate) }>
            <button type='submit' className="btn btn-danger">Remove with date</button>
            <input className="form-control col-8" type="datetime-local" ref={register({ required: true })}
                   name='date'  id="date"/>
            { errors.date && <p className='red'>This is required</p> }
        </form>
    )
}

export default RemoveItem;
