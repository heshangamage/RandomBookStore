import express from 'express';
import mongoose from 'mongoose';
import router from "./routes/book-route.js";
import cors from "cors";
const app = express();

// middlewares 
app.use(express.json());
app.use(cors());
app.use('/books', router);

mongoose.connect("mongodb+srv://admin:admin@cluster0.kakbz.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(() => console.log("connected to the database"))
.then(() => {
    app.listen(4000);
})
.catch((err) => console.log(err));

