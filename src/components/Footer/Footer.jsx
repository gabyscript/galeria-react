import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import Button from "react-bootstrap/Button";

const Footer = (props) => {
    return <footer className='page-footer'>
        <h6>{props.info}</h6>
        <Button variant="secondary">Ver más</Button>
    </footer>
}

export default Footer;