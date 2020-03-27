export const reducer = (state, action) => {   
    switch (action.type) {
        case 'SET_CONTACTS':
            return action.payload;
        case 'DELETE_CONTACT':
            return [...state].filter(contact => contact.id !== action.payload); 
        case 'ADD_CONTACT':
            return [...state, action.payload];
        case 'MODIFY_CONTACT':
        return [state].filter(contact => contact.id);
        default:
            return state;
    }
}