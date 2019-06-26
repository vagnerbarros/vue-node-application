let repository = require('../repository/UserRepository');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var constants = require("../util/constants");
let User = require('../schemas/UserSchema');

class UserModel{

    async login(email, password){

        try {
        
            let user = await repository.userEmail(email);
            if(user){
                let passwordCorrect = bcrypt.compareSync(password, user.password);
                if(passwordCorrect) {
                
                    let token = jwt.sign({ id: user._id }, constants.JWT_SECRET, { expiresIn: constants.EXPIRATION_TIME });
                    let sucessLogin = { name: user.name, sucess: true, msg: "", token: token };

                    return sucessLogin;
                } 
                else{
                    return { sucesso: false, msg: "E-mail/Password Incorrect", token: ""};
                }
            }
            else{
                return { sucess: false, msg: "E-mail/Password Incorrect", token: "" };
            }
        } 
        catch (err) {
            return { sucess: false, msg: err.toString(), token: ""};
        }
    }

    async save(user) {
        
        try {

            let existEmail = await repository.userEmail(user.email);
            if (!existEmail) {

                let passwordHash = bcrypt.hashSync(user.password, 8);
                let newUser = User(user);
                newUser.password = passwordHash;

                let userSaved = await repository.save(newUser);
                if (userSaved) {
                    return { sucess: true,  msg: "User Created"}
                } else {
                    return { sucess: false, msg: "Failed to create User"}
                }
            } else {
                return {sucess: false, msg: "E-Mail already exists"};
            }
        } 
        catch (err) {
            return { sucess: false, msg: err.toString()};
        }
    }
}

let user = new UserModel();

module.exports = user;