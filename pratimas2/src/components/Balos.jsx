import { seaPlaners } from "../data/Data";
import Bala from "./Bala";

const Balos = () => {
    return(
        <>
        {seaPlaners.map(el => (
        <Bala 
        key={el.id}
        type={el.type}
        name={el.name}
        color={el.color}/>    
        ))
        }
        </>
    )
}

export default Balos