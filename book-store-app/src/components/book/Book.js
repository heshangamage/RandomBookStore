import React from 'react';
import { Button } from '@mui/material';
import "./Book.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Book = (props) => {
  const {_id, name, author, description, price, image} = props.book;
  const history = useNavigate();

    const deleteHandler =async () => {
     await axios.delete(`http://localhost:4000/books/${_id}`)
     .then(res => res.data)
     .then(() => history("/"))
     .then(() => history("/books"));
    }
  return (
    <div className='card'>
        <img src={image} alt={name} />
        <article>By {author}</article>
        <h4>{name}</h4>
        <p>{description}</p>
        <p>Rs {price}</p>
        <Button LinkComponent={Link} to={`/books/${_id}`} value={`/books/${_id}`} sx={{mt: "auto"}}>Update</Button>
        <Button onClick={deleteHandler} sx={{mt: "auto"}}>Delete</Button>
    </div>
  )
};

export default Book;