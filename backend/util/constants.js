let URL_MONGO = '';
let MONGO_OPTIONS = {};
let PORT_EXPRESS = 7000;
let JWT_SECRET = 'VuejsVuetifywithNodejsMongodb';
let EXPIRATION_TIME = 86400; // 1 day in seconds
let USER_MONGO = 'git-user';
let PASSWORD_MONGO = 'pjJIoPcI8gk9csny';

if(process.env.NODE_ENV == 'test'){

    URL_MONGO = 'mongodb+srv://' + USER_MONGO + ':' + PASSWORD_MONGO + '@boleto-byao3.mongodb.net/admin';
    MONGO_OPTIONS = {user: USER_MONGO, pass: PASSWORD_MONGO, dbName: 'testes', useNewUrlParser: true};
}
else{
    
    URL_MONGO = 'mongodb+srv://' + USER_MONGO + ':' + PASSWORD_MONGO + '@boleto-byao3.mongodb.net/admin';
    MONGO_OPTIONS = {user: USER_MONGO, pass: PASSWORD_MONGO, dbName: 'git-hub', useNewUrlParser: true};
}

module.exports = {
    URL_MONGO,
    MONGO_OPTIONS,
    PORT_EXPRESS,
    JWT_SECRET,
    EXPIRATION_TIME
}