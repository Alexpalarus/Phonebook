import React, { useState, useContext } from 'react';
import { ContactContext } from '../../context/contactContext';
import axios from 'axios';

export default function Search() {

    const [searchValue, setSearchValue] = useState('');
    const { dispatch } = useContext(ContactContext);

    const handleSubmit = e => {
        e.preventDefault();
        axios.get(`/api/phonebooks?firstName=${searchValue}&lastName=${searchValue}&number=${searchValue}`)
            .then(response => {
                dispatch({type: 'SET_CONTACTS', payload: response.data['hydra:member']});
            })
            .catch(e => {
                console.log(e)
            });
    }


    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }


    return (
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={searchValue} onChange={handleChange}/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    );
}
