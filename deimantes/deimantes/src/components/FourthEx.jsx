import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Square from "./Square";

const FourthEx = () => {
    const [square, setSquare] = useState([])

    const squareHandler= (ev) => {
        setSquare(...square, ev)
    }

    console.log(square)
    return (
        <>
        <Button onClick={squareHandler}>Add</Button>
        <div>
            {square.map((click, e) =>
            <Square 
            key={e}
            square={click.id}/>
            )}
        </div>
        </>
    );
}
 
export default FourthEx;