import React from "react";
import { useParams } from "react-router-dom";
import data from '../../data.json';

function StockDetail(props)
{
    const {id} = useParams();
    console.log(data.stocks);

    return (
        <div>
            <h2> detail </h2>
            <h4> {data.stocks[2].symbol} </h4>
            <h4> {id} </h4>
            <div>
            {data.stocks.map(stock => {
                if (stock.symbol === id)
                    return <h2> {stock.name} </h2>
                // why if statement not render
            })}
            </div>
        </div>
    )
}

export default StockDetail;