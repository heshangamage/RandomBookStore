import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name : {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    available: {
        type: Boolean,
        require: true
    },
    image: {
        type: String,
        required: true
    }
})

export default mongoose.model("Book", bookSchema);