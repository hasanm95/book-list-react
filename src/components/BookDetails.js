import React, {useContext} from 'react';
import { BookContext } from './../contexts/BookContext';

const BookDetails = ({book}) => {
    const {dispatch} = useContext(BookContext)
    return (
        <li>
            <h2>{book.title}</h2>
            <h4>{book.author}</h4>
            <h6 onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>Remove</h6>
        </li>
    );
}

export default BookDetails;
