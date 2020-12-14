const Item = ({value}) => {
    const isArray = Array.isArray(value);

    return (
        <div>
            {isArray ?
                value.map(el => (
                    <div>
                        <p>{el.expense}</p>
                        <p>{el.money} - {el.valuta}</p>
                    </div>
                ))
                :
                <div>
                    {value.expense} - {value.money} - {value.valuta}
                </div>
            }
        </div>
    )
}

export default Item;
