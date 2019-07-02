const userModel = require('../model/UserModel');

class controllerAuth{

    login(request, response){

        let credential = request.body;

        userModel.login(credential.email, credential.password)
        .then(result => {
            response.status(200).send(result);
        })
        .catch(err => {
            response.status(500).send(err);
        })
    }

    createUser(request, response){

        let user = request.body;

        userModel.save(user)
        .then(result => {
            response.status(200).send(result);
        })
        .catch(err => {
            response.status(500).send(err);
        });
    }
}

let user = new controllerAuth();

module.exports = user;