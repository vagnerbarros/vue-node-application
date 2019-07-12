let URL_ANRON_API
const TIMEOUT = 30000;

if(process.env.NODE_ENV === 'production'){
    URL_ANRON_API = 'http://127.0.0.1:7000';
}
else{
    URL_ANRON_API = 'http://127.0.0.1:7000';
}

module.exports = {
    URL_ANRON_API,
    TIMEOUT
}