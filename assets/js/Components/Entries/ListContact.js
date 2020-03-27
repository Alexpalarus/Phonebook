import React, {useContext,useEffect} from 'react';
import { ContactContext } from '../../context/contactContext';
import Contact from './Contact';
import axios from 'axios';



export default function ListContact() {
    const { contacts, dispatch } = useContext(ContactContext);

    useEffect(() => {
        let mounted = true;
        console.log('ListContact');
        if(contacts.length === 0) {
            axios.get('/api/phonebooks')
            .then(response => {
                if (mounted){
                    dispatch({type: 'SET_CONTACTS', payload: response.data['hydra:member']});
                }
            });
        }
        return () => mounted = false;
    }, [contacts])

    return (
        <>
            <h1 className="display-6 my-4 text-light"><i className="fas fa-address-book mr-2 text-light"></i>Contacts</h1>
            <div className="contact-container d-flex align-items-center flex-wrap justify-content-center">
            {contacts.map(contact => 
                <Contact 
                    key={contact.id}
                    id={contact.id}
                    firstName={contact.firstName}
                    lastName={contact.lastName}
                    number={contact.number}
                />)
            }  
            </div>
            
        </>
    )
}
