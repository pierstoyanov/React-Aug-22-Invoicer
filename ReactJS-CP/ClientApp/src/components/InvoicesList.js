import InvoiceCard from './InvoiceCard';

const InvoiceList = ({ invoices }) => {
    return (
        <>
        {invoices.length > 0
            ? (
                <ul className="invoices-list">
                    {invoices.map(x => <InvoiceCard key={x._id} pet={x} />)}
                </ul>
            ) 
            : <p className="no-invoices">No invoices present in database!</p>
        }
        </>
    );
}

export default InvoiceList;