const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema 
const productSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    quote: { type: String, required: true },
    author: { type: String, required: true }
});

exports.Product = mongoose.model('Product', productSchema);