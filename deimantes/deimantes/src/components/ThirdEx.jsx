import React from "react";
import { useState } from "react";
import {Button} from 'react-bootstrap'


const  ThirdEx= () => {
    const [number, setNumber] = useState(0)

    const addHandler = () => {
        setNumber(number+1)
    }
    const minusHandler = () => {
        setNumber(number-3)
    }
    

    return (  
        <>
        <div style={{marginTop:'10px'}}>
        <Button variant="primary" onClick={addHandler}>Add</Button>
        <Button variant="danger" onClick={minusHandler}>Minus 3</Button>
        <p>{number}</p>
        </div>
        </>
    );
}
 
export default ThirdEx;