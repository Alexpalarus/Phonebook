import React, { createContext, useReducer } from 'react';
import { reducer } from '../reducer/contactReducer';


export const ContactContext = createContext();

export const ContactProvider = ({children}) => {
    const [contacts, dispatch] = useReducer(reducer, []);

    return (
        <ContactContext.Provider value={{contacts, dispatch}}>
            {children}
        </ContactContext.Provider>
    )
}
