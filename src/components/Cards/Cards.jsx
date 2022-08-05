import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cards = (props) => {
    return (<div>
        <Card className="tarjetas" style={{ width: "20vw"}}>
        <Card.Img variant="top" src={props.url}
        />
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
        <Button variant="primary">Ver más</Button>
        </Card.Body>
        </Card>
        </div>
        );
}

export default Cards;