const express = require('express');
const app=express();
const cors = require('cors')
const dotenv=require('dotenv');
const path = require('path');

const connectDB = require('./config/connectDB');

dotenv.config({path: path.join(__dirname, 'config', 'config.env')});

const todo = require('./routes/todo');

connectDB();
app.use(cors())
app.use(express.json());
app.use('/api/',todo);

app.listen(process.env.PORT, () => {
    console.log(`server listening to ${process.env.PORT}`)
});