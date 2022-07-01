import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormLabel, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { Box } from '@mui/system';
import {useNavigate} from "react-router-dom";

function BookDetail() {
  const history = useNavigate();
  const [inputs, setInputs] = useState();
  const [checked, setChecked] = useState(false);
  const id = useParams().id;

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendUpdateBookRequest().then(() => history('/books'))
  }

    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:4000/books/${id}`).then(res => res.data)
            .then(data=> setInputs(data.book));
        };
        fetchHandler();
    }, [id]);

    const sendUpdateBookRequest = async () => {
        await axios.put(`http://localhost:4000/books/${id}`, {
          name: String(inputs.name),
          author: String(inputs.author),
          description: String(inputs.description),
          price: Number(inputs.price),
          image: String(inputs.image),
          available: Boolean(checked)
        }).then(res => res.data);
      }


  return (
    <div>
    {inputs && <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700} alignContent="center" marginLeft="auto" marginRight="auto"
        marginTop={10}>
        <FormLabel>Name</FormLabel>
        <TextField margin='normal' fullWidth variant='outlined' name='name' value={inputs.name} onChange={handleChange} />
        <FormLabel>Author</FormLabel>
        <TextField margin='normal' fullWidth variant='outlined' name='author' value={inputs.author} onChange={handleChange} />
        <FormLabel>Description</FormLabel>
        <TextField margin='normal' fullWidth variant='outlined' name='description' value={inputs.description} onChange={handleChange} />
        <FormLabel>Price</FormLabel>
        <TextField type="number" margin='normal' fullWidth variant='outlined' name='price' value={inputs.price} onChange={handleChange} />
        <FormLabel>Image</FormLabel>
        <TextField margin='normal' fullWidth variant='outlined' name='image' value={inputs.image} onChange={handleChange} />
        <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Available" />
        <Button type="submit" variant="contained">Update Book</Button>
        </Box>
    </form>}
    </div>
  )
}

export default BookDetail