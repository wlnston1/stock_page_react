import React from "react";
import data from '../../data.json';
import Stock from '../Stock';

function Home() {
    return (
        <div>
            {data.stocks.map(stock => {
                return <Stock id={stock.symbol} key={stock.symbol} stock={stock}></Stock>
            })}
        </div>
    )
}

export default Home;