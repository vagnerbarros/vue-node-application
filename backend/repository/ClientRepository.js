var Client = require('../schemas/ClientSchema');

class ClientRepository{

    async save(newClient){

        try{
            let saved = await newClient.save();
            return saved;
        }
        catch(err){
            throw err;
        }
    }

    async list(){

        try{
            let clients = await Client.find({}).exec();
            return clients;
        }
        catch(err){
            throw err;
        }
    }

    async remove(id){

        try{
            let removed = await Client.findOneAndRemove({_id: id}).exec();
            return removed;
        }
        catch(err){
            throw err;
        }
    }

    async update(client){

        try{
            let updated = await Client.findOneAndUpdate({_id: client._id}, client, {new: true}).exec(); 
            return updated;
        }
        catch(err){
            throw err;
        }
    }

    async findId(id){
        
        return await this.find({_id: id});
    }

    async find(query){

        try{
            let client = await Client.findOne(query).exec();
            return client;
        } 
        catch(err){
            throw err;
        }
    }
}

var client = new ClientRepository();

module.exports = client;


