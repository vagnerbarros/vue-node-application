let URL_MONGO = '';
let MONGO_OPTIONS = {};
let PORT_EXPRESS = 5000;
let JWT_SECRET = 'VuejsVuetifywithNodejsMongodb';
let EXPIRATION_TIME = 86400; // 1 day in seconds

if(process.env.NODE_ENV == 'test'){

    URL_MONGO = 'mongodb+srv://git-hub:x8YXB8213SuCEMeu@cluster0-fumhn.mongodb.net/admin';
    MONGO_OPTIONS = {
        user: 'git-hub',
        pass: 'x8YXB8213SuCEMeu',
        dbName: 'tests',
        keepAlive: true,
        reconnectTries: Number.MAX_VALUE,
        useNewUrlParser: true
    }
}
else{
    
    URL_MONGO = 'mongodb+srv://git-hub:x8YXB8213SuCEMeu@cluster0-fumhn.mongodb.net/admin';
    MONGO_OPTIONS = {
        user: 'git-hub',
        pass: 'x8YXB8213SuCEMeu',
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