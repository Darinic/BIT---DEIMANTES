import { Card } from 'react-bootstrap'
const Daiktas = (props) => {
    return(
        <div className="card">
            <Card>
            {props.key}
            <br/>
            {props.type}
            <br/>
            {props.name}
            <br/>
            {props.color}
            </Card>
        </div>
    )
}

export default Daiktas