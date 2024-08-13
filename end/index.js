const express = require('express');
const app = express();
const port = 5000;
const dbConnect = require('./config/dbConnect');
const methodOverride = require('method-override');
const cors = require('cors');
require('dotenv').config();

dbConnect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/register', require('./routes'));
app.use('/login', require('./routes'));
app.use('/home', require('./routes'));
app.use('/', require('./routes'));
app.use('/users/:id', require('./routes'));
app.use('/orders/:id', require('./routes'));
app.use('/orderlist/:id', require('./routes'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
