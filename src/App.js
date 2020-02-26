import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Nav from './components/Nav';
import BookList from './components/BookList';
import BookForm from './components/BookForm';



function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Nav/>
        <BookList/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
