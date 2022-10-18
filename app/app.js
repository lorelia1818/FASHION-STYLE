const express = require('express');

//Initialitions
const app = express();

//Setting
app.set('port', process.env.PORT || 4000);
//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/orderproduct.route'))
app.use(require('./routes/orders.route'))

module.exports = app