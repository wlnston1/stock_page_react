import React from "react";
import data from '../../data.json';
import Stock from '../Stock';

function Home() {
    return (
        <div>
            {data.stocks.map(stock => {
                return <Stock key={stock.name} stock={stock}></Stock>
            })}
        </div>
    )
}

export default Home;