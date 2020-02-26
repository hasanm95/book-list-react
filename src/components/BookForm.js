import React, {useState, useContext} from 'react';
import { BookContext } from './../contexts/BookContext';

const BookForm = () => {
    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {
            title,
            author
        }});
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    type="text"
                    placeholder="Book Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <br/><br/>
            <div>
                <input 
                    type="text"
                    placeholder="Book Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default BookForm;
