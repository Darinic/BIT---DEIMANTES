import { Card } from 'react-bootstrap'
const Bala = (props) => {
    return(
        <div className="card">
            <Card>
            <br/>
            {props.type}
            <br/>
            <p style={{background:`${props.color}`}}>{props.name}</p>
            <br/>
            </Card>
        </div>
    )
}

export default Bala