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

const API_PORT = constants.PORT_EXPRESS || 7000;
const AMBIENTE = 'production';

app.listen(API_PORT, () => {
    console.log(`API EasyWeb em execução. \n Ambiente: ${AMBIENTE} \n PORTA: ${API_PORT}`);
});