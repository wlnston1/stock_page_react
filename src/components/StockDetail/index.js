import React from "react";
import { useParams } from "react-router-dom";
import data from '../../data.json';

function StockDetail(props) {
    const { id } = useParams();
    console.log(data.stocks);
    // name: string;
    // symbol: string;
    // lastPrice: number;
    // change: number;
    // high: number;
    // low: number;
    // open: number;
    return (
        <div>
            <h2> Stock Details </h2>
            <div>
                {data.stocks.map(stock => {
                    if (stock.symbol === id)
                        return (
                            <div>
                                <h4>Name: {stock.name} </h4>
                                <h4>Symbol: {stock.symbol} </h4>
                                <h4>Last Price: {stock.lastPrice} </h4>
                                <h4>Stock Change: {stock.change} </h4>
                                <h4>High Limit: {stock.high} </h4>
                                <h4>Low Limit: {stock.low} </h4>
                                <h4>Open At: {stock.open} </h4>
                            </div>
                        )
                })}
            </div>
        </div>
    )
}

export default StockDetail;