import { useState } from 'react';
import Shapes from './Shapes';

function FirstEx() {
    const [form, setForm] =useState({
      color:'',
      num:0,
      number:null
    })
    function randomSkaicius(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

  const buttonHandler = () => {
   form.num === 0 ?
   setForm((shape) => ({ ...shape, num:100, color:'red', number:randomSkaicius(5,25)})):
   setForm((shape) => ({ ...shape, num:0, color:'lightBlue', number:randomSkaicius(5,25)}))
  }
    return (
      <div className="App">
        <button style={{marginTop:'5px', backgroundColor:'lightBlue', borderRadius:'10px', width:'100px'}} onClick={buttonHandler}>Change</button>
        <Shapes num={form.num} color={form.color} number={form.number}/>
      </div>
    );
  }
  
  export default FirstEx;