import React from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';


export default function Header() {

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark mb-3 py-2">
                <div className="container">
                    <Link to="/" className="navbar-brand">My Phonebook App</Link>
                    <Search />  
                    <ul className="navbar-nav d-inline-block">
                        <li className="nav-item ml-auto d-inline-block mr-4">
                            <Link to="/add" className="nav-link">Add an entry</Link>
                        </li>
                        <li className="nav-item ml-auto d-inline-block mr-2">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>                 
                </div>
            </nav>
        </div>
    )
}
