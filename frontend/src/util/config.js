let URL_ANRON_API;
const TIMEOUT = 30000;

if(process.env.NODE_ENV === 'production'){
  URL_ANRON_API = 'http://18.231.183.249:7000';
}
else{
  URL_ANRON_API = 'http://18.231.183.249:7000';
}

module.exports = {
  URL_ANRON_API,
  TIMEOUT
};