import React from "react";
import { Route, Link } from "react-router-dom";



function Stock({id, stock})
{
    return (
      <div>
         {/* <h3> {id} </h3> */}
         <Link to={`/stocks/${id}`}> {stock.name} </Link>
      </div>  
    );
}


export default Stock;