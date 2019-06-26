var User = require("../schemas/UserSchema");

class UserRepository {
  
    async save(user) {

        try {

            let salvo = await user.save();
            return salvo;
        } 
        catch (err) {
            throw err;
        }
    }

    async update(user){

        try{  

            let updated = await User.findOneAndUpdate({_id: user._id}, user, {new: true}).exec(); 
            return updated;
        }
        catch(err){
            throw err;
        }
    }

    async userEmail(email){

        return await this.queryUser({email: email});
    }

    async userId(id){
        
        return await this.queryUser({_id: id});
    }

    async queryUser(query) {
        
        try {
            let user = await User.findOne(query).exec();
            return user;  
        } 
        catch (err) {
            throw err;
        }
    }
}

let user = new UserRepository();

module.exports = user;
