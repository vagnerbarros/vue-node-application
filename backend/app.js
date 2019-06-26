const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const initMongo = require('./util/mongo');
const constants = require('./util/constants');

app.use(bodyParser.urlencoded({ limit: '50mb', extended : true}));
app.use(bodyParser.json({limit : '50mb'}));
app.use(cors());

// Init MongoDB
initMongo()

const userRouter = require('./routes/UserRouter');

app.use(userRouter);

app.listen(constants.PORT_EXPRESS);