import './App.css';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';
import React from 'react';
import AddBook from './components/AddBook';
import Books from './components/book/Books';
import BookDetail from './components/book/BookDetail';
import Home from './components/Home';


function App() {
  return (
  <React.Fragment>
    <header>
    <Header />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/add" element={<AddBook />} exact />
        <Route path="/books" element={<Books />} exact />
        <Route path="/books/:id" element={<BookDetail />} exact />
      </Routes>
    </main>
  </React.Fragment>
   
  
  );
}

export default App;
