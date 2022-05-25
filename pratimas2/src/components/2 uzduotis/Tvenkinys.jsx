import { seaPlaners } from '../../data/Data'
import Bala from "../Bala";

const Tvenkinys = () => {
    return(
    <>
    <div style={{color:'red'}}>antras uždavinys</div>
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

export default Tvenkinys