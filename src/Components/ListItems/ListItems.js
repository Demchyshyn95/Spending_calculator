import {useSelector} from "react-redux";
import Item from "../Item/Item";
import {currencyService} from "../../Services";
import {useEffect, useState} from "react";

const ListItems = () => {
    const expenses = useSelector(({expenses}) => expenses);
    const [totalPln, setTotalPln] = useState(0);
    const [showTotal, setShowTotal] = useState(true);


    const obj = Object.entries(expenses);

    const service = new currencyService();

    const get = async () => {
        setShowTotal(!showTotal);

        for (let key in expenses) {
            const obj = expenses[key];
            const isArray = Array.isArray(obj);
            if (isArray) {
                obj.forEach(el => {
                        const {money} = el;
                        const {valuta} = el;
                        getTotalPln(money, valuta)
                    }
                )
                continue;
            }
            const {money} = obj;
            const {valuta} = obj;
            getTotalPln(money, valuta,);
        }
    }

    const getTotalPln = async (money, valuta) => {

        const PLN = 'PLN';
        if (valuta === PLN) {
            setTotalPln(totalPln + (+money));
        return;
        }
        await setTotalPln(totalPln + (+await service.getEUR(money, valuta).then(res => res)));
    }

    const resetTotal = () => {
        setShowTotal(!showTotal);
        setTotalPln(0);
    }


    return (
        <div>
            {obj && obj.map(([key, value], i) => {
                return (
                    <div>
                        <strong>{key}</strong>
                        <Item value={value} key={i}/>
                        <hr/>
                    </div>
                );
            })}
            <div>{
                showTotal
                    ? <button className="btn-warning" onClick={get}>TotalPLN</button>
                    : <div>
                        <em>TOTAL_PLN : {totalPln}</em>
                        <button type="button" className="close" data-dismiss="modal"
                                onClick={resetTotal} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
            }

            </div>
        </div>
    )
}

export default ListItems;
