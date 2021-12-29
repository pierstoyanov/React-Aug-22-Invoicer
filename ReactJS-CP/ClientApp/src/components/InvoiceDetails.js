import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
// import { useNotificationContext, types } from '../../contexts/NotificationContext';

import { Button, Container } from 'react-bootstrap';
import ConfirmDialog from '../Common/ConfirmDialog';

const InvoiceDetails = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { invoiceId } = useParams();
    const [invoice, setInvoice] = useState();
    // const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    // useEffect(() => {
    //     likeService.getPetLikes(petId)
    //         .then(likes => {
    //             setPet(state => ({...state, likes}))
    //         })
    // }, []);

    // const deleteHandler = (e) => {
    //     e.preventDefault();

    //     petService.destroy(petId, user.accessToken)
    //         .then(() => {
    //             navigate('/dashboard');
    //         })
    //         .finally(() => {
    //             setShowDeleteDialog(false);
    //         });
    // };

    // const deleteClickHandler = (e) => {
    //     e.preventDefault();
    //     console.log(process.env.NODE_ENV);
    //     setShowDeleteDialog(true);
    // }

    // const ownerButtons = (
    //     <>
    //         <Link className="button" to={`/edit/${pet._id}`}>Edit</Link>
    //         <a className="button" href="#" onClick={deleteClickHandler}>Delete</a>
    //     </>
    // );

    // const userButtons = <Button  >Like</Button>;

    return (
        <Container>
            <div className="mx-auto">
                <h2>Login</h2>
            </div>
            <form >
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" id="password" placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Container>
    );
}

export default InvoiceDetails;