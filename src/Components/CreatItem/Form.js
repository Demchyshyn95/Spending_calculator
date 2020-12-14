import React from "react";
import {useForm} from "react-hook-form";

const CreateItem = ({addNew}) => {
    const {register, handleSubmit, errors} = useForm();

    return (
        <div>
            <form className="w-100" id='form' onSubmit={handleSubmit(addNew)}>
                <div className="form-group">
                    <input type="text" className="form-control" name='expense' ref={register({required: true})}
                           aria-describedby="emailHelp"
                           placeholder="Enter your expenses ..."/>
                </div>

                {errors.expense && <p>This is required</p>}


                <div className="form-group col-xs-2">
                    <input type="number" name="money" ref={register({required: true})}
                           placeholder="Enter your money..."/>
                </div>

                {errors.money && <p>This is required</p>}

                <div className="form-check-inline">
                    <input type="radio" className="form-check-input" value="USD" ref={register({required: true})}
                           name="valuta"/>USD
                </div>

                <div className="form-check-inline">
                    <input type="radio" className="form-check-input" ref={register({required: true})} value="EUR"
                           name="valuta"/>EUR
                </div>

                <div className="form-check-inline disabled">
                    <input type="radio" className="form-check-input" ref={register({required: true})} value="PLN"
                           name="valuta"/>PLN
                </div>

                {errors.valuta && <p>This is required</p>}

                <div className="form-group row">
                    <div className="col-10">
                        <input className="form-control" type="datetime-local" ref={register({required: true})}
                               name='date'
                              />
                    </div>
                </div>

                {errors.date && <p>This is required</p>}

                <button type="submit" className="btn btn-success">Add</button>
            </form>

        </div>
    );
}
export default CreateItem;
