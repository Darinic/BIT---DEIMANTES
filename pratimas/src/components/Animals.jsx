import Animal from "./Animal"
import {animals} from "../data.js/data"

const Animals = () => {
    return(
        <>
        {animals.map(el => ( 
        <Animal 
        key={el.id}
        gyvunas={el.animal}
        url={el.img}
        />
        ))}
        </>
    )
}

export default Animals