var repository = require('../repository/ClientRepository');
var Client = require('../schemas/ClientSchema');

class ClientModel {

    async save(client) {

        try{

            let newClient = Client(client);
            return repository.save(newClient);
        }
        catch(err){
            throw err;
        }
    }

    list() {
        
        try{

            return repository.list();
        }
        catch(err){
            throw err;
        }
    }

    remove(id){
        
        try{

            return repository.remove(id);
        }
        catch(err){
            throw err;
        }
    }

    async update(current){

        try{
            let client = await repository.findId(current._id);    
            if(client){
                return await repository.update(current);
            }
        }
        catch(err){
            throw err;
        }
    }
}

var client = new ClientModel();

module.exports = client;