const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDb = require('./config/connectDb');


//CONFIG dot env file 
dotenv.config();

// Database Connection
connectDb();



//rest Object 
const app = express();

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes 
app.get('/', (req, res) => {
    res.send('Hello World');
});

//port 
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.yellow.bold);
});