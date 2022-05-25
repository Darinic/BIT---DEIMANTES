import { Card } from "react-bootstrap";
const Knyga = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Card style={{width:'30rem', margin:'auto'}}>
        <Card.Header>
        <h2>{props.author}</h2>
        <h3>{props.title}</h3>
        </Card.Header>
        <Card.Body>
        <img src={props.img} alt={props.title} />
        <p>Price: {props.price}</p>
        <p>{props.type}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Knyga;