import {useSelector} from "react-redux";
import Item from "../Item/Item";
import {currencyService} from "../../Services";
import {useEffect, useState} from "react";
import s from './listItems.module.css'
import ResetAllExpenses from "../ResetAllExpenses/ResetAllExpenses";

const ListItems = () => {

    const expenses = useSelector(({ expenses }) => expenses);
    const [totalPln, setTotalPln] = useState(0);
    const [showTotal, setShowTotal] = useState(true);

    const obj = Object.entries(expenses);
    const service = new currencyService();

    const getTotalPln = async () => {
        setShowTotal(!showTotal);
        let suma = 0;

        for (let key in expenses) {

            const obj = expenses[key];
            const isArray = Array.isArray(obj);
            if (isArray) {

                for (const el of obj) {
                    const { money } = el;
                    const { valuta } = el;
                    suma += (+await getPln(money, valuta));
                }
                continue;
            }
            const { money } = obj;
            const { valuta } = obj;
            suma += (+await getPln(money, valuta,));
        }
        setTotalPln(suma.toFixed(2));
    }

    const getPln = async (money, valuta) => {
        const PLN = 'PLN';

        if (valuta === PLN) {
            return money;
        }

        const newPln = await service.getEUR(money, valuta).then(res => res);
        return newPln;
    }

    const resetTotal = () => {
        setShowTotal(!showTotal);
        setTotalPln(0);
    };


    return (
        <div>
            { expenses && <ResetAllExpenses/> }
            { obj && obj.map(([key, value]) => {
                return (
                    <div>
                        <strong>{key}</strong>
                        <Item value={value} key={key}/>
                        <hr/>
                    </div>
                );
            }) }
            <div>
                {
                    expenses ?
                        (
                            showTotal
                                ? <button className="btn-warning" onClick={ getTotalPln }>TotalPLN</button>
                                : <div>
                                    <em>total PLN : { totalPln }</em>
                                    <button type="button" className="close" data-dismiss="modal"
                                            onClick={resetTotal} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                        )
                        : ''
                }
            </div>
        </div>
    )
}

export default ListItems;
