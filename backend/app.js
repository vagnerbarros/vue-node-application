const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const constants = require('./util/constants');

//init mongodb
require('./util/mongo');

app.use(bodyParser.urlencoded({ limit: '50mb', extended : true}));
app.use(bodyParser.json({limit : '50mb'}));
app.use(cors());

const userRouter = require('./routes/UserRouter');
const clientRouter = require('./routes/ClientRouter');

app.use(userRouter);
app.use(clientRouter);

app.listen(constants.PORT_EXPRESS);