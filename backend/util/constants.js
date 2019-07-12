let URL_MONGO = '';
let MONGO_OPTIONS = {};
let PORT_EXPRESS = 7000;
let JWT_SECRET = 'VuejsVuetifywithNodejsMongodb';
let EXPIRATION_TIME = 86400; // 1 day in seconds
let USER_MONGO = 'git-hub';
let PASSWORD_MONGO = '7V1qCR1VaJv8Y1HH';

if(process.env.NODE_ENV == 'test'){

    URL_MONGO = 'mongodb+srv://' + USER_MONGO + ':' + PASSWORD_MONGO + '@cluster0-fumhn.mongodb.net/admin';
    MONGO_OPTIONS = {
        user: USER_MONGO,
        pass: PASSWORD_MONGO,
        dbName: 'tests',
        keepAlive: true,
        reconnectTries: Number.MAX_VALUE,
        useNewUrlParser: true
    }
}
else{
    
    URL_MONGO = 'mongodb+srv://' + USER_MONGO + ':' + PASSWORD_MONGO + '@cluster0-fumhn.mongodb.net/admin';
    MONGO_OPTIONS = {
        user: USER_MONGO,
        pass: PASSWORD_MONGO,
        dbName: 'git-hub',
        keepAlive: true,
        reconnectTries: Number.MAX_VALUE,
        useNewUrlParser: true
    }
}

module.exports = {
    URL_MONGO,
    MONGO_OPTIONS,
    PORT_EXPRESS,
    JWT_SECRET,
    EXPIRATION_TIME
}