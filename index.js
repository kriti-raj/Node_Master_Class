require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const server = express();
const productRouter = require('./Routes/routes');


// MongoDB Connect
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    // await mongoose.connect('mongodb://127.0.0.1:27017/products');
    console.log('DB Connected Successfully');
}


// bodyParser
server.use(express.json());
// server.use(morgan('default'));
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products', productRouter.router);


server.listen(process.env.PORT, () => {
    console.log('Server Started on PORT', process.env.PORT);
});