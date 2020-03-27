import React, {useState, useContext} from 'react';
import { ContactContext } from '../../context/contactContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Contact({id, firstName, lastName, number}) {

    const [show, setShow] = useState(false)
    const { dispatch } = useContext(ContactContext)

    const handleShow = () => {
        setShow(!show)
    }

    const handleRemove = (id) => {
        axios.delete('/api/phonebooks/'+id)
        .then( response => {
            dispatch({type: 'DELETE_CONTACT', payload:id});
        })
        .catch(e => {
            console.log(e)
        })
    ;}

    return (
        <div className="card card-in-row border-info mb-3 mx-3" style={{ width: '18rem'}}>
            <div className="card-header d-flex align-items-center justify-content-between">
                <span>{firstName}<i className="fas fa-sort-down ml-1" style={{cursor: 'pointer'}} onClick={handleShow}></i></span> 
                <i className="fas fa-times" style={{cursor: 'pointer', float: 'right', color:'red'}} onClick={() => handleRemove(id)}></i>
            </div>
            {show ? (
                <div className="card-body text-info" style={{ height: '8rem'}}>
                    <h5 className="card-title">{firstName} {lastName}</h5>
                    <p className="text-muted">Phone Number : <a href={`tel:${number}`}>{number}</a></p>
                    <Link to={`/edit/${id}`} className="text-primary font-weight-bold mt-3" style={{cursor: 'pointer'}}>Edit</Link>
                </div>   
            ) : null}
        </div>
    )
}
