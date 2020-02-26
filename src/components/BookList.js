import React, {useContext} from 'react';
import { BookContext } from './../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const {books} = useContext(BookContext);
    console.log(books)
    return books.length ?  (
        <div className="book-list">
            <ul>
                {
                    books.map(book => {
                        return <BookDetails book={book} key={book.id}/>
                    })
                }
            </ul>
        </div>
    ) : (<div>No items to show</div>)
}

export default BookList;
