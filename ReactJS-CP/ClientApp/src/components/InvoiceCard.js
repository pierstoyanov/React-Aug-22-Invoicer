import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


const InvoiceCard = ({invoice}) => {
    return (
        <Container>
        <div className="card" style="width: 18rem;">
        <div className="card-body">
            <h5 className="card-title">Number {invoice.number}</h5>
            <p className="card-text"> To {invoice.receiver}</p>
            <p className="card-text"> Date: {invoice.Date}</p>
            <Link to={`/invoice/${invoice.ID}`} className="btn btn-success">Details</Link>
        </div>
        </div>
        </Container>
    );
}

export default InvoiceCard;